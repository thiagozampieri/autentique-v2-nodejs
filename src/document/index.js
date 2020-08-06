'use strict'
import { create } from './create' 
import { listAll } from './listAll' 
import { listById } from './listById' 
import { deleteById } from './deleteById' 
import { signById } from './signById' 

const document = (def) => ({
  create: (args) => create(def, args),
  listAll: (args) => listAll(def, args),
  listById: (args) => listById(def, args),
  deleteById: (args) => deleteById(def, args),
  signById: (args) => signById(def, args)
})

export default document