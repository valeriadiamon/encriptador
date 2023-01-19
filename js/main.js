//document.getElementById("encripted-message").style.display = "none";
//let textareaEnc = document.getElementById("encripted-message");
let err1 = document.getElementById('err1')

let arrLetras = ['a','e','i', 'o', 'u']
let arrReglas = ['ai','enter','imes', 'ober', 'ufat' ]

function encript(){
    let origMsj = document.getElementById('orginal-message').value;
    let splitedMsj = origMsj.split('');
    let encriptedMsj = [];
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
    /*if(letra == "a"){
            encriptedMsj.push('ai')
        }
        else if(letra == "e"){
            encriptedMsj.push('enter')
        }
        else if(letra == "i"){
            encriptedMsj.push('imes')
        }
        else if(letra == "o"){
            encriptedMsj.push('ober')
        }
        else if(letra == "u"){
            encriptedMsj.push('ufat')
        }
        else{
            encriptedMsj.push(letra)
        }*/
        //console.log(encriptedMsj.join(''))
    //textareaEnc.style.display = "inline";
    finalMsj = encriptedMsj.join('')
    document.getElementById("encripted-message").value = finalMsj;
}

function desencript(){
    let suma = 0;
    let desen = document.getElementById('orginal-message').value;
    console.log("primer desencriptado"+desen)
    for(x=0; x < arrReglas.length; x++){
        if(desen.search(arrReglas[x])!= -1 ){
            //console.log("no fue -1")
            //console.log(desen)
            desen = desen.replaceAll(arrReglas[x], arrLetras[x])
            console.log("al final"+desen)
            document.getElementById("encripted-message").value = desen;
        }
        else if(desen.search(arrReglas[x])== -1){
            suma = suma + 1;
            if(suma == 5){
                //console.log("No se encontró mensaje para desencriptar")
                document.getElementById("error2").innerHTML = "Coloca aquí el mensaje a desencriptar ⬇️"
            }
        }
        
        /*else{
            document.getElementById("error2").innerHTML = "No se encontró mensaje para desencriptar"
        }*/
    }
    //console.log(desen)
    //console.log(textareaEnc)
    //document.getElementById('encripted-message').innerHTML = desen;
    
}

function check(e){
        tecla = (document.all) ? e.keyCode : e.which;  //guarda el código ascii de la tecla
    
        //Para permitir tecla de borrar backspace
        if (tecla == 8) {
            return true;
        }
        // Patrón de entrada, en este caso solo acepta numeros y letras
        patron = /[a-z\s\n]/;
        tecla_final = String.fromCharCode(tecla);//convierte el código de caracter ascci a caracter
        //console.log(tecla)
        
        imprime = patron.test(tecla_final);
        if(!imprime){
            if(tecla >= 65 && tecla <= 90){
                //console.log("tecla dentro del if"+tecla)
                err1.style.display = "inline-flex";
                document.getElementById("error").innerHTML = 'Oops! No se admiten <b>mayúsculas</b><button class="close" onclick="cerrar()">X</button>';
            }
            else if(tecla >= 48 && tecla <= 57){
                //console.log("tecla dentro del if"+tecla)
                err1.style.display = "inline-flex";
                document.getElementById("error").innerHTML = 'Oops! No se admiten <b>números</b><button class="close" onclick="cerrar()">X</button>';
            }
            else{
                err1.style.display = "inline-flex";
                document.getElementById("error").innerHTML = 'Oops! No se admiten <b>acentos</b> ni <b>caracteres especiales</b><button class="close" onclick="cerrar()">X</button>';
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
function cerrar(){
    console.log("entro a close");
    err1.style.display = "none";
}