'use strict'
import autentique from '../src'
import { AUTENTIQUE_TOKEN, AUTENTIQUE_DEV_MODE } from 'babel-dotenv'
import createDocument from './document/create'

(async () => {
  autentique.token = AUTENTIQUE_TOKEN
  autentique.sandbox = AUTENTIQUE_DEV_MODE
  await createDocument(autentique) 
})()