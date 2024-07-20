function entrada(){
    let nombre = document.getElementById('nombre').value
    let entrada = document.getElementById('entrada').value
    let cantidad = document.getElementById('numentradas').value

    if(nombre != '' && entrada != 'nada' && cantidad >0){
        if (entrada == 'fluor'){
            let precio = 7000
            pre.textContent = 'Valor de la entrada: $' + precio 
            entradas.textContent = 'Cantidad de entradas compradas: ' + cantidad
            pagar.textContent = 'Valor Total a pagar: $' + precio*cantidad

            setTimeout(function() {
                alert("La administracion de Disco Stu's Dance Palance a aceptado su compra");}, 2000); 
        }else if(entrada == 'karaoke'){
            let precio = 5000
            pre.textContent = 'Valor de la entrada: $' + precio 
            entradas.textContent = 'Cantidad de entradas compradas: ' + cantidad
            pagar.textContent = 'Valor Total a pagar: $' + precio*cantidad

            setTimeout(function() {
                alert("La administracion de Disco Stu's Dance Palance a aceptado su compra" + );}, 2000); 
        }
    }

    if (nombre == '' || entrada == 'nada' || cantidad == ''){
        alert("No ha ingresado informacion necesaria ")
    }
}