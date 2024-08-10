function buttonClick() {
  let borderA = document.getElementById("border-A");
  let borderB = document.getElementById("border-B");

  // Check if borderA or border B is diesplay none or block
  if (borderA.style.display !== "none") {
    borderA.style.display = "none";
    borderB.style.display = "block";
  } else {
    borderA.style.display = "block";
    borderB.style.display = "none";
  }
}

function colorButton() {
  const projectInput = document.querySelector(".project-input");
  const amountButton = document.querySelector(".Amount-button");

  //check if button is clicked
  projectInput.addEventListener("click", function () {
    if (amountButton.style.backgroundColor === "var(--secondry-color)") {
      amountButton.style.backgroundColor = "";
    } else {
      amountButton.style.backgroundColor = "var(--secondry-color)";
    }
  });
}

colorButton();

function valiadateButton(button) {
  const input = button.previousElementSibling;
  clearError(input);

  if (!input.value) {
    showError(input, "This field is required");
    return false;
  }
  return true;
}

function inputElements() {
  buttonClick();

  //Get input Value
  const inputPounds = document.querySelector(".project-input").value;
  const inputMortage = document.querySelector(".input").value;
  const year = document.getElementById("years").value;

  //error message

  const inputPoundValid = document.getElementById("input-pound-button");
  const inputValid = document.getElementById("input-button");
  const yearsValid = document.getElementById("years-button");

  if (!inputPoundValid || !inputValid || !yearsValid) {
    return;
  }

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

function showError(input, message) {
  const formFiled = input.parentElement;
  formFiled.classList.add("error");

  const error = document.createElement("small");
  error.classList.add("error-message");
  error.innerText = message;
  formFiled.appendChild(error);

  input.style.boderColor = "red";
}

function clearError(input) {
  const formFiled = input.parentElement;
  formFiled.classList.remove("error");

  const errorMessage = formFiled.querySelector(".error-Message");
  if (errorMessage) {
    errorMessage.remove();
  }
  input.style.boderColor = "";
}
