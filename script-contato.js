// Ele é um script para enviar um email utilizando a API https://www.staticforms.xyz/
// Utilizado em sites para os visitantes enviar um email para o proprietario do site.


// Selecionar os Elementos do Pop-up.
const form = document.getElementById('contactForm');
const popup = document.querySelector('.popup-wrapper');
const closebutton = document.querySelector('.popup-close');

// Adicionar evento de submissão ao formulário.
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede ser redirecionado ao enviar formulário.

    const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
        accessKey: '' // Inclui a chave de acesso do email exigida pela API.
    };

    // Converte valores para uma String JSON e Envia os dados para a API com o fetch. 
    fetch('https://api.staticforms.xyz/submit', {
        method: 'POST,',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(formData)

    })
    .then(() => {
        popup.style.display = 'block'; // Mostra o pop-up após a operação ser concluída

    })
});

// Fechar o popup após clicar no botão Fechar ((popup-close))
closebutton.addEventListener('click', () => {
    popup.style.display = 'none';
});
