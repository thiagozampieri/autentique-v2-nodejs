'use strict'
import fs from 'fs'
import { AUTENTIQUE_DEV_MODE } from 'babel-dotenv'
import Api from '../common/Api'
import utils from '../common/utils'

const create = async ({ token }, { folder }) => {
  try {
    const variables = {
      folder
    }

    const filename = `${__dirname}/../resources/folders/create.graphql`
    const operations = fs.readFileSync(filename)
      .toString()
      .replace(/[\n\r]/gi, '')
      .replace('$variables', JSON.stringify(variables))
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
  create
}