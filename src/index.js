'use strict'
import document from './document'
import folder from './folder'

const instance = {
  version: '1.0.2',
  token: null
}
instance.document = document(instance)
instance.folder = folder(instance)

export default instance