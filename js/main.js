let err1 = document.getElementById('error')
let error2 = document.getElementById("error2")

let arrLetras = ['a','e','i', 'o', 'u']
let arrReglas = ['ai','enter','imes', 'ober', 'ufat' ]

function encript(){
    error2.innerHTML = "<p></p>"
    let origMsj = document.getElementById('orginal-message').value;
    //console.log("mensjae"+origMsj+"nada")
    let splitedMsj = origMsj.split('');
    let encriptedMsj = [];
    if(origMsj==""){
        document.getElementById("encripted-message").value = "";
        document.getElementById("sin-mensaje").style.visibility = "visible"
        document.getElementById("error").style.visibility = "visible"
        document.getElementById("error").innerText = "Coloca aquí el mensaje a encriptar ⬇️"
    }
    else{
    for(i=0; i < splitedMsj.length; i++ ){
        let letra = splitedMsj[i];
        if(arrLetras.find(element => element == letra)){
            let indexLetra = arrLetras.indexOf(letra)
            encriptedMsj.push(arrReglas[indexLetra])
        }
        else{
            encriptedMsj.push(letra)
        }
    }
    finalMsj = encriptedMsj.join('')
    document.getElementById("sin-mensaje").style.visibility = "hidden"
    document.getElementById("encripted-message").value = finalMsj;
    document.getElementById('orginal-message').value = "";
    }
}


function desencript(){
    error2.innerHTML = "<p></p>"
    let suma = 0;
    let desen = document.getElementById('orginal-message').value;
    document.getElementById('orginal-message').value = "";
    //console.log("primer desencriptado"+desen)
    for(x=0; x < arrReglas.length; x++){
        if(desen.search(arrReglas[x])!= -1 ){
            //console.log("no fue -1")
            //console.log(desen)
            desen = desen.replaceAll(arrReglas[x], arrLetras[x])
            //console.log("al final"+desen)
            err1.style.visibility = "hidden";
            document.getElementById("sin-mensaje").style.visibility = "hidden"
            document.getElementById("encripted-message").value = desen;
            
        }
        else if(desen.search(arrReglas[x])== -1){
            suma = suma + 1;
            if(suma == 5){
                //console.log("No se encontró mensaje para desencriptar")
                //console.log(suma)
                err1.style.visibility = "visible"
                //document.getElementById("encripted-message").value = "";
                err1.innerHTML = "<p>Coloca aquí el mensaje a desencriptar ⬇️</p>"
                //document.getElementById("sin-mensaje").style.visibility = "visible"
            }
        }
    }
    //console.log(desen)
}


function check(e){
        error2.innerHTML = "<p></p>"
        tecla = (document.all) ? e.keyCode : e.which;  //guarda el código ascii de la tecla
        //Para permitir tecla de borrar backspace
        if (tecla == 8) {
            return true;
        }
        // Patrón de entrada, en este caso letras minusculas, espacio y salto de linea
        patron = /[a-z\s\n]/;
        tecla_final = String.fromCharCode(tecla);//convierte el código de caracter ascci a caracter
        //console.log(tecla)
        
        imprime = patron.test(tecla_final);
        if(imprime){
            err1.style.visibility = "hidden";
        }

        if(!imprime){
            if(tecla >= 65 && tecla <= 90){
                //console.log("tecla dentro del if"+tecla)
                err1.style.visibility = "visible";
                err1.innerHTML = '<p>Oops! No se admiten <b> mayúsculas</b></p>';
            }
            else if(tecla >= 48 && tecla <= 57){
                //console.log("tecla dentro del if"+tecla)
                err1.style.visibility = "visible";
                err1.innerHTML = '<p>Oops! No se admiten <b> números</b></p>';
            }
            else{
                err1.style.visibility = "visible";
                err1.innerHTML = '<p>Oops! No se admiten <b> acentos </b> ni <b> caracteres especiales</b></p>';
                //console.log("no se admiten caracteres especiales")
            }
        }
        return imprime;
}


function hide(){
    let hideCont = document.getElementById("orginal-message")
    hideCont.setAttribute('type','password')
}

function show(){
    let hideCont = document.getElementById("orginal-message")
    hideCont.setAttribute('type','text')
}

function copiar(){
    if(document.getElementById("encripted-message").value == ""){
        //console.log("sin mensaje para copiar")
        error2.innerHTML = '<p>Sin mensaje para copiar</p>';
    }
    else{
        var content = document.getElementById('encripted-message').value;
    navigator.clipboard.writeText(content).then(() => {error2.innerHTML = '<p><b>Texto copiado!</b></p>' })
    .catch(err => {error2.innerHTML = '<p>Funcion no soportada por el navegador😟</p>' })
    }
}

function limpiar(){
    document.getElementById("encripted-message").value = "";
    document.getElementById("sin-mensaje").style.visibility = "visible"
}