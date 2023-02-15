
// All processes that happen on clicking the equals button

document.getElementById("equals").addEventListener("click", function () {
  
  // Getting the last filed in an array
  let outputFields = document.querySelectorAll(".output-field");
  let lastOutputField = outputFields[outputFields.length - 1];
  let lastOutputFieldValue = lastOutputField.value;

  // Divides numbers and operands in separate arrays
  if (typeof lastOutputFieldValue === "string") {
    let numbers = lastOutputFieldValue.split(/[+\-*/]/);
    let operands = lastOutputFieldValue.match(/[+\-*/]/g);

    // Calculates the result
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

    // Initial input remains in the field
    lastOutputField.setAttribute("value", lastOutputFieldValue);

    // Disables all current fields
    outputFields.forEach((field) => {
      field.disabled = true;
    });

    // Adds a new field to the display and scrolls to it
    let display = document.getElementById("output-holder");
    display.innerHTML += '<input class="output-field" value="' + result + '">';
    display.scrollTop = display.scrollHeight;

  } else {
    console.log("Input is not a string");
  }
});

// Types button value to the latest field
let calcButtons = document.querySelectorAll('.reg-button');
calcButtons.forEach((e) => {
  e.addEventListener('click', () => {
    let outputFields = document.querySelectorAll(".output-field");
    let lastOutputField = outputFields[outputFields.length - 1];
    lastOutputField.value += e.innerText;
  })
})

// Removes incoret input
let allFields = document.querySelectorAll(".output-field");
let lastField = allFields[allFields.length - 1];
lastField.addEventListener("keyup", function() {
  validateInput(lastField);
});

function validateInput(inputElement) {
  let inputValue = inputElement.value;
  let validatedValue = inputValue.replace(/[^0-9+\-*/]/g, '');
  if (inputValue !== validatedValue) {
    inputElement.value = validatedValue;
  }
}