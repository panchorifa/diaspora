const SIGNIN_URL = 'https://joindiaspora.com/users/sign_in/'
const PAGE_LIMIT = 15
const PAGE_TIMEOUT = 3000

export async function login(chromeless, username, password) {
  console.log('Login Attempt.....')
  await chromeless
  .goto(SIGNIN_URL)
  .wait('div#login')
  .type(username, 'input#user_username')
  .type(password, 'input#user_password')
  .click('input[name="commit"]')
  .wait(PAGE_TIMEOUT)
  return chromeless.exists('div#main_stream')
}

export async function paginate(chromeless, limit) {
  let loadedPosts = PAGE_LIMIT
  while(loadedPosts < limit) {
    await chromeless.scrollTo(0, 9999999).wait(PAGE_TIMEOUT)
    loadedPosts += PAGE_LIMIT
    console.log("Paginate : " + loadedPosts)
  }
}

export async function stream(chromeless, limit=15, offset=0) {

  let posts = (await chromeless.evaluate(() => {

    const POST_SELECTOR = '#main_stream .stream-element'
    const POST_AUTHOR_SELECTOR = POST_SELECTOR + ' .post-controls'
    const POST_CONTENT_SELECTOR = POST_SELECTOR + ' .post-content .markdown-content'
    const POST_TEXT_SELECTOR = POST_CONTENT_SELECTOR + ' p'
    const POST_TIME_SELECTOR = POST_SELECTOR + ' span.details'
    const POST_LIKES_SELECTOR = '#main_stream .likes a'
    const POST_RESHARES_SELECTOR = '#main_stream .reshares a'
    const POST_LIKES_SUFFIX = ' Like'
    const POST_RESHARES_SUFFIX = ' Reshare'

    function postText(i) {
      return document.querySelectorAll(POST_TEXT_SELECTOR)[i].innerText
    }

    function postTime(i) {
      const el = document.querySelectorAll(POST_TIME_SELECTOR)[i]
      const html = el.children[0].innerHTML
      const idx = html.indexOf('datetime=')+10
      return html.substring(idx, idx+24)
    }

    function postTags(i) {
      const html = document.querySelectorAll(POST_CONTENT_SELECTOR)[i].innerHTML
      let tags = []
      html.replace(/[^<]*(<a href="([^"]+)" class="tag">([^<]+)<\/a>)/g, function () {
        tags.push(arguments[3])
      })
      return tags
    }

    // Parses likes and reshares
    function optionalInt(selector, i, suffix=null) {
      const el = document.querySelectorAll(selector)[i]
      if(el) {
        const text = el.innerText
        return suffix ? parseInt(text.substring(0, text.indexOf(suffix))) : text
      }
      return 0
    }

    function author(i) {
      const author = document.querySelectorAll(POST_AUTHOR_SELECTOR)[i]
      return author.parentNode.children[1].children[0]
    }

    function post(i) {
      const post_author = author(i)
      return {
        author_name: post_author.innerText,
        author_link: post_author.href,
        post_time: postTime(i),
        post_text: postText(i),
        post_tags: postTags(i),
        post_likes: optionalInt(POST_LIKES_SELECTOR, i, POST_LIKES_SUFFIX),
        post_reshares: optionalInt(POST_RESHARES_SELECTOR, i, POST_RESHARES_SUFFIX)
      }
    }

    return [].map.call(
      document.querySelectorAll(POST_SELECTOR),
      (el, i) => (post(i))
    )
  }))
  if(posts.length > limit) {
    posts = posts.slice(offset, (offset+limit))
  }
  return posts
}
