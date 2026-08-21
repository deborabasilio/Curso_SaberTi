function converter() {
    let totalDias = document.getElementById("idade").value;

    if (totalDias === "" || totalDias < 0) {
        document.getElementById("resultado").innerText =
            "Por favor, insira uma quantidade válida de dias.";
        return;
    }

    totalDias = parseInt(totalDias);

    let anos = Math.floor(totalDias / 365);
    let restoDias = totalDias % 365;

    let meses = Math.floor(restoDias / 30);
    let dias = restoDias % 30;

    document.getElementById("resultado").innerText =
        `${anos} ano(s), ${meses} mês(es) e ${dias} dia(s)`;
}