var texto = document.getElementById("texto")

var select = document.getElementById("select");

var incremento = document.getElementById("incremento")

var divIncremento = document.getElementById("divIncremento")

var radioCodificar = document.getElementById("radioCodificar")

var radioDecodificar = document.getElementById("radioDecodificar")

var btn = document.getElementById("btnEnviar")

var textoDaArea = document.getElementById("textArea")

var alfabeto = "abcdefghijklmnopqrstuvwxyzéáàèâêçìíòó"

//DISPLAY - INCREMENTO

select.addEventListener("change", function(){
    if (select.value === "1"){
        divIncremento.style.display = "block"
    } else {
        divIncremento.style.display = "none"
    }
})

//BOTAO - CODIFICAR/DECODIFICAR

radioCodificar.addEventListener("click", function(){
    btn.innerText = "Codificar Mensagem!"
})

radioDecodificar.addEventListener("click", function(){
    btn.innerText = "Decodificar Mensagem!"
})


//CIFRA DE CÉSAR

//CODIFICAR

function codificaCesar() {
    var textoDigitado= texto.value;
    var textoMinusculo= textoDigitado.toLowerCase();
    var textoCodificadoCifra= '';
 
    for (var i= 0; i < textoMinusculo.length; i++) {
       for (var j= 0; j < alfabeto.length; j++) {
          if (textoMinusculo [i] == alfabeto [j]) {
             textoCodificadoCifra += alfabeto[j + parseInt(incremento.value)]
             break
          } else if (textoMinusculo == ' ') {
             textoCodificadoCifra=+ ' ';
             break
          }
       
       }
    }
 
    return textoCodificadoCifra
 }


 //DECODIFICAR

 function decodificaCesar() {
    var textoDigitado= texto.value;
    var textoMinusculo= textoDigitado.toLowerCase();
    var textoCodificadoCifra= '';
 
    for (var i= 0; i < textoMinusculo.length; i++) {
        for (var j= alfabeto.length; j >= 0; j--) {
           if (textoMinusculo [i] == alfabeto [j]) {
              textoCodificadoCifra += alfabeto[j - parseInt(incremento.value)]
              break
           } else if (textoMinusculo== ' ') {
              textoCodificadoCifra =+ ' ';
              break
           }
        
        }
     }
     return textoCodificadoCifra
  }
  
//BASE 64

//CODIFICAR 

function codBase64 (){
    let texto = document.querySelector('#texto').value
    let codificado = btoa(texto)
    return codificado
}

//DECODIFICAR

function deCodBase64 (){
    let texto = document.querySelector('#texto').value
    let decodificado = atob(texto)
    return decodificado
}


//BOTÃO - FUNCIONALIDADE

btn.addEventListener('click', function(e){
    e.preventDefault();
    if(radioCodificar.checked && select.value === "2"){
        
        textoDaArea.value = codBase64();
    } else if(radioDecodificar.checked && select.value === "2"){
        
        textoDaArea.value = deCodBase64();
    } else if(radioCodificar.checked && select.value === "1"){
        
        textoDaArea.value = codificaCesar()
    } else if(radioDecodificar.checked && select.value === "1"){
        
        textoDaArea.value = decodificaCesar()
    } else{
        textoDaArea.value = "Digite novamente o texto."
    }
})