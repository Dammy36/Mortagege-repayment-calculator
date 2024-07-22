function buttonClick() {
  let secondInputbutton = document.querySelector(".second-input-button");

  let sectionParagraph = document.querySelector(".section__paragraph");

  secondInputbutton.addEventListener("click", function () {
    sectionParagraph.classList.toggle("open");
  });
}
buttonClick();
