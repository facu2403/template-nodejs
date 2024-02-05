"use strict";

const print =log=>console.log(log);

const Fecha= document.getElementById("fecha");

const InputBusqueda= document.getElementById("busqueda");

const Refrescar= document.getElementById("refrescar");

const Menu= document.getElementById("menu");

const BotonAgregar= document.getElementById("boton_agregar");

const Contenedor= document.getElementById("contenedor");

const ObtenerFecha=()=>{
    let fecha= new Date();
        fecha= fecha.toLocaleDateString();
    return fecha;
}

Fecha.innerHTML=ObtenerFecha();


//localStorage.clear()
