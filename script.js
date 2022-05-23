
function calcular() {    

    let ini = parseInt(document.getElementById("numeroInicio").value);
    let fim = parseInt(document.getElementById("numeroFinal").value);
 
    let i = ini;
    let soma = ini;

    while (i < fim) {
        i++;
        soma += i;
    }
       
    resultadoFinal.innerHTML = soma;
   
}
