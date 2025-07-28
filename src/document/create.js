'use strict'
import fs from 'fs'
import axios from 'axios'
import FormData from 'form-data'
import Api from '../common/Api'
import utils from '../common/utils'

const create = async ({ token, sandbox = false }, { document, signers, filename: originalFilename, file, fileUrl, organizationId, folderId }) => {
  try {    
    const variables = {
      document: {
        ...document,
        name: document.name.substring(0, 199)
      },
      signers,
      file: null,
      organizationId,
      folderId,
    }

    const filename = `${__dirname}/../resources/documents/create.graphql`
    const operations = fs.readFileSync(filename)
      .toString()
      .replace(/[\n\r]/gi, '')
      .replace('$variables', JSON.stringify(variables))
      .replace('$sandbox', sandbox.toString())

    let buffer = file
    if (fileUrl) {
      const response = await axios.get(fileUrl, { responseType: 'arraybuffer' })
      buffer = Buffer.from(response.data)
    }
    
    const formData = new FormData()
    formData.append('operations', utils.query(operations))
    formData.append('map', '{"file": ["variables.file"]}')
    formData.append('file', buffer, {
      filename: originalFilename,
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
    console.error(error)
  }  
}

export {
  create
}