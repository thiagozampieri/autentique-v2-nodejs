'use strict'
import fs from 'fs'
import Api from '../common/Api'
import utils from '../common/utils'

const moveDocumentById = async ({ token, sandbox = false }, { folderId, documentId }) => {
  try {
    const filename = `${__dirname}/../resources/folders/moveDocumentById.graphql`
    const operations = fs.readFileSync(filename)
      .toString()
      .replace(/[\n\r]/gi, '')
      .replace('$folderId', folderId)
      .replace('$documentId', documentId)
      .replace('$sandbox', sandbox.toString())

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
  moveDocumentById
}