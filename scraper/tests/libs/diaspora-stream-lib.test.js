import Chromeless from 'chromeless'
import * as diasporaStream from '../../libs/diaspora-stream-lib'

const CHROMELESS_OPTIONS = {
  remote: true,
  scrollBeforeClick: true,
  implicitWait: true
}

const chromeless = new Chromeless(CHROMELESS_OPTIONS)
const STREAM_MOCK_URL = 'https://s3-us-west-2.amazonaws.com/mockerymocks/stream.html'

jest.setTimeout(20000)

test('test stream scraper', async () => {
  await chromeless
    .goto(STREAM_MOCK_URL)
    .wait('#main_stream')

  const posts = await diasporaStream.parse(chromeless, 1)

  await chromeless.end()

  expect(posts.length).toBe(1);
  const post = posts[0]
  expect(post.author_name).toBe('diaspora* HQ')
  expect(post.author_link).toBe('https://s3-us-west-2.amazonaws.com/people/7bca7c80311b01332d046c626dd55703')
  expect(post.post_time).toBe('2017-09-28T21:53:36.000Z')
  expect(post.post_text).toBe('With a small delay, we froze diaspora* minor release 0.7.1.0. Please check the Changelog for more information on changes included in this release.')
  expect(post.post_likes).toBe(15)
  expect(post.post_reshares).toBe(3)
})

// Code to capture html
// const html = await chromeless
//     .goto('https://www.github.com')
//     .wait(5 * 1000)
//     .evaluate(() => document.documentElement.outerHTML);
