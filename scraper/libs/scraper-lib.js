import Chromeless from 'chromeless'
import * as diaspora from './diaspora-lib'

const USERNAME = process.env.DIASPORA_USERNAME
const PASSWORD = process.env.DIASPORA_PASSWORD

const CHROMELESS_OPTIONS = {
  remote: true,
  scrollBeforeClick: true,
  implicitWait: true
}

export async function scrapeStream(limit, offset) {
  const chromeless = new Chromeless(CHROMELESS_OPTIONS)

  if(await diaspora.login(chromeless, USERNAME, PASSWORD)) {
    console.log('Successfully logged in!')

    await diaspora.paginate(chromeless, offset+limit)

    const stream = await diaspora.stream(chromeless, limit, offset)
    console.log("Found "+stream.length+" posts.")

    await chromeless.end()
    return {stream: stream}
  }
  console.log('Failed to log in!')
  return {error: 'Unable to login!'}
}

// Uncomment to test/try locally
// This auto-reloads after code updates, etc
// scrapeStream(3)
