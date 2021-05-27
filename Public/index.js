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
    document.myForm.submit();
    return false;
}

async function buscarLeidos(){
    console.log("Si corre");
    let book, titulo, autor, estado, img, btnEditar, btnComment;
    let imgUrl = "https://picsum.photos/100/200";

    let leidos, leyendo, porLeer;

    leidos = document.getElementById("leidos");
    leyendo = document.getElementById("leyendo");
    porLeer = document.getElementById("porLeer");

    leyendo.style.display = "none";
    porLeer.style.display = "none";

    leidos.style.display = "block";              

    try {
        const res = await fetch('/APILeido')
        const data = await res.json()
        if (data.error !== false) {
            console.log(data);
            
            let listaLeidos = document.getElementById("lista_leidos");

            //Limpiar los libros que estaban anteriormente
            while (listaLeidos.firstChild) {
                listaLeidos.removeChild(listaLeidos.firstChild);
            }          

            for(let i=0; i<data.length; i++){
                book = document.createElement("li");

                book.setAttribute('id', data[i]._id); //https://www.developerdrive.com/using-custom-attributes-in-html5/

                titulo = document.createElement("h1");
                titulo.innerHTML = data[i].titulo;

                autor = document.createElement("p");
                autor.innerHTML = data[i].autor;

                estado = document.createElement("p");
                estado.innerHTML = data[i].estado;

                img = document.createElement("img");
                img.src = imgUrl;

                btnEditar = document.createElement("button");
                btnEditar.innerHTML = "Ver detalles";
                
                btnEditar.onclick = function(){
                    mostrarDetalles(data[i]);
                }

                console.log(btnEditar);

                book.appendChild(img);
                book.appendChild(titulo);
                book.appendChild(autor);
                book.appendChild(estado);
                book.appendChild(btnEditar);

                listaLeidos.appendChild(book);
            }
        }
      } catch (error) {
        console.log(error)
      }
}

function mostrarDetalles(libro){
    //document.location.href = 'agregarLibro.html'"
    console.log("entro aqui")
    console.log(libro.titulo);
}