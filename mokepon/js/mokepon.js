<<<<<<< HEAD
function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", selecccionarMascotaJugador) 
}

function selecccionarMascotaJugador(){
    alert("SELECCIONASTE TU MASCOTA!!")
}

window.addEventListener('load', iniciarJuego)
=======
function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", selecccionarMascotaJugador)
}

function selecccionarMascotaJugador(){
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge!!!"
    }else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo!!!"
    }else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya!!!"
    }else{
        alert("Olvidaste seleccionar a tu mascota 😢")
    }
        
        


}

window.addEventListener("load", iniciarJuego)
>>>>>>> 0800f3079eb0e44c2c2720dd51742eb59054a92d
