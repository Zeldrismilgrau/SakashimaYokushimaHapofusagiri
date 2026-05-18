// script.test.js

const {
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
} = require('./script');


describe('Função maiorValor', () => {

    test('Retorna o maior valor', () => {
        expect(maiorValor(10, 5))
            .toBe('O maior valor é 10');
    });

    test('Retorna igualdade', () => {
        expect(maiorValor(7, 7))
            .toBe('Os dois valores são iguais');
    });

});


describe('Função imparPar', () => {

    test('Verifica par e ímpar', () => {
        expect(imparPar(4, 7))
            .toBe('4 é par e 7 é ímpar');
    });

    test('Verifica dois pares', () => {
        expect(imparPar(2, 8))
            .toBe('2 é par e 8 é par');
    });

    test('Verifica dois ímpares', () => {
        expect(imparPar(3, 9))
            .toBe('3 é ímpar e 9 é ímpar');
    });

});


describe('Função verificarVoto', () => {

    test('Não pode votar', () => {
        expect(verificarVoto(14))
            .toBe('Não pode votar');
    });

    test('Voto opcional', () => {
        expect(verificarVoto(17))
            .toBe('Voto opcional');
    });

    test('Pode votar', () => {
        expect(verificarVoto(30))
            .toBe('Pode votar');
    });

});


describe('Função verificarNumero', () => {

    test('Número positivo', () => {
        expect(verificarNumero(10))
            .toBe('Positivo');
    });

    test('Número negativo', () => {
        expect(verificarNumero(-5))
            .toBe('Negativo');
    });

    test('Número zero', () => {
        expect(verificarNumero(0))
            .toBe('Igual a zero');
    });

});


describe('Função calcularBonus', () => {

    test('Bônus de 20%', () => {
        expect(calcularBonus(1000))
            .toBe(200);
    });

    test('Bônus de 10%', () => {
        expect(calcularBonus(3000))
            .toBe(300);
    });

    test('Bônus de 5%', () => {
        expect(calcularBonus(6000))
            .toBe(300);
    });

});


describe('Função podeDirigir', () => {

    test('Pode dirigir', () => {
        expect(podeDirigir(20))
            .toBe('Pode dirigir');
    });

    test('Não pode dirigir', () => {
        expect(podeDirigir(15))
            .toBe('Não pode dirigir');
    });

});


describe('Função verificarSemestre', () => {

    test('Primeiro semestre', () => {
        expect(verificarSemestre('Janeiro'))
            .toBe('Primeiro semestre');
    });

    test('Segundo semestre', () => {
        expect(verificarSemestre('Outubro'))
            .toBe('Segundo semestre');
    });

});


describe('Função verificarLetra', () => {

    test('Verifica vogal', () => {
        expect(verificarLetra('A'))
            .toBe('Vogal');
    });

    test('Verifica consoante', () => {
        expect(verificarLetra('B'))
            .toBe('Consoante');
    });

});


describe('Função calcularMedia', () => {

    test('Calcula média corretamente', () => {
        expect(calcularMedia([10, 20, 30, 40, 50]))
            .toBe(30);
    });

});


describe('Função fazerLogin', () => {

    test('Login válido', () => {
        expect(fazerLogin('Admin', '123'))
            .toBe('Conectado com sucesso!');
    });

    test('Login inválido', () => {
        expect(fazerLogin('Joao', '999'))
            .toBe('Acesso negado! Usuário ou senha incorretos!');
    });

});