/**
 * Simulador do operadores Lógicos AND - OR - NOT
 */

let receive // armazena o parametro(valor) recebido do html
//as variaveis abaixo são usadas para identificar se o interrupitor está
//ligado ou desligado (false = desligado | true = ligado)
let sw1 = false
let sw2 = false
let br = false

function sw(receive) {
    console.log(receive)
    if (receive === 1 && sw1 === false){
        document.getElementById('sw1').src="img/swon.png"
        sw1 = true
    } else if (receive === 1 && sw1 === true){
        document.getElementById('sw1').src="img/swoff.png"
        sw1 = false
    }

    if (receive === 2 && sw2 === false){
        document.getElementById('sw2').src="img/swon.png"
        sw2 = true
    }
    else if (receive === 2 && sw2 === true  ){
        document.getElementById('sw2').src="img/swoff.png"
        sw2 = false
    }

    if (receive === 3   && br === false) {
        let som = new Audio()
        som.src = "sound/glassbreaking.wav"
        som.play()
        //trocar a imagem
        document.getElementById('lamp').src = "img/broken.jpg"
        br = true
    }

    if(br !== true){
    
    if (sw1 === true && sw2 === true ) {
        document.getElementById('lamp').src="img/on.jpg"
    } else {
        document.getElementById('lamp').src="img/off.jpg"
    }    
    }

}



