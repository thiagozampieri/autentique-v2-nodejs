'use strict'
import autentique from '../src'
import { AUTENTIQUE_TOKEN } from 'babel-dotenv'
import createDocument from './document/create'
import createFolder from './folder/create'
import moveDocumentById from './folder/moveDocumentById'

(async () => {
  autentique.token = AUTENTIQUE_TOKEN
  await createDocument(autentique) 
  await createFolder(autentique) 
})()