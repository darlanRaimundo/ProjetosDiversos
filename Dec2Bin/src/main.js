class Proj {
    constructor() {
        var inputVlrDec = document.querySelector('input[name=vlrDec]');
        var btnEl = document.querySelector('button.botao');
        var inputVlrBin = document.querySelector('input[name=vlrBin]');

        inputVlrDec.onfocus = function() {
            inputVlrBin.value = '';
        }

        inputVlrBin.onfocus = function() {
            inputVlrDec.value = '';
        }

        btnEl.onclick = function() {
            var i = 0;
            var j = 0;
            if (inputVlrDec.value != '') {
                var vlrDec = inputVlrDec.value;
                var x = vlrDec;
                var y = 0;
                var arrBinarios = [];
                var vlrFinalBin = '1';

                while (x >= 2) {
                    y = x%2;
                    arrBinarios[i] = y;
                    x = Math.trunc(x/2);
                    i++;
                }
                j = arrBinarios.length-1;
                while (j>=0) {
                    vlrFinalBin = vlrFinalBin + arrBinarios[j];
                    j--;
                }
                inputVlrBin.value = vlrFinalBin;
            } else
            if (inputVlrBin.value != '') {
                var arrBin = inputVlrBin.value.split("");
                var arrAux = "";

                i = arrBin.length-1;
                while (i>=0) {
                    arrAux = arrAux + arrBin[i];
                    i--;
                }
                
                var arrFinalBin = arrAux.split("");
                const arrValoresBin = [];
                while (j<=arrFinalBin.length-1) {
                    arrValoresBin[j] = (arrFinalBin[j] * Math.pow(2,j));
                    j++;   
                }
                const total = arrValoresBin.reduce((total, currentElement) => total + currentElement);
                inputVlrDec.value = total;
            }
        };
    } 
}

new Proj();