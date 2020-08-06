#### <span style="text-align: center">AUTENTIQUE Api v2</span>
# 🚀 Usage
<pre>npm i autentique-v2-nodejs</pre>

**Set file .env**
<pre>
AUTENTIQUE_URL=https://api.autentique.com.br/v2/graphql
AUTENTIQUE_TOKEN=YOURTOKEN
AUTENTIQUE_DEV_MODE=true || false
# IF TRUE, DOCUMENT CREATE IN MODE SANDBOX
</pre>

**Import library** `import autentique from from 'thiagozampieri\autentique-v2-nodejs`

**Instance** <pre>autentique.token = AUTENTIQUE_TOKEN</pre>

#### 1 - Listar todos os Documentos
<pre>autentique.document.listAll(page); // if not isset page is equal 1</pre>

#### 2 - Listar um Documento
<pre>autentique.document.listById(documentId);</pre>

#### 3 - Criar um Documento
<pre>attributes = {
         document: {
             name: 'NOME DO DOCUMENTO'
         },
         signers: [
            {
                email: 'EMAIL-QUEM-VAI-ASSINAR@gmail.com',
                action: 'SIGN',
                positions: [
                    {
                        x: '50', // Posição do Eixo X da ASSINATURA (0 a 100) 
                        y: '80', // Posição do Eixo Y da ASSINATURA (0 a 100)
                        z: '1'   // Página da ASSINATURA
                    },
                    {
                        x: '50', // Posição do Eixo X da ASSINATURA (0 a 100)
                        y: '50', // Posição do Eixo Y da ASSINATURA (0 a 100)
                        z: '2'   // Página da ASSINATURA
                    }
                ]
            },
            { 
                email: 'thiago.zampieri@gmail.com',
                action: 'SIGN'
            },
            { 
                name: 'thiago zampieri',
                action: 'SIGN'
            }
        ],
        file: 'https://www.documento.com.br/Arquivo.pdf'
    };
 
 autentique.document.create(attributes);
 </pre>

#### 4 - Assinar um Documento
<pre>autentique.document.signById(documentId);</pre>

#### 5 - Deletar um Documento
<pre>autentique.document.deleteById(documentId);</pre>
