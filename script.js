// script.js

function maiorValor(v1, v2) {

    if (v1 > v2) {
        return `O maior valor é ${v1}`;

    } else if (v2 > v1) {
        return `O maior valor é ${v2}`;

    } else {
        return "Os dois valores são iguais";
    }
}


function imparPar(n1, n2) {

    let resultado1 = (n1 % 2 === 0) ? "par" : "ímpar";
    let resultado2 = (n2 % 2 === 0) ? "par" : "ímpar";

    return `${n1} é ${resultado1} e ${n2} é ${resultado2}`;
}


function verificarVoto(idade) {

    if (idade < 16) {
        return "Não pode votar";

    } else if ((idade >= 16 && idade < 18) || idade >= 70) {
        return "Voto opcional";

    } else {
        return "Pode votar";
    }
}


function verificarNumero(valor) {

    if (valor > 0) {
        return "Positivo";

    } else if (valor < 0) {
        return "Negativo";

    } else {
        return "Igual a zero";
    }
}


function calcularBonus(salario) {

    let bonus;

    if (salario < 2000) {
        bonus = salario * 0.20;

    } else if (salario >= 2000 && salario <= 5000) {
        bonus = salario * 0.10;

    } else {
        bonus = salario * 0.05;
    }

    return bonus;
}


function podeDirigir(idade) {

    if (idade >= 18) {
        return "Pode dirigir";

    } else {
        return "Não pode dirigir";
    }
}


function verificarSemestre(mes) {

    mes = mes.toLowerCase();

    const primeiroSemestre = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho"
    ];

    if (primeiroSemestre.includes(mes)) {
        return "Primeiro semestre";

    } else {
        return "Segundo semestre";
    }
}


function verificarLetra(letra) {

    letra = letra.toLowerCase();

    if ("aeiou".includes(letra)) {
        return "Vogal";

    } else {
        return "Consoante";
    }
}


function calcularMedia(valores) {

    let soma = 0;

    for (let i = 0; i < valores.length; i++) {
        soma += valores[i];
    }

    return soma / valores.length;
}


function fazerLogin(usuario, senha) {

    if (usuario === "Admin" && senha === "123") {
        return "Conectado com sucesso!";

    } else {
        return "Acesso negado! Usuário ou senha incorretos!";
    }
}


module.exports = {
    maiorValor,
    imparPar,
    verificarVoto,
    verificarNumero,
    calcularBonus,
    podeDirigir,
    verificarSemestre,
    verificarLetra,
    calcularMedia,
    fazerLogin
};