function calculate(num1, num2, operator) {
  if (operator == "+") {
    return num1 + num2;
  } else if (operator == "-") {
    return num1 - num2;
  } else if (operator == "*") {
    return num1 * num2;
  } else if (operator == "/") {
    return num1 / num2;
  }
}

function addDecimal(num1) {
  if (!num1.includes(".")) {
    return `${num1}.`;
  } else {
    return num1;
  }
}

var operators = ["+", "-", "*", "/"];
function appendOperator(num1, operator) {
  if (!operators.includes(num1.slice(num1.length - 1))) {
    return `${num1} ${operator}`;
  }
}

function addDigit(num1, digit) {
  return num1 + digit;
}

function replaceOperator(num1, operator) {
  if (num1 != "") {
    return num1.slice(0, -1) + operator;
  } else {
    return "0 " + operator;
  }
}

function back(num1) {
  if (num1 != "") {
    return num1.slice(0, -1);
  }
  return "";
}

function clearAll() {
  return "";
}

var inputDisplay = document.getElementById("inputDisplay");
var operationDisplay = document.getElementById("operationDisplay");

var number1Button = document.getElementById("number1");
var number2Button = document.getElementById("number2");
var number3Button = document.getElementById("number3");
var number4Button = document.getElementById("number4");
var number5Button = document.getElementById("number5");
var number6Button = document.getElementById("number6");
var number7Button = document.getElementById("number7");
var number8Button = document.getElementById("number8");
var number9Button = document.getElementById("number9");
var number0Button = document.getElementById("number0");
var addButton = document.getElementById("add");
var subtractButton = document.getElementById("subtract");
var multiplyButton = document.getElementById("multiply");
var divideButton = document.getElementById("divide");
var equalButton = document.getElementById("equal");
var backButton = document.getElementById("back");
var clearAllButton = document.getElementById("clearAll");
var decimalButton = document.getElementById("decimal");

number1Button.addEventListener("click", function () {
  inputDisplay.innerHTML = addDigit(inputDisplay.innerHTML, "1");
});

number2Button.addEventListener("click", function () {
  inputDisplay.innerHTML = addDigit(inputDisplay.innerHTML, "2");
});

number3Button.addEventListener("click", function () {
  inputDisplay.innerHTML = addDigit(inputDisplay.innerHTML, "3");
});

number4Button.addEventListener("click", function () {
  inputDisplay.innerHTML = addDigit(inputDisplay.innerHTML, "4");
});

number5Button.addEventListener("click", function () {
  inputDisplay.innerHTML = addDigit(inputDisplay.innerHTML, "5");
});

number6Button.addEventListener("click", function () {
  inputDisplay.innerHTML = addDigit(inputDisplay.innerHTML, "6");
});

number7Button.addEventListener("click", function () {
  inputDisplay.innerHTML = addDigit(inputDisplay.innerHTML, "7");
});

number8Button.addEventListener("click", function () {
  inputDisplay.innerHTML = addDigit(inputDisplay.innerHTML, "8");
});

number9Button.addEventListener("click", function () {
  inputDisplay.innerHTML = addDigit(inputDisplay.innerHTML, "9");
});

number0Button.addEventListener("click", function () {
  inputDisplay.innerHTML = addDigit(inputDisplay.innerHTML, "0");
});

decimalButton.addEventListener("click", function () {
  inputDisplay.innerHTML = addDecimal(inputDisplay.innerHTML);
});

backButton.addEventListener("click", function () {
  inputDisplay.innerHTML = back(inputDisplay.innerHTML);
});

clearAllButton.addEventListener("click", function () {
  inputDisplay.innerHTML = clearAll();
  operationDisplay.innerHTML = clearAll();
});

addButton.addEventListener("click", function () {
  operate("+");
});

subtractButton.addEventListener("click", function () {
  operate("-");
});

multiplyButton.addEventListener("click", function () {
  operate("*");
});

divideButton.addEventListener("click", function () {
  operate("/");
});

function operate(newOperator) {
  if (inputDisplay.innerHTML == "") {
    if (operationDisplay.innerHTML == "") {
      operationDisplay.innerHTML = "0 " + newOperator;
    } else {
      operationDisplay.innerHTML = replaceOperator(
        operationDisplay.innerHTML,
        newOperator
      );
    }
  } else {
    if (operationDisplay.innerHTML == "") {
      operationDisplay.innerHTML = inputDisplay.innerHTML;
    } else {
      var n1 = Number(
        operationDisplay.innerHTML.substring(
          0,
          operationDisplay.innerHTML.length - 2
        )
      );
      var oldOperator = operationDisplay.innerHTML.substr(
        operationDisplay.innerHTML.length - 1
      );
      var n2 = Number(inputDisplay.innerHTML);
      var newNumber = calculate(n1, n2, oldOperator);
      operationDisplay.innerHTML = `${newNumber}`;
    }
    operationDisplay.innerHTML = appendOperator(
      operationDisplay.innerHTML,
      newOperator
    );
    inputDisplay.innerHTML = clearAll();
  }
}

equalButton.addEventListener("click", function () {
  if (inputDisplay.innerHTML != "") {
    if (operationDisplay.innerHTML != "") {
      var n1 = Number(
        operationDisplay.innerHTML.substring(
          0,
          operationDisplay.innerHTML.length - 2
        )
      );
      var operator = operationDisplay.innerHTML.substr(
        operationDisplay.innerHTML.length - 1
      );
      var n2 = Number(inputDisplay.innerHTML);
      var newNumber = calculate(n1, n2, operator);
      operationDisplay.innerHTML = `${newNumber}`;
      operationDisplay.innerHTML = appendOperator(
        operationDisplay.innerHTML,
        operator
      );
    }
    inputDisplay.innerHTML = clearAll();
  }
});
