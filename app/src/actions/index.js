import {store} from '../store'
import * as types from '../constants/ActionTypes'

const STREAM_URL = 'https://sy7l8evnsj.execute-api.us-west-2.amazonaws.com/dev/stream'
// const STREAM_URL = 'http://localhost:8000/stream'

const load = async (url) => {
  const response = await fetch(url)
  return await response.json()
}


export async function loadStream(limit=10, attempt=0) {
  let q = ''
  if(limit){ q = '?limit='+limit }
  const r = (await load(STREAM_URL+q))
  if(r.statusCode === 200) {
    if(r.body.stream) {
      const stream = JSON.parse(r.body.stream)
      if(stream && stream.length > 0) {
        return stream
      } else if(attempt < 1){
        loadStream(limit, attempt=1)
      }
    }
    return []
  } else if(r.statusCode === 504 && attempt<1) {
    loadStream(limit, attempt=1)
  }
  return []
}

export async function setListMode() {
  store.dispatch({type: types.SET_MODE, mode: 'list'})
}
export async function setFormMode() {
  store.dispatch({type: types.SET_MODE, mode: 'form'})
}
export async function setEditMode() {
  store.dispatch({type: types.SET_MODE, mode: 'edit'})
}
