'use strict'
export default async (autentique) => {  
  const attributes = { 
    folder: { name: 'Contratos assinados' }
  }
  
  const response = await autentique.folder.create(attributes) 
  if (response) console.log(response)
}