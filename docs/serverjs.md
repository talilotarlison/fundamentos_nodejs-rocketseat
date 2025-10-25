Para criar um servidor simples com Node.js de forma "pura", ou seja, sem usar bibliotecas como Express, você pode utilizar o módulo nativo `http` do Node.js. Esse módulo permite que você crie um servidor e defina como ele vai responder às requisições.

Aqui está um exemplo básico de como fazer isso:

### Passo a Passo:

1. Crie um arquivo chamado `server.js`.
2. Dentro dele, adicione o seguinte código:

```javascript
// Importando o módulo http nativo do Node.js
const http = require('http');

// Criando o servidor
const server = http.createServer((req, res) => {
  // Definindo o cabeçalho da resposta
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Enviando a resposta para o cliente
  res.end('Olá, mundo! Este é um servidor Node.js simples.');
});

// Definindo a porta em que o servidor vai escutar
const PORT = 3000;

// O servidor começa a escutar na porta 3000
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

### Explicação do código:

* **`http.createServer`**: Cria o servidor. A função que passamos como parâmetro será chamada sempre que uma requisição chegar ao servidor.

* **`req`**: O objeto da requisição (request). Ele contém informações sobre a requisição feita pelo cliente.

* **`res`**: O objeto da resposta (response). É nele que você configura a resposta do servidor (cabeçalhos, corpo da resposta, etc.).

* **`res.writeHead(200, { 'Content-Type': 'text/plain' })`**: Define o código de status HTTP (200 OK) e o tipo de conteúdo que o servidor vai retornar (texto simples).

* **`res.end('...')`**: Envia o corpo da resposta e encerra a resposta.

* **`server.listen(PORT, ...)`**: Faz o servidor começar a escutar na porta definida (no caso, 3000).

### Rodando o servidor:

1. Abra o terminal e navegue até o diretório onde você criou o arquivo `server.js`.
2. Execute o comando:

```bash
node server.js
```

Isso iniciará o servidor na porta 3000. Você pode acessar o servidor no seu navegador, indo para `http://localhost:3000`.

### Resultado esperado:

Ao acessar a URL no navegador, você verá a mensagem:

```
Olá, mundo! Este é um servidor Node.js simples.
```

Isso é o básico! Se você quiser adicionar mais funcionalidades, como lidar com diferentes rotas, pode adicionar condições para verificar `req.url`, ou até mesmo tratar métodos HTTP como `GET` e `POST`.

Se precisar de algo mais avançado ou específico, me avise!
