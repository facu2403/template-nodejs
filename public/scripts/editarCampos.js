"use strict";
 
const addDesc=(cod)=>{
    let campo =  document.getElementById(`addDesc${cod}`);
				campo.innerHTML=inputDesc(cod); 
}

const inputDesc=(cod)=>{ 			
		let		content = (((localStorage.getItem(cod)).split(',')[3]) ?? "");
   let text =
`<div>
				<textarea class="textarea"  
    id="descripcion" 
    placeHolder="agregar descripcion"    
    onchange="guardarDesc(${cod})">
		  		${content}
				</textarea>			
  <div class="boton_guardar_desc"  
    onclick="guardarDesc(${cod})">
    guardar
  </div>
		</div>`;  			
				return text;
}

const guardarDesc=(cod)=>{
    let arr = localStorage.getItem(cod).split(',');
    let desc = document.getElementById("descripcion").value;
    if(desc != ""){arr[3] = desc.trim()}
    localStorage.setItem(cod,arr);   
    Mostrar(Lista(1));				
}

function papelera(cod){			
   window.scrollTo(0,0);				      
				let a=(localStorage.getItem(cod));
let 	item = nuevoItem(a);
let dias = item.diasRest;
let venc = ObtenerFecha().split('/');
    venc = venc[2]+'-'+venc[1]+'-'+(venc[0]);
    if((dias)>=0){
    				if(confirm('queres enviar el item '+(item.plu)+' '+(item.nombre).trim()+' a la papelera?')){
localStorage.setItem(item.plu,(item.plu+','+item.cant+','+venc+','+item.nombre));
    								Mostrar(Lista(1))
    				}
    }
  else{
  				if(confirm('queres eliminar definitivamente el item '+item.plu+' '+item.nombre+'?')){
  								localStorage.removeItem(cod);
  Mostrar(Lista(1))
    
}}
				
}


