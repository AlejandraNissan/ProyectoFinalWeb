function validarTexto(field){
    if(field.value.length>2){
        field.style.background = "white";
        nombre = true;
        nombreValor = field.value;
    }
    else{
        field.style.background = "red";
    }
}

//Preguntar fecha
function validarFecha(field){
    console.log(new Date (field.value));
    //Checar que la fecha sea anterior a la de hoy
    if(field.value.length!=null && (new Date(field.value) <= new Date(new Date()))){
        field.style.background = "white";
        fNacimiento = true;
        fNacimientoValor = field.value;
    }
    else{
        field.style.background = "red";
    }
}

function validar(form){

}

function submitHandle(form){
    console.log(document.myForm);
    console.log(document.myForm.Nombre.value);
    console.log("hola");
    return false;
}