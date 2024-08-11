function buttonClick() {
  let borderA = document.getElementById("border-A");
  let borderB = document.getElementById("border-B");

  // Check if any input has an error message
  const hasError = document.querySelector("small.error-message") !== null;

  // If there is an error, do not display borderB
  if (hasError) {
    borderA.style.display = "block";
    borderB.style.display = "none";
  } else {
    // Toggle between borderA and borderB
    if (borderA.style.display !== "none") {
      borderA.style.display = "none";
      borderB.style.display = "block";
    } else {
      borderA.style.display = "block";
      borderB.style.display = "none";
    }
  }
}

//check if button is clicked
const projectInput = document.querySelector(".project-input");
const amountButton = document.querySelector(".Amount-button");

projectInput.addEventListener("click", function () {
  if (amountButton.style.backgroundColor === "var(--secondry-color)") {
    amountButton.style.backgroundColor = "";
  } else {
    amountButton.style.backgroundColor = "var(--secondry-color)";
  }
});

function calculateMortage() {
  buttonClick();

  //Get input Value
  const inputPounds = document.getElementById("principal").value;
  const inputMortage = document.getElementById("annualInterestRate").value;
  const year = document.getElementById("years").value;

  //Calculate monthly interest rate
  const monthlyInterestRate = inputPounds / 100 / 12;

  //calculte number of payments
  const numberOfPayment = year * 12;

  //Calculate the monthly payment using the formular
  const monthlyPayment =
    (inputMortage * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayment));

  //Calculate the total repayment//
  const totalPayment = monthlyPayment * numberOfPayment;

  //Dispay results
  document.getElementById("repayment").innerText = `£${monthlyPayment.toFixed(
    2
  )}`;
  document.getElementById("totalPayment").innerText = `£${totalPayment.toFixed(
    2
  )}`;
}

//Get eventlistner on the button when clicked
let secoundButtonClick = document.getElementById("second-button");
secoundButtonClick.addEventListener("click", calculateMortage);

function showError(input, message) {
  const error = document.createElement("small");
  error.innerText = message;
  error.classList.add("error-message");

  input.parentElement.appendChild(error);
  input.style.borderColor = "red";

  const button = input.parentElement.querySelector("button");
  if (button) {
    button.style.backgroundColor = "red";
    button.style.color = "white";
  }

  // Find the element below the input to adjust its margin
  const textBelow = document.querySelector(".text-below-error");
  if (textBelow) {
    textBelow.style.marginTop = "25px";
  }
}

//function to validate an input field
function valiadateButton(input) {
  clearError(input);

  if (input.value === "") {
    showError(input, "This field is required");
    return false;
  }
  return true;
}

// Function to clear any error messages
function clearError(input) {
  const errorMessage = input.parentElement.querySelector("small");
  if (errorMessage) {
    errorMessage.remove();
  }

  input.style.borderColor = "";

  // Reset the margin of the element below the input
  const textBelow = document.querySelector(".text-below-error");
  if (textBelow) {
    textBelow.style.marginTop = "10px";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("principal-button")
    .addEventListener("click", function () {
      validateInput(document.getElementById("principal"));
    });

  document
    .getElementById("annualinterest-button")
    .addEventListener("click", function () {
      validateInput(document.getElementById("annualInterestRate"));
    });

  document
    .getElementById("years-button")
    .addEventListener("click", function () {
      validateInput(document.getElementById("years"));
    });

  document
    .getElementById("second-button")
    .addEventListener("click", function () {
      // Validate all inputs before proceeding
      const isPrincipalValid = valiadateButton(
        document.getElementById("principal")
      );
      const isAnnualInterestRateValid = valiadateButton(
        document.getElementById("annualInterestRate")
      );
      const isYearsValid = valiadateButton(document.getElementById("years"));

      if (!isPrincipalValid || !isAnnualInterestRateValid || !isYearsValid) {
        return;
      }
    });
});
