# Como Iniciar um Projeto Node.js com Express

Este guia descreve o passo a passo para iniciar um projeto Node.js utilizando o `npm init` e configurar o Express.

## Passo 1: Inicializar o Projeto

1. Crie uma pasta para o projeto e navegue até ela:
    ```bash
    mkdir meu-projeto
    cd meu-projeto
    ```

2. Inicialize o projeto com o comando:
    ```bash
    npm init -y
    ```
    O comando `-y` cria um arquivo `package.json` com as configurações padrão.

## Passo 2: Instalar o Express

1. Instale o Express como dependência:
    ```bash
    npm install express
    ```

2. Verifique se o Express foi adicionado ao `package.json` na seção `dependencies`.

## Passo 3: Criar o Arquivo Principal

1. Crie um arquivo chamado `index.js`:
    ```bash
    touch index.js
    ```

2. Adicione o seguinte código básico ao arquivo para configurar o servidor Express:
    ```javascript
    const express = require('express');
    const app = express();

    const PORT = 3000;

    app.get('/', (req, res) => {
         res.send('Hello, World!');
    });

    app.listen(PORT, () => {
         console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
    ```

## Passo 4: Executar o Servidor

1. Inicie o servidor com o comando:
    ```bash
    node index.js
    ```

2. Acesse `http://localhost:3000` no navegador para verificar se o servidor está funcionando.

## Passo 5: Configuração Adicional (Opcional)

- Para reiniciar automaticamente o servidor ao salvar alterações, instale o `nodemon`:
  ```bash
  npm install --save-dev nodemon
  ```

- Atualize o `package.json` para usar o `nodemon`:
  ```json
  "scripts": {
        "start": "node index.js",
        "dev": "nodemon index.js"
  }
  ```

- Agora, inicie o servidor em modo de desenvolvimento:
  ```bash
  npm run dev
  ```

Pronto! Você configurou um projeto Node.js com Express.

## Passo 6: Habilitar Módulos ES6

1. Para usar a sintaxe de módulos ES6 (`import/export`), adicione a seguinte configuração no arquivo `package.json`:
    ```json
    "type": "module"
    ```

2. Agora, você pode usar a sintaxe `import` e `export` no seu código. Por exemplo:
    ```javascript
    import express from 'express';

    const app = express();
    const PORT = 3000;

    app.get('/', (req, res) => {
        res.send('Hello, World!');
    });

    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
    ```