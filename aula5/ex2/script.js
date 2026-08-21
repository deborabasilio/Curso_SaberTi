function contar() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let resultado = document.getElementById("resultado");

resultado.innerText = "";

    for (let i = num1; i >= num2; i--) {
        resultado.innerText += i + "\n";
    }

};