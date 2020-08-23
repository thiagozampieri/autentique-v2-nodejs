'use strict'
import fs from 'fs'
import axios from 'axios'
import path from 'path'
import FormData from 'form-data'
import Api from '../common/Api'
import utils from '../common/utils'

const create = async ({ token, sandbox = false }, { document, signers, file }) => {
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
      .replace('$sandbox', sandbox.toString())

    const buffer = await axios.get(file, { responseType: 'arraybuffer' })
    
    const formData = new FormData()
    formData.append('operations', utils.query(operations))
    formData.append('map', '{"file": ["variables.file"]}')
    formData.append('file', Buffer.from(buffer.data), {
      filename: path.basename(file),
      contentType: 'application/octet-stream',
      mimeType: 'application/octet-stream'
    })
    
    const response = await Api(token).post('/graphql', formData, {
      processData: false,
      withCredentials: true,
      cache: false,
      timeout: 180000,
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