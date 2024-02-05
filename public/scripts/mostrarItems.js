"use strict";

const Lista=(dias)=>{
   
   let lista=[];
     for(let i=0;i<localStorage.length;i++){
   let key= localStorage.key(i);   
   let item= localStorage.getItem(key); 
   let obj=nuevoItem(item); 
  if( obj.diasRest >= dias ){
      if((obj.nombre).includes(InputBusqueda.value) ||
          (obj.plu).includes(InputBusqueda.value)){           
       lista.push(obj);}
    }      }
   lista= lista.sort((a,b)=>a.diasRest-b.diasRest); 
    return lista
} 

const Mostrar=(arr)=>{
    let lista='';
    for(let i=0;i<arr.length;i++){
       lista+=Tarjeta(arr[i]);        
    }
    contenedor.innerHTML=lista;
				   window.scrollTo(0,0);
}

Refrescar.addEventListener("click",()=>{
    InputBusqueda.value='';
    Mostrar(Lista(1));
    if(BotonAgregar.classList.contains('oculto')){
        Ver(BotonAgregar)};
   
});


Mostrar(Lista(1));
