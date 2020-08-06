'use strict'
import { create } from './create' 
import { listAll } from './listAll' 
import { listById } from './listById' 
import { deleteById } from './deleteById' 
import { listDocumentsById } from './listDocumentsById' 
import { moveDocumentById } from './moveDocumentById' 

const folder = (def) => ({
  create: (args) => create(def, args),
  listAll: (args) => listAll(def, args),
  listById: (args) => listById(def, args),
  listDocumentsById: (args) => listDocumentsById(def, args),
  moveDocumentById: (args) => moveDocumentById(def, args),
  deleteById: (args) => deleteById(def, args)
})

export default folder