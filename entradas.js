function entrada(){
    let nombre = document.getElementById('nombre').value
    let entrada = document.getElementById('entrada').value
    let cantidad = document.getElementById('numentradas').value

    if(nombre != '' && entrada != 'nada' && cantidad >0){
        if (entrada == 'fluor'){
            let precio = 7000
            texto.textContent = precio * cantidad
        }
    }

    if (nombre == '' || entrada == 'nada' || cantidad == ''){
        alert("No ha ingresado informacion necesaria ")
    }
}