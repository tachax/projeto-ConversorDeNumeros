var extenso;
var num;

function verificar() {
    numero = document.getElementById('num').value;
    extenso = '';

    if (numero.length > 0 && numero.length >= 7) {
        if (numero.length == 7) {
            if (numero[0] > 1) {
                extenso = 'número inválido';
            } else {
                for (let i=1; i<numero.length; i++) {
                    if (numero[i] != 0) {
                        extenso = 'número inválido';
                    } else {
                        converter()
                    }
                }
            }
        } else {
            extenso = 'número inválido';
        }
    } else {
        converter()
    }

    document.getElementById('extenso').innerText = extenso;
}

function converter() {
    for (let i = 0; i < numero.length; i++) {
        if (i == numero.length - 1) {
            if (!(numero[i-1] == 1 && numero[i] != 0)) {
                unidade(numero[i], i)
            }
        } else if (i == numero.length - 2) {
            dezena(numero[i], i)
        } else if (i == numero.length - 3) {
            centena(numero[i], i)
        } else if (i == numero.length - 4) {
            milhar(numero[i], i)
        } else if (i == numero.length - 5) {
            dezena(numero[i], i)
        } else if (i == numero.length - 6) {
            centena(numero[i], i)
        } else if (i == numero.length - 7) {
            extenso = 'um milhão';
            break
        }
    }
}

function unidade(un, i) {
    if ((numero[numero.length - 1] != 0 || i != numero.length - 1) && (numero.length != 1) &&
        (numero[numero.length - 4] != 0 || i == numero.length - 1) &&
        (numero.length != 4 || i == numero.length - 1)) {
        extenso += ' e ';
    }

    if (un == 0) {
        if (numero == 0) {
            extenso += 'zero';
        }
    } else if (un == 1) {
        extenso += 'um';
    } else if (un == 2) {
        extenso += 'dois';
    } else if (un == 3) {
        extenso += 'tres';
    } else if (un == 4) {
        extenso += 'quatro';
    } else if (un == 5) {
        extenso += 'cinco';
    } else if (un == 6) {
        extenso += 'seis';
    } else if (un == 7) {
        extenso += 'sete';
    } else if (un == 8) {
        extenso += 'oito';
    } else if (un == 9) {
        extenso += 'nove';
    }
}

function dezena(un, i) {
    if ((numero[numero.length - 2] != 0 && numero.length < 7 && i > 0) &&
        (numero[numero.length - 5] != 0 || i == numero.length - 5) ||
        (numero[numero.length - 5] != 0 && numero[numero.length - 2] == 0 && i != numero.length - 2)) {
        extenso += ' e ';
    }

    if (un == 1) {
        if (numero[i + 1] == 0) {
            extenso += 'dez';
        } else if (numero[i + 1] == 1) {
            extenso += 'onze';
        } else if (numero[i + 1] == 2) {
            extenso += 'doze';
        } else if (numero[i + 1] == 3) {
            extenso += 'treze';
        } else if (numero[i + 1] == 4) {
            extenso += 'quatorze';
        } else if (numero[i + 1] == 5) {
            extenso += 'quinze';
        } else if (numero[i + 1] == 6) {
            extenso += 'dezesseis';
        } else if (numero[i + 1] == 7) {
            extenso += 'dezessete';
        } else if (numero[i + 1] == 8) {
            extenso += 'dezoito';
        } else if (numero[i + 1] == 9) {
            extenso += 'dezenove';
        }
    } else if (un == 2) {
        extenso += 'vinte';
    } else if (un == 3) {
        extenso += 'trinta';
    } else if (un == 4) {
        extenso += 'quarenta';
    } else if (un == 5) {
        extenso += 'cinquenta';
    } else if (un == 6) {
        extenso += 'sessenta';
    } else if (un == 7) {
        extenso += 'setenta';
    } else if (un == 8) {
        extenso += 'oitenta';
    } else if (un == 9) {
        extenso += 'noventa';
    }
}

function centena(un, i) {
    if (numero[numero.length - 1] == 0 && numero[numero.length - 2] == 0 && numero[numero.length - 3] == 0 &&
        i == numero.length - 3 && numero[numero.length - 4] != undefined) {
        extenso += ' e ';
    }

    if (un == 1) {
        if (numero[numero.length - 2] == 0 && numero[numero.length - 1] == 0) {
            extenso += 'cem';
        } else {
            extenso += 'cento';
        }
    } else if (un == 2) {
        extenso += 'duzentos';
    } else if (un == 3) {
        extenso += 'trezentos';
    } else if (un == 4) {
        extenso += 'quatrocentos';
    } else if (un == 5) {
        extenso += 'quinhentos';
    } else if (un == 6) {
        extenso += 'seiscentos';
    } else if (un == 7) {
        extenso += 'setecentos';
    } else if (un == 8) {
        extenso += 'oitocentos';
    } else if (un == 9) {
        extenso += 'novecentos';
    }
}

function milhar(un, i) {
    if (!(numero[i-1] == 1 && numero[i] != 0)) {       
        unidade(un, i)
    }
    extenso += ' mil ';
}