#### <span style="text-align: center">AUTENTIQUE Api v2</span>
[![Latest Stable Version](https://img.shields.io/packagist/v/thiagozampieri/autentique-v2-nodejs)](https://packagist.org/packages/thiagozampieri/autentique-v2-nodejs)
[![Total Downloads](https://poser.pugx.org/thiagozampieri/autentique-v2-nodejs/downloads)](https://packagist.org/packages/thiagozampieri/autentique-v2-nodejs)
[![Build Status](https://travis-ci.org/thiagozampieri/autentique-v2-nodejs.svg?branch=master)](https://travis-ci.org/thiagozampieri/autentique-v2-nodejs)
[![codecov](https://codecov.io/gh/thiagozampieri/autentique-v2-nodejs/branch/master/graph/badge.svg)](https://codecov.io/gh/thiagozampieri/autentique-v2-nodejs)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/thiagozampieri/autentique-v2-nodejs/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/thiagozampieri/autentique-v2-nodejs/?branch=master)
[![Code Intelligence Status](https://scrutinizer-ci.com/g/thiagozampieri/autentique-v2-nodejs/badges/code-intelligence.svg?b=master)](https://scrutinizer-ci.com/code-intelligence)
[![License](https://poser.pugx.org/thiagozampieri/autentique-v2-nodejs/license)](https://packagist.org/packages/thiagozampieri/autentique-v2-nodejs)
# 🚀 Usage
<pre>yarn add thiagozampieri/autentique-v2-nodejs</pre>

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
