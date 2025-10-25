Considerações
Para enviar dados de um formulário, basta utilizar a função FormData() e informar o method que para esse caso deverá ser POST. Ao utilizarmos o método POST, obrigatoriamente devemos enviar o body da requisição contendo os dados do formulário.
A API com PHP deve estar devidamente configurada com CORS;
Não há necessidade de informar um header ;
Script JavaScript para realizar a solicitação

const form = document.getElementById('<<form-id>>')
const formData = new FormData(form)
const url = '<<url>>'
fetch(url, {
    method: 'POST',
    body: formData
})
.then(function(res) {
    res.json().then(function(data) {
        console.log(data)
    })
})

Recuperação dos dados com PHP
Para tratar essa requisição, basta capturar os valores com a variável global $_POST.

<?php
	$data = $_POST;
	echo json_encode($data)
?>
