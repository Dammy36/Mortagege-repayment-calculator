function buttonClick() {
  let borderA = document.getElementById("border-A");
  console.log(borderA);
  let borderB = document.getElementById("border-B");

  if (borderA.style.display !== "none") {
    borderA.style.display = "none";
    borderB.style.display = "block";
  } else {
    borderA.style.display = "block";
    borderB.style.display = "none";
  }
}

const projectInput = document.querySelector(".project-input");
const amountButton = document.querySelector(".Amount-button");

projectInput.addEventListener("click", function () {
  if (amountButton.style.backgroundColor === "var(--secondry-color)") {
    amountButton.style.backgroundColor = "";
  } else {
    amountButton.style.backgroundColor = "var(--secondry-color)";
  }
});
