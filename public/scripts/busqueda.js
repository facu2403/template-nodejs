'use strict';

const Productos = [
...quesos,
...fiambres,
...lacteos,
...congelados,
...pastas,
...pescaderia,
...huevos
];
 

//const Clear = document.querySelector('.clear');

//const Input = document.getElementById("searchInput");


//const productList = document.getElementById("productList");
//productList.innerHTML = "";  
function nombrePorPlu(array, plu) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].plu === plu) {
      return array[i].nombre;
    }
  }
  
  return ''; // Si no se encuentra el plu, retorna null o algún otro valor indicativo de que no se encontró.
}

function Img(cod) {
    cod = (`000000${cod}`).slice(-6);
    cod = `00${cod.substr(0, 4)}00/00${cod}`;
    
    return `<img width="100px" src="https://static.cotodigital3.com.ar/sitios/fotos/full/${cod}.jpg?3.0.140a">`;
    
}

function quitarAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const sumarPuntaje=(searchTerms,nombre,plu)=>{ 
    let puntaje = 0;
    let palabras = new Set(nombre.split(' '));
    for (const palabra of palabras) {
    for (let i = 0; i < searchTerms.length; i++) {
        const element = searchTerms[i];
        if(plu === element){
            puntaje +=15;
        }else if(palabra === element){
            puntaje +=15;
            }else if(palabra.includes(element)){
            puntaje +=5;
            }
}
    }
return puntaje
}


function mostrarProductos(){
    Contenedor.innerHTML = '';
    const resultados = [];  
    Productos.forEach((producto) => {
        const nombre = quitarAcentos(producto.nombre.toLowerCase());
        const plu = quitarAcentos(producto.plu);
        const searchTerms = InputBusqueda.value.toLowerCase().split(" ");
        
        const found = searchTerms.every((term) =>{
            return     nombre.includes(term) || plu.includes(term)
        }  );
        
    if(found){
        resultados.push({
            'nombre':nombre,
            'plu':plu,
            'puntaje': sumarPuntaje(searchTerms,nombre,plu)           
        })
    }   
});
const listaOrdenada = resultados.sort((a,b)=>b.puntaje-a.puntaje);


for (let i = 0; i < 20; i++) {
    const element = listaOrdenada[i];
    
    try{
    Contenedor.innerHTML+=(Tarjeta(element));}catch(error){
        console.log(error);
    }
}

}


InputBusqueda.addEventListener("input", mostrarProductos);

/*Clear.addEventListener('click',()=>{
    Input.value = '';
    productList.innerHTML = '';
})*/
