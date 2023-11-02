const result = document.querySelector('.resultado');
const confime = document.querySelector('.btn_igualdade');

function insert(valor) {
    result.innerHTML += valor;
}

function clean() {
    result.innerHTML = ' ';
}

function backspace() {
    if (result.textContent) {
        let resultado = document.getElementById('result').innerHTML
        result.innerHTML = resultado.substring(0, resultado.length - 1);
    }
}

function confima() {
    if (result.textContent != 'Erro') {
        document.getElementById("result").innerHTML = eval(result.innerHTML);
    }
}