document.getElementById("submitButton").addEventListener("click", function () {
  let inputValue = document.getElementById("inputField").value;

  if (typeof inputValue === "string") {
    let substrings = [];
    let currentString = "";

    for (let i = 0; i < inputValue.length; i++) {
      let char = inputValue.charAt(i);
      if (isNaN(char)) {
        substrings.push(currentString);
        currentString = "";
      } else {
        currentString += char;
      }
    }

    substrings.push(currentString);
    console.log(substrings);
  } else {
    console.log("Input is not a string");
  }
});