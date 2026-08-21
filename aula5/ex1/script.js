function converter() {
    let numeroTab = Number(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    for (let i = 0; i <= 10; i++) {
        let calculo = numeroTab * i;

        resultado.innerHTML += `${numeroTab} x ${i} = ${calculo} <br>`;
    }

};