function toggleBurgerMenu() {
  const nav = document.querySelector("nav");
  if (nav.className === "nav-bar") {
    nav.className += " responsive";
  } else {
    nav.className = "nav-bar";
  }
}