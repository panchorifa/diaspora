// import {store} from '../store'
// import * as api from '../api/app'
// import * as types from '../constants/ActionTypes'

// const STREAM_URL = 'https://sy7l8evnsj.execute-api.us-west-2.amazonaws.com/dev/stream?limit=3'
const STREAM_URL = 'http://localhost:8000/stream'

const load = async (url) => {
  const response = await fetch(url)
  return await response.json()
}


export async function loadStream(attempt=0) {
  //TODO detect status_code and retry
  const r = (await load(STREAM_URL))
  console.log(r)
  if(r.statusCode === 200) {
    if(r.body.stream) {
      if(r.body.stream.length > 0) {
        return r.body.stream
      } else if(attempt < 1){
        loadStream(attempt=1)
      }
    }
    return []
  } else if(r.statusCode === 504 && attempt<1) {
    loadStream(attempt=1)
  }
  return []
}
