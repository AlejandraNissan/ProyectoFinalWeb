let titulo, autor, anio;

let titulo2=true, autor2=true, anio2=true;

function validarTitulo(field){
    if(field.value.length>2){
        field.style.background = "white";
        titulo = true;
        nombreValor = field.value;
    }
    else{
        field.style.background = "red";
        titulo = false;
    }
    validar();
}

function validarAutor(field){
    if(field.value.length>2){
        field.style.background = "white";
        autor = true;
        nombreValor = field.value;
    }
    else{
        field.style.background = "red";
        autor = false;
    }
    validar();
}

//Preguntar fecha
function validarFecha(field){
    console.log(new Date (field.value));
    //Checar que la fecha sea anterior a la de hoy
    if(field.value.length!=null && (new Date(field.value) <= new Date(new Date()))){
        field.style.background = "white";
        anio = true;
        fNacimientoValor = field.value;
    }
    else{
        field.style.background = "red";
        anio = false;
    }
    validar();
}

function validar(){
    let boton = document.getElementById("submit");
    console.log(boton.style.display);

    if(titulo==true && autor==true && anio==true){
        boton.style.display = "block";
    }
    else{
        boton.style.display = "none";
    }
}

function validarTitulo2(field){
    if(field.value.length>2){
        field.style.background = "white";
        titulo2 = true;
        nombreValor = field.value;
    }
    else{
        field.style.background = "red";
        titulo2 = false;
    }
    validar2();
}

function validarAutor2(field){
    if(field.value.length>2){
        field.style.background = "white";
        autor2 = true;
        nombreValor = field.value;
    }
    else{
        field.style.background = "red";
        autor2 = false;
    }
    validar2();
}

//Preguntar fecha
function validarFecha2(field){
    console.log(new Date (field.value));
    //Checar que la fecha sea anterior a la de hoy
    if(field.value.length!=null && (new Date(field.value) <= new Date(new Date()))){
        field.style.background = "white";
        anio2 = true;
        fNacimientoValor = field.value;
    }
    else{
        field.style.background = "red";
        anio2 = false;
    }
    validar2();
}

function validar2(){
    let boton = document.getElementById("submit");
    console.log(boton.style.display);

    if(titulo2==true && autor2==true && anio2==true){
        boton.style.display = "block";
    }
    else{
        boton.style.display = "none";
    }
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
    let id, book, titulo, autor, estado, img, btnEditar;
    let imgUrl = "https://picsum.photos/100/200";

    let leidos, leyendo, porLeer, home;

    home = document.getElementById("introHome");
    leidos = document.getElementById("leidos");
    leyendo = document.getElementById("leyendo");
    porLeer = document.getElementById("porLeer");

    home.style.display = "none";
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

                btnEliminar = document.createElement("button");
                btnEliminar.innerHTML = "Eliminar";
                
                btnEditar.onclick = function(){
                    mostrarDetalles(data[i]);
                }

                btnEliminar.onclick = function(){
                    eliminarLibro(data[i]);
                }

                console.log(btnEditar);

                book.appendChild(img);
                book.appendChild(titulo);
                book.appendChild(autor);
                book.appendChild(estado);
                book.appendChild(btnEditar);
                book.appendChild(btnEliminar);

                listaLeidos.appendChild(book);
            }
        }
      } catch (error) {
        console.log(error)
      }
}

async function buscarLeyendo(){
    console.log("Si corre");
    let id, book, titulo, autor, estado, img, btnEditar;
    let imgUrl = "https://picsum.photos/100/200";

    let leidos, leyendo, porLeer, home;

    home = document.getElementById("introHome");
    leidos = document.getElementById("leidos");
    leyendo = document.getElementById("leyendo");
    porLeer = document.getElementById("porLeer");

    home.style.display = "none";
    leidos.style.display = "none";
    porLeer.style.display = "none";

    leyendo.style.display = "block";              

    try {
        const res = await fetch('/APILeyendo')
        const data = await res.json()
        if (data.error !== false) {
            console.log(data);
            
            let listaLeyendo = document.getElementById("lista_leyendo");

            //Limpiar los libros que estaban anteriormente
            while (listaLeyendo.firstChild) {
                listaLeyendo.removeChild(listaLeyendo.firstChild);
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

                btnEliminar = document.createElement("button");
                btnEliminar.innerHTML = "Eliminar";
                
                btnEditar.onclick = function(){
                    mostrarDetalles(data[i]);
                }

                btnEliminar.onclick = function(){
                    eliminarLibro(data[i]);
                }

                console.log(btnEditar);

                book.appendChild(img);
                book.appendChild(titulo);
                book.appendChild(autor);
                book.appendChild(estado);
                book.appendChild(btnEditar);
                book.appendChild(btnEliminar);

                listaLeyendo.appendChild(book);
            }
        }
      } catch (error) {
        console.log(error)
      }
}

async function buscarPorLeer(){
    console.log("Si corre");
    let id, book, titulo, autor, estado, img, btnEditar;
    let imgUrl = "https://picsum.photos/100/200";

    let leidos, leyendo, porLeer, home;

    home = document.getElementById("introHome");
    leidos = document.getElementById("leidos");
    leyendo = document.getElementById("leyendo");
    porLeer = document.getElementById("porLeer");

    home.style.display = "none";
    leidos.style.display = "none";
    leyendo.style.display = "none";

    porLeer.style.display = "block";              

    try {
        const res = await fetch('/APIPorLeer')
        const data = await res.json()
        if (data.error !== false) {
            console.log(data);
            
            let listaPorLeer = document.getElementById("lista_por_leer");

            //Limpiar los libros que estaban anteriormente
            while (listaPorLeer.firstChild) {
                listaPorLeer.removeChild(listaPorLeer.firstChild);
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

                btnEliminar = document.createElement("button");
                btnEliminar.innerHTML = "Eliminar";
                
                btnEditar.onclick = function(){
                    mostrarDetalles(data[i]);
                }

                btnEliminar.onclick = function(){
                    eliminarLibro(data[i]);
                }

                console.log(btnEditar);

                book.appendChild(img);
                book.appendChild(titulo);
                book.appendChild(autor);
                book.appendChild(estado);
                book.appendChild(btnEditar);
                book.appendChild(btnEliminar);

                listaPorLeer.appendChild(book);
            }
        }
      } catch (error) {
        console.log(error)
      }
}

function mostrarDetalles(libro){
    let titulo, autor, anio, gen, estado;
    let myForm;

    console.log("probando");
    
    id = libro._id;
    window.location.href = "detalleslibro.html?id="+id;

}

async function eliminarLibro(libro){
    console.log(libro._id);
    try {
        const res = await fetch('/APIEliminar/'+libro._id)
        //const data = await res.json()
        console.log(res);
        if (res.status == 200) {
            console.log("recibi 200");
            window.location.href = "home.html";
        }
      } catch (error) {
        console.log(error)
      }    
}


      
    
    //console.log(libro)
    

    //myForm.titulo.value = libro.titulo;

    
    //document.location.href = 'detallesLibro.html';
    //console.log(this);


    //console.log(document);
    
    //console.log(document.getElementsByName("myForm"));

    //titulo = document.myForm.Autor;
    //titulo.value = libro.titulo;
