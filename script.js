// script.js

// Função para validar o formulário
function validateForm(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
    } else {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        // Aqui você pode fazer uma requisição para enviar os dados do formulário para um servidor, se necessário.
        // Exemplo: enviarDados(nome, email, mensagem);
        
        // Limpar o formulário após o envio
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mensagem').value = '';
    }
}

// Adiciona o evento de envio ao formulário
document.querySelector('form').addEventListener('submit', validateForm);