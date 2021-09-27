// Для эстетичности ввода ограничение на кол-во вводимых символов - 20.
const DEV_BY_ZERO = 'Error';
const OUT_OF_RANGE = 'Out of range'

var chars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
var operators = ['+', '-', 'x', '÷'];
var keys = document.querySelectorAll('#calculator span');
var decAdded = false;
var operatorAddaed = false;

for (var i = 0; i < keys.length; i++) {
    keys[i].onclick = function (e) {
        var input = document.querySelector('.screen');
        var inputVal = input.innerHTML;
        var clickVal = this.innerHTML;

        if (clickVal == '=') {
            operatorAddaed = false;
            if (inputVal != DEV_BY_ZERO && inputVal != OUT_OF_RANGE) {
                var equation = inputVal;
                var lastChar = equation[equation.length - 1];
                equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
                if (operators.indexOf(lastChar) > -1 || lastChar == '.') {
                    equation = equation.replace(/.$/, '');
                }
                if (equation) {
                    var res = eval(equation);
                    if (res == Infinity || res == -Infinity) {
                        input.innerHTML = DEV_BY_ZERO;
                    } else {
                        if (res < Number.MIN_SAFE_INTEGER || res > Number.MAX_SAFE_INTEGER) {
                            input.innerHTML = OUT_OF_RANGE;
                        } else {
                            input.innerHTML = res;
                        }
                    }
                }
                decAdded = false;
            }
        }
        else if (clickVal == 'C') {
            operatorAddaed = false;
            input.innerHTML = '';
            decAdded = false;
        }
        else if (operators.indexOf(clickVal) > -1) {
            if (inputVal != DEV_BY_ZERO && inputVal != OUT_OF_RANGE) {
                if (inputVal == '' ||
                    (parseFloat(inputVal) <= Number.MAX_SAFE_INTEGER && parseFloat(inputVal) >= Number.MIN_SAFE_INTEGER)) {
                    var lastChar = inputVal[inputVal.length - 1];
                    if (!operatorAddaed && inputVal != '' && operators.indexOf(lastChar) == -1) {
                        input.innerHTML += clickVal;
                        operatorAddaed = true;
                    }
                    else if (inputVal == '' && clickVal == '-') {
                        input.innerHTML += clickVal;
                    }
                    if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
                        input.innerHTML = inputVal.replace(/.$/, clickVal);
                    }
                    decAdded = false;
                }
            }
        }
        else if (clickVal == '.') {
            if (!decAdded && inputVal != DEV_BY_ZERO && inputVal != OUT_OF_RANGE) {
                input.innerHTML += clickVal;
                decAdded = true;
            }
        }
        else {
            if (inputVal != DEV_BY_ZERO && inputVal != OUT_OF_RANGE) {
                if (inputVal == '' || inputVal == '-' ||
                    (parseFloat(inputVal) <= Number.MAX_SAFE_INTEGER && parseFloat(inputVal) >= Number.MIN_SAFE_INTEGER)) {
                    if (inputVal.length < 20) {
                        input.innerHTML += clickVal;
                    }
                }
            }
        }
        e.preventDefault();
    }
}
