document.addEventListener('DOMContentLoaded', function() {
    fetch('teste.json')
        .then(response => response.json())
        .then(data => {
            
            console.log(data);

           
            const primeiroNome = data.usuarios[0].nome;
            console.log('Nome do primeiro usuário:', primeiroNome);
        })
        .catch(error => {
            console.error('Erro:', error);
        });
});