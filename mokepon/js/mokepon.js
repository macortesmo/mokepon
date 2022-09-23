function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", selecccionarMascotaJugador) 
}

function selecccionarMascotaJugador(){
    alert("SELECCIONASTE TU MASCOTA!!")
}

window.addEventListener('load', iniciarJuego)