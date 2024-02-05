"use strict";

    const Input = (type, id, plhold, value = '') => {
    return `<input type="${type}" 
            id="${id}" 
            class="input" 
            placeholder="${plhold}" 
            min="1" max="999999"
            value="${value}">`;
}

const MenuDatos = (...value) => {
    
    let menu = `
    <modal class='modal'>
    <div class="menu">
    <div class="preview"></div>
    <div class="inputs">
        ${Input("number", "codigo", "PLU", value[0])}
        ${Input("number", "cant", "cantidad", value[1])}
        <div>fecha
            ${Input("date", "venc", "fecha", "")}
        </div>
        ${Boton("Guardar()")}
   </div>
    </div>
   </div>`;
    
    return menu;
}

const Boton = (funcion) => {
    return `<button class="boton_guardar" onclick="${funcion}">
        guardar</button>`;
}

const Preview = (cod) => {
    let a = localStorage.getItem(cod.value) ?? '';
    let desc = ((a.split(',')[3]) ?? '');
    let arr = cod + ",'',''," + desc;
    return nuevoItem(arr);
}

const VerPreview = (cod) => {
    let preview = document.querySelector('.preview');
    preview.innerHTML = Preview(cod).img;
}

BotonAgregar.addEventListener("click", () => {
    Menu.innerHTML = MenuDatos('', '');
   const codigoInput = document.getElementById("codigo");
   codigoInput.focus();
codigoInput.addEventListener("input", () => {
    VerPreview(codigoInput.value);
});
    Ocultar(BotonAgregar);
});

const Ocultar = (elemento) => {
    elemento.classList.toggle("oculto");
}

const Ver = (elemento) => {
    elemento.classList.toggle("oculto");
}

const Despejar = (elemento) => {
    elemento.innerHTML = "";
}

const Guardar = () => {
    let codigo = document.getElementById("codigo");
    let cant = document.getElementById("cant");
    let venc = document.getElementById("venc");
    let a = localStorage.getItem(codigo.value) ?? '';
    let desc = (nombrePorPlu(Productos,codigo) ??(a.split(',')[3]) );
    let item = [codigo.value, cant.value, venc.value, desc];

    if ((codigo.value[0]) != 0 && (venc.value)) {
        localStorage.setItem(codigo.value, item);
    }
    Despejar(Menu);
    Ver(BotonAgregar);
    Mostrar(Lista(1));
    // console.log(venc.value);
}
