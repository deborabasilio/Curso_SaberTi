function converter() {
    let resultado = document.getElementById("resultado");
    let celsius = document.getElementById("celsius").value;
    
    if (celsius === "") {
        resultado.innerText = "Por favor, insira um valor em Celsius.";
        return;
    }

    let fahrenheit = (celsius * 9/5) + 32;
    resultado.innerText = fahrenheit.toFixed(2) + " °F";

}