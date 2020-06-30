let numbersBtn = document.querySelectorAll(".number");
let operationsBtn = document.querySelectorAll(".operation");
let clearBtns = document.querySelectorAll(".clear_Btn");
let decimalBtn = document.getElementById("decimal");
let percentBtn = document.getElementById("percent");
let resultBtn = document.getElementById("result");

//display input
let input = document.getElementById("input");
let memoryCurrentNumber = "0";
let memoryNewNumber = false;
let memoryPendingOperation = "";

//numbers function
for (let i = 0; i < numbersBtn.length; i++) {
  let number = numbersBtn[i];
  number.addEventListener("click", (e) => {
    numberPress(e.target.textContent);
  });
}

function numberPress(number) {
  if (memoryNewNumber) {
    input.value = number;
    memoryNewNumber = false;
  } else {
    if (input.value === "0") {
      input.value = number;
    } else {
      input.value += number;
    }
  }
}
//operations function
for (let i = 0; i < operationsBtn.length; i++) {
  let operationBtn = operationsBtn[i];
  operationBtn.addEventListener("click", (e) => {
    operationPress(e.target.textContent);
  });
}

function operationPress(op) {
  let localOperationMemory = input.value;
  if (memoryNewNumber && memoryPendingOperation !== "=") {
    input.value = memoryCurrentNumber;
  } else {
    memoryNewNumber = true;
    if (memoryPendingOperation === "+") {
      memoryCurrentNumber += parseFloat(localOperationMemory);
    } else if (memoryPendingOperation === "-") {
      memoryCurrentNumber -= parseFloat(localOperationMemory);
    } else if (memoryPendingOperation === "*") {
      memoryCurrentNumber *= parseFloat(localOperationMemory);
    } else if (memoryPendingOperation === "/") {
      memoryCurrentNumber /= parseFloat(localOperationMemory);
    } else {
      memoryCurrentNumber = parseFloat(localOperationMemory);
    }
    input.value = memoryCurrentNumber;
    memoryPendingOperation = op;
  }
}

//clear function
for (let i = 0; i < clearBtns.length; i++) {
  let clearBtn = clearBtns[i];
  clearBtn.addEventListener("click", (e) => {
    clearPress(e.srcElement.id);
  });
}

function clearPress(id) {
  if (id === "ce") {
    input.value = "0";
    memoryNewNumber = true;
  } else if (id === "c") {
    input.value = "0";
    memoryNewNumber = true;
    memoryCurrentNumber = 0;
    memoryPendingOperation = "";
  }
}

//decimal function
decimalBtn.addEventListener("click", decimal);

function decimal(argument) {
  let localDecimalMemory = input.value;
  if (memoryNewNumber) {
    localDecimalMemory = "0.";
    memoryNewNumber = false;
  } else {
    if (localDecimalMemory.indexOf(".") === -1) {
      localDecimalMemory += ".";
    }
  }
  input.value = localDecimalMemory;
}

//open calculate
let menu = document.querySelector(".main");
let click = document.querySelector(".click");
let btn = document.querySelector(".btn");

function f1() {
  menu.classList.remove("main");
  menu.classList.add("menu");
  click.classList.add("click-hide");
  x.classList.remove("x-hide");
}

//close calculate
let x = document.querySelector(".x");
btn.addEventListener("click", f1);
x.addEventListener("click", f2);
function f2() {
  input.value = 0;
  menu.classList.remove("menu");
  menu.classList.add("main");
  click.classList.remove("click-hide");
  x.classList.add("x-hide");
}
