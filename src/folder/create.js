'use strict'
import fs from 'fs'
import Api from '../common/Api'
import utils from '../common/utils'

const create = async ({ token, sandbox = false }, { folder }) => {
  try {
    const variables = {
      folder
    }

    const filename = `${__dirname}/../resources/folders/create.graphql`
    const operations = fs.readFileSync(filename)
      .toString()
      .replace(/[\n\r]/gi, '')
      .replace('$variables', JSON.stringify(variables))
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
    console.error(error)
  }  
}

export {
  create
}