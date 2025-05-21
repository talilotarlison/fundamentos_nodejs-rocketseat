Aqui está o conteúdo convertido para Markdown:

````markdown
# Enviar Dados por POST com a Fetch API

Para enviar dados por `POST` com a Fetch API, você precisa definir o método como `"POST"`, incluir os cabeçalhos necessários (principalmente o `Content-Type`) e o corpo da requisição, que geralmente é uma string JSON do seu objeto JavaScript.

### Exemplo:

```javascript
const url = 'https://api.example.com/data';
const data = { username: 'example' };

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
````

### Explicação:

* `const url = 'https://api.example.com/data';`: Define a URL do endpoint onde você quer enviar os dados.
* `const data = { username: 'example' };`: Cria o objeto JavaScript com os dados a serem enviados.
* `fetch(url, { ... })`: Chama a função `fetch` para iniciar a requisição.
* `method: 'POST'`: Define o método HTTP como POST.
* `headers: { 'Content-Type': 'application/json' }`: Define o cabeçalho `Content-Type` como `"application/json"`, informando que o corpo da requisição está no formato JSON.
* `body: JSON.stringify(data)`: Converte o objeto JavaScript `data` em uma string JSON e o envia como corpo da requisição.
* `.then(response => response.json())`: Aguarda a resposta da requisição e, se for bem-sucedida, converte o corpo da resposta para JSON.
* `.then(data => console.log(data))`: Exibe os dados da resposta no console.
* `.catch(error => console.error('Error:', error))`: Lida com erros que possam ocorrer durante a requisição.

### Outros pontos importantes:

* **Enviando dados de um formulário**: Se você estiver enviando dados de um formulário, pode usar o objeto `FormData` e não precisa especificar o `Content-Type`.
* **JSON.stringify()**: O método `JSON.stringify()` é usado para converter um objeto JavaScript em uma string JSON, o que é necessário quando o corpo da requisição é JSON.
* **Promessas**: A Fetch API é baseada em promessas, então você deve usar `.then()` para lidar com a resposta da requisição e `.catch()` para lidar com erros.
* **Verificação do código de status**: É importante verificar o código de status da resposta para saber se a requisição foi bem-sucedida.
* **CORS**: Se você estiver usando um servidor diferente do seu domínio, pode precisar lidar com CORS (Cross-Origin Resource Sharing).

```

Essa versão está organizada de forma que fique fácil de entender e navegar em um arquivo Markdown.
```


Aqui está o conteúdo convertido para Markdown, com a referência adicionada:

````markdown
# Considerações para Enviar Dados de um Formulário com Fetch API

Para enviar dados de um formulário utilizando a Fetch API, basta usar a função `FormData()` e especificar o método como `POST`. Quando utilizamos o método `POST`, é obrigatório enviar o corpo (`body`) da requisição contendo os dados do formulário.

### Considerações Importantes:

- **FormData**: Utilize a função `FormData()` para enviar os dados de um formulário sem a necessidade de especificar um `Content-Type`.
- **Método POST**: Ao utilizar o método `POST`, os dados do formulário devem ser enviados no corpo da requisição.
- **CORS**: A API com PHP deve estar devidamente configurada para lidar com CORS (Cross-Origin Resource Sharing).
- **Cabeçalhos**: Não é necessário informar o cabeçalho `Content-Type` ao usar `FormData()`, pois ele será configurado automaticamente.
- **PHP**: No lado do servidor, a API PHP pode capturar os dados utilizando a variável global `$_POST`.

### Script JavaScript para Realizar a Solicitação:

```javascript
const formData = new FormData();
formData.append('username', 'example');
formData.append('email', 'example@email.com');

fetch('https://api.example.com/submit', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
````

### Recuperação dos Dados com PHP

No lado do servidor, para tratar a requisição, você pode capturar os valores enviados pelo formulário com a variável global `$_POST`:

```php
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    // Processar os dados conforme necessário
    echo json_encode(["status" => "success", "username" => $username, "email" => $email]);
}
?>
```

### Referência:

[Enviar dados de um formulário utilizando JavaScript Fetch API com PHP](https://marcelo-albuquerque.medium.com/enviar-dados-de-um-formul%C3%A1rio-utilizando-javascript-fetch-api-com-php-4846119d89f7)

```

Esse formato segue as boas práticas de Markdown, tornando o conteúdo bem estruturado e fácil de ler.
```
