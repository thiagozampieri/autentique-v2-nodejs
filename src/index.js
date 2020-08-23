'use strict'
import document from './document'
import folder from './folder'
import pjson from '../package.json'

const instance = {
  version: pjson.version,
  token: null,
  sandbox: false
}
instance.document = document(instance)
instance.folder = folder(instance)

export default instance