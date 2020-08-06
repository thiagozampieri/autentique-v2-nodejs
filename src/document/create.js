'use strict'
import fs from 'fs'
import request from 'request'
import FormData from 'form-data'
import { AUTENTIQUE_DEV_MODE } from 'babel-dotenv'
import Api from '../common/Api'
import utils from '../common/utils'

const create = async ({ token }, { document, signers, file }) => {
  try {
    const variables = {
      document,
      signers,
      file: null,
    }

    const filename = `${__dirname}/../resources/documents/create.graphql`
    const operations = fs.readFileSync(filename)
      .toString()
      .replace(/[\n\r]/gi, '')
      .replace('$variables', JSON.stringify(variables))
      .replace('$sandbox', AUTENTIQUE_DEV_MODE.toString())

    const formData = new FormData()
    formData.append('operations', utils.query(operations))
    formData.append('map', '{"file": ["variables.file"]}')
    formData.append('file', request(file))
    
    const response = await Api(token).post('/graphql', formData, {
      processData: false,
      withCredentials: true,
      cache: false,
      headers: {
        ...formData.getHeaders(),
        enctype: 'multipart/form-data',
        'content-type': `multipart/form-data; boundary=${formData._boundary}`,
        Accept: 'application/json'
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