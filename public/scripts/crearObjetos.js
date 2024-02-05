"use strict";

class Item{
  constructor(plu, cant, venc, nombre, img, diasRest) {
    this.plu = plu;
    this.cant = cant;
    this.venc = venc;
    this.nombre = nombre;
    this.img = img;
    this.diasRest = diasRest;
  }

  Img(cod) {
  cod = (`000000${cod}`).slice(-6);
  cod = `00${cod.substr(0, 4)}00/00${cod}`;

  let img = `<img class="foto" src="https://static.cotodigital3.com.ar/sitios/fotos/full/${cod}.jpg?3.0.140a">`;
  return img;
}


  DiasRestantes(venc) {
    let diasRest = Math.floor((new Date(venc) - (new Date())) / (1000 * 60 * 60 * 24))+1;
    return diasRest;
  }
}

function nuevoItem(arr) {
    
  let obj = arr.split(",");  
  let plu = obj[0];
  let cant = obj[1];
  let venc = obj[2];
  let nombre = obj[3];
  let img = new Item().Img(plu);
  let diasRest = new Item().DiasRestantes(venc);  
  let item= new Item(plu,cant,venc,nombre,img,diasRest);
    return item;
}
