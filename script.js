const topDisplay = document.querySelector(".top_display");
const operatorDisplay = document.querySelector("#operator_display");
const resultDisplay = document.getElementById("result_display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Clear the input
    if (btn.dataset.type == "clear") {
      operatorDisplay.textContent = "";
      topDisplay.textContent = 0;
      resultDisplay.textContent = "";
      return;
    }

    // Show the operator sign that is been pressed
    if (btn.dataset.type == "operator") {
      operatorDisplay.textContent = btn.textContent;
      return;
    }

    // Clear the initial 0 before adding new inputs
    //If the input is 0 remove it else just keep concatenating the pressed input

    if (operatorDisplay.textContent == "") {
      if (topDisplay.textContent === "0") {
        topDisplay.textContent = btn.textContent;
      } else {
        topDisplay.textContent += btn.textContent;
      }
    } else {
      resultDisplay.textContent += btn.textContent;
    }

    if(btn.dataset.type == "equal") {
        if(operatorDisplay.textContent == "" && resultDisplay.textContent == "") return;

        const operator = operatorDisplay.textContent;
        const operand1 = parseFloat(topDisplay.textContent);
        const operand2 = parseFloat(resultDisplay.textContent);
        let result = 0;

       switch (operator) {
        case "+":
            result = operand1 + operand2;
            resultDisplay.textContent = result;
            operatorDisplay.textContent = "";
            topDisplay.textContent = "";
            break;
       
        case "-":
              result = operand1 - operand2;
            resultDisplay.textContent = result;
            operatorDisplay.textContent = "";
            topDisplay.textContent = "";
            break;

         case "/":
              result = operand1 / operand2;
            resultDisplay.textContent = result;
            operatorDisplay.textContent = "";
            topDisplay.textContent = "";
            break;

         case "*":
              result = operand1 * operand2;
            resultDisplay.textContent = result;
            operatorDisplay.textContent = "";
            topDisplay.textContent = "";
            break;

        default:
            break;
       }
    }
  });
});
