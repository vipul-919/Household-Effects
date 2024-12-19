//
const menuBtn = document.getElementById("menu-btn");
const navLink = document.getElementById("nav_link");
const menuBtnIcon = menuBtn.querySelector("i"); // Fix for selecting the icon inside the button

menuBtn.addEventListener("click", (e) => {
  // Use "click" as the event type
  navLink.classList.toggle("open"); // Fix capitalization of classList

  const isOpen = navLink.classList.contains("open"); // Fix capitalization of classList
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLink.addEventListener("click", (e) => {
  navLink.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const navSearch = document.getElementById("search-bar"); // Fix missing "document."
navSearch.addEventListener("click", (e) => {
  // Use "click" as the event type
  navSearch.classList.toggle("open");
});

const scrollRevealOpction ={
  distance: "50px",
  origin: "bottom",
  duration:1000,
};
ScrollReveal().reveal( ".header__image img",{
  ...scrollRevealOpction,
  origin:"right",
});
ScrollReveal().reveal(".header__content div",{
  ...scrollRevealOpction,
  duration:1000,
  delay:500,
});
ScrollReveal().reveal(".header__content h1",{
  ...scrollRevealOpction,
  delay:1000,
});
ScrollReveal().reveal(".header__content p",{
  ...scrollRevealOpction,
  delay:1500,
});
ScrollReveal().reveal(".deal_card",{
  ...scrollRevealOpction,
  interval:500,
});
ScrollReveal().reveal(".about_contain img",{
  ...scrollRevealOpction,
  origin:"right",
});
ScrollReveal().reveal(".card_main .card",{
  duration:1000,
  interval:500,
  delay:500,
});
