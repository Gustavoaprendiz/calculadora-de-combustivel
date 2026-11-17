function verificarCombustivel(e) {

    //previnindo
    e.preventDefault();
    //console.log(e);

    let gasolina = document.getElementById('gasolina').value;
    let etanol = document.getElementById('etanol').value;
    let resposta = document.getElementById('resposta');

    console.log(gasolina);
    console.log(etanol);

    let resultado = etanol / gasolina;
    if (resultado < 0.7) {
        resposta.innerHTML = '<h2>abasteça com etanol</h2>'
    }

    else {
        //alert('abasteça com gasolina')}
        resposta.innerHTML = '<h2>abasteça com gasolina</h2>'

    }

}