function entrada(){
    let entrada = document.getElementById('entrada').value
    let cantidad = document.getElementById('numentradas').value

    if(entrada != 'nada' && cantidad >0){
        if (entrada == 'fluor'){
            let precio = 7000
            pre.textContent = 'Valor de la entrada para la Fiesta Fluor: $' + precio 
            entradas.textContent = 'Cantidad de entradas compradas: ' + cantidad
            pagar.textContent = 'Valor Total a pagar: $' + precio*cantidad

            setTimeout(function() {
                alert("La administracion de Disco Stu's Dance Palance a aceptado su compra");}, 2000); 

        }else if(entrada == 'karaoke'){
            let precio = 5000
            pre.textContent = 'Valor de la entrada para el Karaoke: $' + precio 
            entradas.textContent = 'Cantidad de entradas compradas: ' + cantidad
            pagar.textContent = 'Valor Total a pagar: $' + precio*cantidad

            setTimeout(function() {
                alert("La administracion de Disco Stu's Dance Palance a aceptado su compra" + '\n' + 'Gracias por comprar ' );}, 2000); 

        }else if(entrada == 'party'){
            let precio = 15000
            pre.textContent = 'Valor de la entrada para la Pool Party normal : $' + precio 
            entradas.textContent = 'Cantidad de entradas compradas: ' + cantidad
            pagar.textContent = 'Valor Total a pagar: $' + precio*cantidad

            setTimeout(function() {
                alert("La administracion de Disco Stu's Dance Palance a aceptado su compra" + '\n' + 'Gracias por comprar ' );}, 2000); 

        }else if(entrada == 'vip'){
            let precio = 25000
            pre.textContent = 'Valor de la entrada para la Pool Party normal : $' + precio 
            entradas.textContent = 'Cantidad de entradas compradas: ' + cantidad
            pagar.textContent = 'Valor Total a pagar: $' + precio*cantidad

            setTimeout(function() {
                alert("La administracion de Disco Stu's Dance Palance a aceptado su compra" + '\n' + 'Gracias por comprar ' );}, 2000);
            
        }
    }

    if (entrada == 'nada' || cantidad == ''){
        alert("No ha ingresado informacion necesaria ")
    }
}