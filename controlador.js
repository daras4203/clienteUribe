import { consumirAPI } from "./consumoServicio.js"

//Referencias al formulario
let nombres = document.getElementById("nombres")
let cantidadVida = document.getElementById("cantidad")
let poderAtaque = document.getElementById("ataque")
let poderDefensa = document.getElementById("defensa")
let fotografia = document.getElementById("foto")
let fechaCreacion = document.getElementById("fecha")
let categoria = document.getElementById("categoria")
let legendario = document.getElementById("legendario")

let botonFormulario = document.getElementById("boton")


botonFormulario.addEventListener("click", function(evento){

    evento.preventDefault()
    
    // Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "Intentalo Nuevamente!",
    //     footer: '<a href="#">¿Por qué tengo este problema?</a>'
    // });
    let datosPorEnviarAlBack={
        "nombre":nombres.value,
        "cantidadVida":cantidadVida.value,
        "poderAtaque":poderAtaque.value,
        "poderDefensa":poderDefensa.value,
        "fotografia":fotografia.value,
        "fechaCreacion":fechaCreacion.value,
        "categoria":categoria.value,
        "legendario":true
    }
    let datosListosParaViajar=JSON.stringify(datosPorEnviarAlBack)

    consumirAPI(datosListosParaViajar)
    .then(function(respuesta){

        console.log(respuesta)

        Swal.fire({
        title: "Buen Trabajo!",
        text: "Hemos registrado el perosnaje con exito",
        icon: "success"
        });
        
    })

})