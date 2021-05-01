function calcular() {
  const input1 = document.querySelector("#input1").value;
  const input2 = document.querySelector("#input2").value;
  const input3 = document.querySelector("#input3").value;
  const medida = document.querySelector("#medida").value;
  const resposta = document.querySelector("#resposta");

  
  const divCatetoOposto = document.querySelector("#valorCatetoOposto");  
  const divCatetoAdjacente = document.querySelector
  
  const divHipotenusa = document.querySelector("#valorHipotenusa");

  var catetoOposto = 0; 
  var catetoAdjacente = 0; 
  var hipotenusa = 0;

  const aviso2campos = "Pelo menos 2 campos devem ser preenchidos.";

  //Validação para 2 campos em branco gerando alerta
  if (input1 == 0 && input2 == 0) {
    alert(aviso2campos);
    return;
  }

  if (input1 == 0 && input3 == 0) {
    alert(aviso2campos);
    return;
  }

  if (input2 == 0 && input3 == 0) {
    alert(aviso2campos);
    return;
  }

  //Condicionais para as funções 

  if (input1 == "") {
    catetoAdjacente = input2;
    hipotenusa = input3;

    catetoOposto = Math.sqrt(
      Math.pow(hipotenusa, 2) - Math.pow(catetoAdjacente, 2)
    )
      .toFixed(2)
      .replace(".", ",");
  }

  if (input2 == "") {
    catetoOposto = input1;
    hipotenusa = input3;

    catetoAdjacente = Math.sqrt(
      Math.pow(hipotenusa, 2) - Math.pow(catetoOposto, 2)
    )
      .toFixed(2)
      .replace(".", ",");
  }

  if (input3 == "") {
    catetoOposto = input1;
    catetoAdjacente = input2;

    hipotenusa = Math.sqrt(
      Math.pow(catetoOposto, 2) + Math.pow(catetoAdjacente, 2)
    )
      .toFixed(2)
      .replace(".", ",");
  }

  divCatetoOposto.innerHTML = catetoOposto + medida;
  divCatetoAdjacente.innerHTML = catetoAdjacente + medida;
  divHipotenusa.innerHTML = hipotenusa + medida;

  resposta.innerHTML = `Resposta  :\nO Cateto Oposto é ${catetoOposto}${medida}, o Cateto Adjacente é ${catetoAdjacente}${medida} e a Hipotenusa é ${hipotenusa}${medida}.`;
}
