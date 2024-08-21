function enviar() {
    let Nombre= document.getElementById("nombre").value
    let Apellido= document.getElementById("apellido").value
    let Edad= document.getElementById("edad").value
    let Pais= document.getElementById("pais").value
    let Posicion = document.getElementById("posicion").value

    if (Posicion == "1"){
        document.getElementById ("mostrarNombre1").innerHTML = Nombre
        document.getElementById ("mostrarApellido1").innerHTML = Apellido
        document.getElementById ("mostrarEdad1").innerHTML = Edad
        document.getElementById ("mostrarPais1").innerHTML = Pais
    }

    else if (Posicion == "2"){
        document.getElementById ("mostrarNombre2").innerHTML = Nombre
        document.getElementById ("mostrarApellido2").innerHTML = Apellido
        document.getElementById ("mostrarEdad2").innerHTML = Edad
        document.getElementById ("mostrarPais2").innerHTML = Pais
    }

    else if (Posicion == "3"){
        document.getElementById ("mostrarNombre3").innerHTML = Nombre
        document.getElementById ("mostrarApellido3").innerHTML = Apellido
        document.getElementById ("mostrarEdad3").innerHTML = Edad
        document.getElementById ("mostrarPais3").innerHTML = Pais
    }
    else{
        alert ("No califica")
    }
}
