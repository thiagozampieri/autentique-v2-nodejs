'use strict'
import axios from 'axios'
import { AUTENTIQUE_URL, AUTENTIQUE_TOKEN } from 'babel-dotenv'

const Api = (token) => axios.create({
  baseURL: AUTENTIQUE_URL,
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${token || AUTENTIQUE_TOKEN}`
  }
})

export default Api