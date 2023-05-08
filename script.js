$(document).ready(function() {
    // Efeito de rolagem suave para os links de navegação
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
    
        var target = $(this.getAttribute('href'));
    
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
  
    // Validação do formulário de contato
    $('#contact-form').on('submit', function(event) {
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
    
        if (!name || !email || !phone) {
            alert('Por favor, preencha todos os campos do formulário.');
            event.preventDefault();
        } else if (!isValidEmail(email)) {
            alert('Por favor, insira um endereço de e-mail válido.');
            event.preventDefault();
        }
    });
    
    // Função auxiliar para validar o formato de e-mail
    function isValidEmail(email) {
        var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return emailRegex.test(email);
    }
});