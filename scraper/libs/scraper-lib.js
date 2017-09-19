import Chromeless from 'chromeless'
import * as diaspora from './diaspora-lib'

const USERNAME = process.env.DIASPORA_USERNAME
const PASSWORD = process.env.DIASPORA_PASSWORD

export async function scrapeStream(limit, offset) {
  const chromeless = new Chromeless({remote: true,
    scrollBeforeClick: true, implicitWait: true})

  if(await diaspora.login(chromeless, USERNAME, PASSWORD)) {
    console.log('Successfully logged in!')

    let pageLimit = limit
    if(offset > 0) {
      pageLimit += offset
    }
    await diaspora.paginate(chromeless, pageLimit)

    let stream = await diaspora.stream(chromeless)
    if(stream.length > limit) {
      stream = stream.slice(offset, (offset+limit))
    }
    console.log("Found "+stream.length+" posts.")

    await chromeless.end()
    return {stream: stream}
  }
  console.log('Failed to log in!')
  return {error: 'Unable to login!'}
}

// scrapeStream()
