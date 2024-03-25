 

function showPortfolio (id, elemento) {
    const projects = document.querySelectorAll('.conteudo')
    const menuTitle = document.querySelectorAll('#projects li')


    for (let i = 0; i < projects.length; i++) {
        projects[i].classList.add('hidden');
    }
    const conteudo = document.getElementById(id);
            if (conteudo) {
                conteudo.classList.remove('hidden')
                conteudo.classList.add('flex');
            }

            for (let i = 0; i < menuTitle.length; i++) {
                menuTitle[i].classList.remove('text-yellow-500');
            }
    
                elemento.parentNode.classList.add('text-yellow-500');
            
}

// Envio de Formulario com EmailJS

(function(){
    emailjs.init("Xt0WtDplMNt-OHbYR"); // Substitua "seu_user_id" pelo seu User ID do EmailJS
}())

window.onload = function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_sygeodr', 'template_d6u1w7v', this)
            .then(() => {
                alert('Email enviado com sucesso!');
            }, (error) => {
                alert('Ocorreu algum erro', error);
            });
    });
}