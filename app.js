const menuBtn = document.querySelector(".navbar__menu");
console.log(menuBtn)
const menuLinks = document.querySelector(".links");
console.log(menuLinks)
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuLinks.classList.toggle("show");
 
});
