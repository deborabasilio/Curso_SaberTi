let res = document.getElementById("res");
let numAtual = 0;
let pares = 0;

res.innerHTML = "Contagem: <br>";

while (pares < 3) {
    if (numAtual % 2 === 0) {
        res.innerHTML += `<strong>${numAtual} (É par!)</strong> <br>`;
        pares++;
    } else {
        res.innerHTML += `${numAtual} <br>`;
        numeroAtual++;
    }

}