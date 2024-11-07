const navs = document.querySelectorAll(".nav-list li");
const cube = document.querySelector(".box");
const sections = document.querySelectorAll(".section");

const resumelists = document.querySelectorAll(".resume-list");
const resumeBoxs = document.querySelectorAll(".resume-box");

const portfoliolist = document.querySelectorAll(".portfolio-list");
const portfolioBox = document.querySelectorAll(".portfolio-box");

navs.forEach((nav, idx) => {
  nav.addEventListener("click", () => {
    document.querySelector(".nav-list li.active").classList.remove("active");
    nav.classList.add("active");
    cube.style.transform = `rotateY(${idx * -90}deg)`;
    document.querySelector(".section.active").classList.remove("active");
    sections[idx].classList.add("active");
    const arry = Array.from(sections);
    const arrSec = arry.slice(1, -1);
    arrSec.forEach(arrsSec => {
        if(arrsSec.classList.contains('active')){
    sections[4].classList.add('active-contact')
        }
    });
    if(sections[0].classList.contains('active')){
   sections[4].classList.remove('active-contact')
    }
  });
});

resumelists.forEach((list, idx) => {
  list.addEventListener("click", () => {
    document.querySelector(".resume-list.active").classList.remove("active");
    list.classList.add("active");

    document.querySelector(".resume-box.active").classList.remove("active");
    resumeBoxs[idx].classList.add("active");
  });
});
portfoliolist.forEach((list, idx) => {
  list.addEventListener("click", () => {
    document.querySelector(".portfolio-list.active").classList.remove("active");
    list.classList.add("active");

    document.querySelector(".portfolio-box.active").classList.remove("active");
    portfolioBox[idx].classList.add("active");
  });
});
