function converter() {
    let totalSegundos = Number(document.getElementById("evento").value);

    let horas = Math.floor(totalSegundos / 3600);
    let minutos = Math.floor((totalSegundos % 3600) / 60);
    let segundos = totalSegundos % 60;

    document.getElementById("resultado").innerText = `${horas}h ${minutos}m ${segundos}s`;
}