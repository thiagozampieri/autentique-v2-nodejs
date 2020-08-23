'use strict'
import fs from 'fs'
import Api from '../common/Api'
import utils from '../common/utils'

const deleteById = async ({ token, sandbox = false }, { folderId }) => {
  try {
    const filename = `${__dirname}/../resources/folders/deleteById.graphql`
    const operations = fs.readFileSync(filename)
      .toString()
      .replace(/[\n\r]/gi, '')
      .replace('$folderId', folderId)
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
  deleteById
}