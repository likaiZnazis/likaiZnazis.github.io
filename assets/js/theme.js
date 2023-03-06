const hamburger = document.getElementById(`hamburger`);
const navUL = document.getElementById(`nav-list`);
const burger = document.getElementById(`fas fa-bars`);
const closeBurger = document.getElementById(`fa-solid fa-x`);
const button = document.getElementById(`epic-button`);
const info = document.getElementById(`rekvezits`);

hamburger.addEventListener(`click`, () => {
  navUL.classList.toggle(`show`);
  if (navUL.classList.contains(`show`)) {
    burger.style.display = `none`;
    closeBurger.style.display = `block`;
    button.style.display = `none`;
  } else {
    closeBurger.style.display = `none`;
    burger.style.display = `block`;
    button.style.display = `block`;
  }
});

info.addEventListener(`click`, () => {
  alert(`Biedrība SparkleHeart:
  Reģistrācijas nr. 40008293119
  Banka: SWEDBANK A/S
  LV52HABA0551047652465
  `);
});
