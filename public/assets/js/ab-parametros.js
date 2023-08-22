const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{1,25}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    numeros: /^\d{1,10}$/, // 1 a 10 numeros.
    especiales: /^[a-zA-Z0-9\_\-]{4,16}$/
}

const campos = {
    usuario: false,
    nombre: false,
    numeros: false,
    correo: false,
    especiales: false,
}

function validarparametro(e) {
    let parametro = document.getElementById('parametro').value;
    let div = document.getElementById('divparame');
    let btn = document.getElementById('ins_parametro');

    if (expresiones.usuario.test(parametro)) {
        document.getElementById('parametro').classList.remove('incorrecto') 
        document.getElementById('parametro').classList.add('correcto') 
 
        div.innerHTML='';
        console.log('correcto');
        btn.disabled = false;
    }else{
        document.getElementById('parametro').classList.add('incorrecto') 
      
        div.innerHTML='<font color="red"> <h5>No se  admiten caracteres</h5></font>'

        console.log('incorrecto');
        btn.disabled = true;

    }
    

}

function validarvalor(e) {
    let valor = document.getElementById('valor').value;
    let div = document.getElementById('divvalor');
    
    let btn = document.getElementById('ins_parametro');

    if (expresiones.usuario.test(valor)) {
        document.getElementById('valor').classList.remove('incorrecto') 
        document.getElementById('valor').classList.add('correcto') 
 
        div.innerHTML='';
        console.log('correcto');
        btn.disabled = false;
    }else{
        document.getElementById('valor').classList.add('incorrecto') 
      
        div.innerHTML='<font color="red"> <h5>Solo puedes ingresar letras</h5></font>'

        console.log('incorrecto');
        btn.disabled = true;

    }
    

}

function validarparametrosEDIT(e) {
    let parametro = document.getElementById(`parametro-edit-${e}`).value;
    let div = document.getElementById(`divparametro-${e}`);
    
    // let btn = document.getElementById(`btnedit-${e}`);


    if (expresiones.nombre.test(parametro)) {
        document.getElementById(`parametro-edit-${e}`).classList.remove('incorrecto') 
        document.getElementById(`parametro-edit-${e}`).classList.add('correcto') 
 
        div.innerHTML='';
        console.log('correcto');
        
        // btn.disabled = false;
    }else{
        document.getElementById(`parametro-edit-${e}`).classList.add('incorrecto') 
      
        div.innerHTML='<font color="red"> <h5>Solo puedes ingresar letras</h5></font>'

        console.log('incorrecto');
        
        // btn.disabled = true;

    }

}

function validarvalorEDIT(e) {
    let valor = document.getElementById(`valor-edit-${e}`).value;
    let div = document.getElementById(`divvalor-${e}`);
    let btn = document.getElementById(`btnedit-${e}`);

    if (expresiones.especiales.test(valor)) {
        document.getElementById(`valor-edit-${e}`).classList.remove('incorrecto') 
        document.getElementById(`valor-edit-${e}`).classList.add('correcto') 
 
        div.innerHTML='';
        console.log('correcto');
        btn.disabled = false;
    }else{
        document.getElementById(`valor-edit-${e}`).classList.add('incorrecto') 
      
        div.innerHTML='<font color="red"> <h5>No puedes ingresar caracteres especiales</h5></font>'

        console.log('incorrecto');
        btn.disabled = true;

    }

}

function validarfechacreacionEDIT(e) {
    let fechacrea = document.getElementById(`fecha-edit-${e}`).value;
    let div = document.getElementById(`divfecha-${e}`);


    if (expresiones.nombre.test(fechacrea)) {
        document.getElementById(`fecha-edit-${e}`).classList.remove('incorrecto') 
        document.getElementById(`fecha-edit-${e}`).classList.add('correcto') 
 
        div.innerHTML='';
        console.log('correcto');
    }else{
        document.getElementById(`fecha-edit-${e}`).classList.add('incorrecto') 
      
        div.innerHTML='<font color="red"> <h5>Solo puedes ingresar letras</h5></font>'

        console.log('incorrecto');

    }

}