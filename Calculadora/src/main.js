class Calculadora {
    constructor() {
        var valorAnt;
        var valorAntPorcentagem;
        var op;
        var valorCalculo = 0;
        var porcent = document.querySelector('input[name=porcent]');
        var sete = document.querySelector('input[name=sete]');
        var oito = document.querySelector('input[name=oito]');
        var nove = document.querySelector('input[name=nove]');
        var divi = document.querySelector('input[name=divi]');
        var quatro = document.querySelector('input[name=quatro]');
        var cinco = document.querySelector('input[name=cinco]');
        var seis = document.querySelector('input[name=seis]');
        var multi = document.querySelector('input[name=multi]');
        var um = document.querySelector('input[name=um]');
        var dois = document.querySelector('input[name=dois]');
        var tres = document.querySelector('input[name=tres]');
        var sub = document.querySelector('input[name=sub]');
        var zero = document.querySelector('input[name=zero]');
        var ponto = document.querySelector('input[name=ponto]');
        var del = document.querySelector('input[name=del]');
        var igual = document.querySelector('input[name=igual]');
        var soma = document.querySelector('input[name=soma]');
        var result = document.querySelector('input[name=result]');

        porcent.onclick = () => { this.operacoesMatematicas(porcent, result) };
        sete.onclick = () => { this.atualizarValor(sete, result) };
        oito.onclick = () => { this.atualizarValor(oito, result) };
        nove.onclick = () => { this.atualizarValor(nove, result) };
        divi.onclick = () => { this.operacoesMatematicas(divi, result) };
        quatro.onclick = () => { this.atualizarValor(quatro, result) };
        cinco.onclick = () => { this.atualizarValor(cinco, result) };
        seis.onclick = () => { this.atualizarValor(seis, result) };
        multi.onclick = () => { this.operacoesMatematicas(multi, result) };
        um.onclick = () => { this.atualizarValor(um, result) };
        dois.onclick = () => { this.atualizarValor(dois, result) };
        tres.onclick = () => { this.atualizarValor(tres, result) };
        sub.onclick = () => { this.operacoesMatematicas(sub, result) };
        zero.onclick = () => { this.atualizarValor(zero, result) };
        ponto.onclick = () => { this.atualizarValor(ponto, result) };
        del.onclick = () => { this.apagarUltimo(del, result) };
        soma.onclick = () => { this.operacoesMatematicas(soma, result) };
        igual.onclick = () => { this.btnIgual(igual, result) };
    }

    atualizarValor(elemento, destinoEl) {
        if ((destinoEl.value == 'X') || (destinoEl.value == '+') ||
            (destinoEl.value == '-') || (destinoEl.value == '/')) {
            destinoEl.value = elemento.value;
        } else if (destinoEl.value.length < 8) {
            destinoEl.value = destinoEl.value + elemento.value;
        }

    }

    operacoesMatematicas(elemento, destinoEl) {
        this.valorAnt = destinoEl.value;
        this.op = elemento.value;

        if (this.op == 'X') {
            this.valorAntPorcentagem = destinoEl.value;
        }

        if (this.op != '%') {
            destinoEl.value = elemento.value;
        } else {
            this.btnIgual(elemento, destinoEl);
        }
    }

    apagarUltimo(elemento, destinoEl) {
        var strtemp = destinoEl.value.substr(0, destinoEl.value.length - 1);
        destinoEl.value = strtemp;
    }

    btnIgual(elemento, destinoEl) {
        if (this.op == '+') {
            this.valorCalculo = parseFloat(this.valorAnt) + parseFloat(destinoEl.value);
        } else if (this.op == '-') {
            this.valorCalculo = parseFloat(this.valorAnt) - parseFloat(destinoEl.value);
        } else if (this.op == 'X') {
            this.valorCalculo = parseFloat(this.valorAnt) * parseFloat(destinoEl.value);
        } else if (this.op == '/') {
            this.valorCalculo = parseFloat(this.valorAnt) / parseFloat(destinoEl.value);
        } else if (this.op == '%') {
            this.valorCalculo = (parseFloat(this.valorAntPorcentagem) * (parseFloat(destinoEl.value) / 100)).toFixed(2);
        }

        destinoEl.value = this.valorCalculo;
    }
}


new Calculadora();