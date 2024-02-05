"use strict";

const Tarjeta=(item)=>{
    
    let bloquenombre = `<div class="bloque descripcion" ondblclick="addDesc(${item.plu})" 
    id="addDesc${item.plu}">
    ${item.nombre || nombrePorPlu(Productos,item.plu)}</div>`;
    
   let Venc = new Date(item.venc).toLocaleDateString('es', { timeZone: 'UTC' }); 
   
    let bloqueImg = `<div class="bloque" 
    ondblclick="Menu.innerHTML=MenuDatos(${[item.plu,item.cant]});
    VerPreview(${item.plu});
    document.getElementById('venc').focus();
    document.getElementById('venc').click();
    Ocultar(BotonAgregar);" >
    ${item.img || Img(item.plu)}</div>`;
    
    return `<div class="tarjeta grid color${color(item.diasRest)}" 
    id="tarjeta${item.plu}"> 
    ${Bloque(bloqueImg)}
    ${Bloque(bloquenombre)}
    ${Bloque((item.diasRest+"<br>dias")||'')}
  				${Bloque(BotonBorrar(item.plu))}
    ${Bloque(item.plu)}
    ${Bloque(Venc??'')} 
    ${Bloque(("cant: "+item.cant)??'')}
    ${Bloque()}
    </div> `;    
}

function color(d){
    let a=Math.round((d+2)/5);
    if(a<0){a=0}
    else if(a>5){a=5};
    return a;
}

const Bloque=(data="")=>{
    return ` <div class="bloque"> ${data} </div> ` ;   
} 
 const BotonBorrar =(item)=>{
    return `<div id="borrar" ><b onclick="papelera(${item})">X</b></div>`;
 } 