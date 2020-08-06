'use strict'
import fs from 'fs'
import { AUTENTIQUE_DEV_MODE } from 'babel-dotenv'
import Api from '../common/Api'
import utils from '../common/utils'

const signById = async ({ token }, { documentId }) => {
  try {
    const filename = `${__dirname}/../resources/documents/signById.graphql`
    const operations = fs.readFileSync(filename)
      .toString()
      .replace(/[\n\r]/gi, '')
      .replace('$documentId', documentId)
      .replace('$sandbox', AUTENTIQUE_DEV_MODE.toString())

    const formData = (utils.query(operations))
    const response = await Api(token).post('/graphql', formData, {
      processData: false,
      withCredentials: true,
      cache: false,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return response && response.data
  } catch (error) {
    console.log(error)
  }  
}

export {
  signById
}