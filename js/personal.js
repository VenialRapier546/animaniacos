document.addEventListener("DOMContentLoaded", function(event) {
    var divProductos = document.getElementById("productos");

    // Creando/Consultado el array con datos 
    // a partir de lo que exista en localStorage
    var array = [];
    if (localStorage.getItem("arrayPersonal") == null) {
        array = [];
        localStorage.setItem("arrayPersonal", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("array"));
    }

    // Poblando el div que muestra los  productos
    var listadoPersonal = JSON.parse(localStorage.getItem("arrayPersonal"));
    var divPersonal = document.getElementById("personal");
    listadoPersonal.forEach(element => {
        divPersonal.innerHTML = divPersonal.innerHTML + '<div class="card"><div class="card-body"><h5 class="card-title">' + element["nombre_personal"] + '</h5></div></div>';
    });
    return false;
});

// Esta función se llama cuando se hace clic en el botón de Registrar
// de la página de productos
function registrarPersonal() {
    var nombre = document.getElementById("nombre_empleado");

    //Creando/Consultado el array con datos 
    // a partir de lo que exista en localStorage
    var array = [];
    if (localStorage.getItem("arrayPersonal") == null) {
        array = [];
        localStorage.setItem("arrayPersonal", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arrayPersonal"));
    }

    // Agregando un nuevo producto al array
    array.push({ "nombre_personal": nombre.value });

    // Guardando en el localStorage el nuevo array
    localStorage.setItem("arrayProductos", JSON.stringify(array));

    // Recuperando el array de productos del localStorage
    // para volverlo a mostrar
    var listadoProductos = JSON.parse(localStorage.getItem("arrayProductos"));

    // Obteniendo el div donde se muestran los productos
    var divProductos = document.getElementById("productos");

    // Recorriendo el array de productos que viene del localStorage
    listadoProductos.forEach(element => {
        // Se añade cada producto al div como un card
        divProductos.innerHTML = divProductos.innerHTML + '<div class="card"><div class="card-body"><h5 class="card-title">' + element["nombre_producto"] + ' </h5></div></div>';
    });
    document.getElementById("info1productos").style = "display:block;";
    return false;
}