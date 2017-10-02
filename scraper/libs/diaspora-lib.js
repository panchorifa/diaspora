import * as diasporaStream from './diaspora-stream-lib'

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
  return diasporaStream.parse(chromeless, limit, offset)
}
