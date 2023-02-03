const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById(".liters");
const precentage = document.getElementById(".percentage");
const remained = document.getElementById(".remained");

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => {
    highlightCups(idx);
  });
});

function highlightCups(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains["full"]
  ) {
    idx--;
  }
  smallCups.forEach((cup, index) => {
    if (index <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    precentage.style.visibility = "hidden";
    precentage.style.height = 0;
  } else {
    precentage.style.visibility = "visible";
    precentage.style.height = `${(totalCups / fullCups) * 330}px`;
  }
}
