document.getElementById("equals").addEventListener("click", function () {
  
  let outputFields = document.querySelectorAll(".output-field");
  let lastOutputField = outputFields[outputFields.length - 1];
  let lastOutputFieldValue = lastOutputField.value;

  if (typeof lastOutputFieldValue === "string") {
    let numbers = lastOutputFieldValue.split(/[+\-*/]/);
    let operands = lastOutputFieldValue.match(/[+\-*/]/g);

    let result = parseInt(numbers[0]);

    for (let i = 0; i < operands.length; i++) {
      let currentNumber = parseInt(numbers[i + 1]);
      let currentOperand = operands[i];

      switch (currentOperand) {
        case "+":
          result += currentNumber;
          break;
        case "-":
          result -= currentNumber;
          break;
        case "*":
          result *= currentNumber;
          break;
        case "/":
          result /= currentNumber;
          break;
      }
    }

    lastOutputField.setAttribute("value", lastOutputFieldValue);

    let display = document.getElementById("output-holder");
    display.innerHTML += '<input class="output-field" value="' + result + '">';

  } else {
    console.log("Input is not a string");
  }
});

let calcButtons = document.querySelectorAll('.reg-button');

calcButtons.forEach((e) => {
  e.addEventListener('click', () => {
    let outputFields = document.querySelectorAll(".output-field");
    let lastOutputField = outputFields[outputFields.length - 1];
    lastOutputField.value += e.innerText;
  })
})