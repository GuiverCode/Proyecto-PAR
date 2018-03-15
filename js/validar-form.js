/*este script realiza validaciones de formularios*/

var forms = document.getElementsByTagName('form');

function validarForm(e) {
    //obtiene el formulario que genero el evento
    var formActual = e.target; 
    
    //obtiene los inputs del formulario
    var inputs = formActual.getElementsByTagName('input');
    var msg = '';

    for(var i=0; i<inputs.length; i++){
        //verifica si es un campo obligatorio
        if(inputs[i].getAttribute('data-requerido') == 'si'){
            verificaRequerido(e,inputs[i]);
        }
        
        //verificacion por tipo de input
        switch (inputs[i].getAttribute('type')) {
            case 'text':
                verificaText(e,inputs[i]);
                break;
            case 'password':
                
                break;
            case 'numeric':
            verificaNumeric(e,inputs[i]);
                break;
            default:
                break;
        }
    }
    
}

function verificaText(e, input){
    //verifica que el valor ingresado sea de tipo cadena
    if(!isNaN(input.value) && input.value.length > 0){
        e.preventDefault();
        input.parentNode.nextSibling.textContent = 'No se admiten valores numéricos.';
    }
}

function verificaNumeric(e, input){
    //verifica que el valor ingresado sea de tipo numerico
    if(isNaN(input.value) && input.value.length > 0){
        e.preventDefault();
        input.parentNode.nextSibling.textContent = 'Debe ingresar un valor numerico';
    }
}

function verificaRequerido(e, input){
    //verifica si se ingreso o no valor en un campo requerido
    if (input.value === '') {
        e.preventDefault();
        input.parentNode.nextSibling.textContent = '*Campo obligatorio.';    
    }
}

for(var i=0; i<forms.length; i++){
    forms[i].addEventListener('submit', validarForm, false);
}