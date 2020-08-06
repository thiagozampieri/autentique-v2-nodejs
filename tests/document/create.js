'use strict'
export default async (autentique) => {  
  const attributes = { 
    document: { name: 'modelo de contrato' },
    signers: [{ 
      email: 'thiago.zampieri@gmail.com',
      action: 'SIGN'
    }],
    file: 'https://cptstatic.s3.amazonaws.com/pdf/cpt/codigo-civil/modelo-contrato-prestacao-servicos-cursos-cpt.pdf'
  }
  
  const response = await autentique.document.create(attributes) 
  if (response) console.log(response)
}