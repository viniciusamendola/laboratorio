document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.soma').forEach(function(elemento){
        let numero1 = parseFloat(elemento.getAttribute('data-numero1'));
        let numero2 = parseFloat(elemento.getAttribute('data-numero2'));
        elemento.textContent = numero1 + numero2;
    });
    document.querySelectorAll('.subtracao').forEach(function(elemento){
        let numero1 = parseFloat(elemento.getAttribute('data-numero1'));
        let numero2 = parseFloat(elemento.getAttribute('data-numero2'));
        elemento.textContent = numero1 - numero2;
    });
    document.querySelectorAll('.multiplicacao').forEach(function(elemento){
        let numero1 = parseFloat(elemento.getAttribute('data-numero1'));
        let numero2 = parseFloat(elemento.getAttribute('data-numero2'));
        elemento.textContent = numero1 * numero2;
    });
    document.querySelectorAll('.divisao').forEach(function(elemento){
        let numero1 = parseFloat(elemento.getAttribute('data-numero1'));
        let numero2 = parseFloat(elemento.getAttribute('data-numero2'));
        elemento.textContent = numero1 / numero2; 
    });
    document.querySelectorAll('.porcentagem').forEach(function(elemento){
        let total = parseFloat(elemento.getAttribute('data-total'));
        let porcentagem = parseFloat(elemento.getAttribute('data-porcentagem'));
        elemento.textContent = (total*porcentagem)/100;
    });
    document.querySelectorAll('.telefone').forEach(function(elemento){
        let numero = elemento.getAttribute('data-numero');
        elemento.textContent = numero.replace(/(\d{2})(\d{5})(\d{4})/,"($1) $2-$3")
    });
    document.querySelectorAll('.cpf').forEach(function(elemento){
        let cpf = elemento.getAttribute('data-numero');
        elemento.textContent = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    });
    document.querySelectorAll('.email-mascarado').forEach(function(elemento){
        let email = elemento.getAttribute('data-email');
        let [usuario,dominio] = email.split('@');
        let emailmascarado = usuario[0]+'****@'+dominio;
        elemento.textContent = emailmascarado;

    });
    /*
    //console.log(elementos);
    elementos.forEach(function(elemento){
        //console.log(elemento);
        //elemento.textContent = parseFloat(elemento.getAttribute('data-numero1'))*parseFloat(elemento.getAttribute('data-numero2'));
        
    });
    */

});