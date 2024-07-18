function actualizarContador1() {
    const fechaObjetivo = new Date('2024-07-27T22:00:00');
    const ahora = new Date();

    const diferencia = fechaObjetivo - ahora;

    if (diferencia <= 0) {
        document.getElementById('contador').innerHTML = "¡Ha llegado el día!";
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById('contador').innerHTML =
        `${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

setInterval(actualizarContador1, 1000);

function actualizarContador2() {
    const fechaObjetivo = new Date('2024-08-03T22:00:00');
    const ahora = new Date();

    const diferencia = fechaObjetivo - ahora;

    if (diferencia <= 0) {
        document.getElementById('contador2').innerHTML = "¡Ha llegado el día!";
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById('contador2').innerHTML =
        `${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

setInterval(actualizarContador2, 1000);

function actualizarContador3() {
    const fechaObjetivo = new Date('2024-08-10T22:00:00');
    const ahora = new Date();

    const diferencia = fechaObjetivo - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById('contador3').innerHTML =
        `${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

setInterval(actualizarContador3, 1000);