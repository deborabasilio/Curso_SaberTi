let botao = document.getElementById("botao");
let formres = document.getElementById("form-res");

botao.addEventListener("click", function (event) {
       event.preventDefault(); // Impede a página de recarregar

       //Buscando os salários brutos e já convertendo para número
       let jan = Number(document.getElementById("jan").value);
       let fev = Number(document.getElementById("fev").value);
       let mar = Number(document.getElementById("mar").value);
       let abr = Number(document.getElementById("abr").value);
       let mai = Number(document.getElementById("mai").value);
       let jun = Number(document.getElementById("jun").value);
       let jul = Number(document.getElementById("jul").value);
       let ago = Number(document.getElementById("ago").value);
       let set = Number(document.getElementById("set").value);
       let out = Number(document.getElementById("out").value);
       let nov = Number(document.getElementById("nov").value);
       let dez = Number(document.getElementById("dez").value);

       //Buscando os descontos e convertendo para número
       let descJan = Number(document.getElementById("descJan").value);
       let descFev = Number(document.getElementById("descFev").value);
       let descMar = Number(document.getElementById("descMar").value);
       let descAbr = Number(document.getElementById("descAbr").value);
       let descMai = Number(document.getElementById("descMai").value);
       let descJun = Number(document.getElementById("descJun").value);
       let descJul = Number(document.getElementById("descJul").value);
       let descAgo = Number(document.getElementById("descAgo").value);
       let descSet = Number(document.getElementById("descSet").value);
       let descOut = Number(document.getElementById("descOut").value);
       let descNov = Number(document.getElementById("descNov").value);
       let descDez = Number(document.getElementById("descDez").value);

       //Calculando os salários líquidos
       let salarioLiqJan = jan - (jan * descJan / 100);
       let salarioLiqFev = fev - (fev * descFev / 100);
       let salarioLiqMar = mar - (mar * descMar / 100);
       let salarioLiqAbr = abr - (abr * descAbr / 100);
       let salarioLiqMai = mai - (mai * descMai / 100);
       let salarioLiqJun = jun - (jun * descJun / 100);
       let salarioLiqJul = jul - (jul * descJul / 100);
       let salarioLiqAgo = ago - (ago * descAgo / 100);
       let salarioLiqSet = set - (set * descSet / 100);
       let salarioLiqOut = out - (out * descOut / 100);
       let salarioLiqNov = nov - (nov * descNov / 100);
       let salarioLiqDez = dez - (dez * descDez / 100);

       //Enviando os resultados calculados de volta para o segundo formulário
       document.getElementById("resJan").value = salarioLiqJan.toFixed(2);
       document.getElementById("resFev").value = salarioLiqFev.toFixed(2);
       document.getElementById("resMar").value = salarioLiqMar.toFixed(2);
       document.getElementById("resAbr").value = salarioLiqAbr.toFixed(2);
       document.getElementById("resMai").value = salarioLiqMai.toFixed(2);
       document.getElementById("resJun").value = salarioLiqJun.toFixed(2);
       document.getElementById("resJul").value = salarioLiqJul.toFixed(2);
       document.getElementById("resAgo").value = salarioLiqAgo.toFixed(2);
       document.getElementById("resSet").value = salarioLiqSet.toFixed(2);
       document.getElementById("resOut").value = salarioLiqOut.toFixed(2);
       document.getElementById("resNov").value = salarioLiqNov.toFixed(2);
       document.getElementById("resDez").value = salarioLiqDez.toFixed(2);

       //Exibe o segundo formulário na tela
       formres.style.display = 'block';
});