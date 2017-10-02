import * as scraper from './libs/scraper-lib'
import { success, failure } from './libs/response-lib';

const DEFAULT_LIMIT = 15
const DEFAULT_OFFSET = 0

export async function main(event, context, callback) {
  try {
    const limit = event.query.limit || DEFAULT_LIMIT
    const offset = event.query.offset || DEFAULT_OFFSET
    const stream = await scraper.scrapeStream(parseInt(limit), parseInt(offset))
    callback(null, success(stream))
  } catch(e) {
    console.log(e)
    callback(null, failure({status: false}))
  }
}
