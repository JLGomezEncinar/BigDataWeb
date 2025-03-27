function limpiar() {
    document.getElementById("imgP1").style.visibility = "hidden"
    document.getElementById("imgP2").style.visibility = "hidden"
    document.getElementById("imgP3").style.visibility = "hidden"
    document.getElementById("imgP4").style.visibility = "hidden"
}
function comprobar() {
    event.preventDefault()
    rdRespuestas = document.getElementsByName("respuesta1")
    respuesta1OK = false;
    for (radio of rdRespuestas) {
        if (radio.checked && radio.value == "true")
            respuesta1OK = true
    }
    if (respuesta1OK) {
        document.getElementById("imgP1").src = "media/party.jpg"
    } else {
        document.getElementById("imgP1").src = "media/tryAgain.png"
    }
    document.getElementById("imgP1").style.visibility = "visible"
    rdRespuestas2 = document.getElementsByName("respuesta2")
    respuesta2OK = false
    
        if (rdRespuestas2[0].checked && rdRespuestas2[1].checked && rdRespuestas2[2].checked ) {
            respuesta2OK = true
        }
    
    if (respuesta2OK) {
        document.getElementById("imgP2").src = "media/party.jpg"
    } else {
        document.getElementById("imgP2").src = "media/tryAgain.png"
    }
    document.getElementById("imgP2").style.visibility = "visible"

    rdRespuestas3 = document.querySelectorAll(".respuesta3")
    respuesta3OK = false
    for (element of rdRespuestas3) {
    // rdRespuestas3.forEach(element => {
        if (element.value == "true") {
            respuesta3OK = true
        }
    }
// );
        
    
    if (respuesta3OK) {
        document.getElementById("imgP3").src = "media/party.jpg"
    } else {
        document.getElementById("imgP3").src = "media/tryAgain.png"
    }
    document.getElementById("imgP3").style.visibility = "visible"
    if (respuesta1OK && respuesta2OK && respuesta3OK) {
        document.getElementById("imgP4").src = "media/medalla.jpg"
        document.getElementById("imgP4").style.visibility = "visible"
    }
}