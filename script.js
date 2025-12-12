// navbar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

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

    // there must be some inputs before you press equal to
    if (btn.dataset.type !== "equal") {
      letButtonWork(btn);
    }

    function letButtonWork(btn) {
      //Is there and operator input?
      if (operatorDisplay.textContent == "") {
        removeTheInitialZeroBeforeAddingTheInput(btn);
      } else {
        resultDisplay.textContent += btn.textContent;
      }
    }

    function removeTheInitialZeroBeforeAddingTheInput(btn) {
      if (topDisplay.textContent === "0") {
        topDisplay.textContent = btn.textContent;
      } else {
        topDisplay.textContent += btn.textContent;
      }
    }

    if (btn.dataset.type == "equal") {
      if (operatorDisplay.textContent == "" && resultDisplay.textContent == "")
        return;

      const operator = operatorDisplay.textContent;
      const operand1 = parseFloat(topDisplay.textContent);
      const operand2 = parseFloat(resultDisplay.textContent);
      let result = 0;

      switch (operator) {
        case "+":
          result = operand1 + operand2;
          topDisplay.textContent = result;
          operatorDisplay.textContent = "";
          resultDisplay.textContent = "";
          break;

        case "-":
          result = operand1 - operand2;
          topDisplay.textContent = result;
          operatorDisplay.textContent = "";
          resultDisplay.textContent = "";
          break;

        case "/":
          if (operand2 == 0) {
            alert("cannot devide by 0");
            return;

          } else {
            result = operand1 / operand2;
            topDisplay.textContent = result;
            operatorDisplay.textContent = "";
            resultDisplay.textContent = "";
          }
          break;

        case "*":
          result = operand1 * operand2;
          topDisplay.textContent = result;
          operatorDisplay.textContent = "";
          resultDisplay.textContent = "";
          break;

        default:
          break;
      }
    }
  });
});
