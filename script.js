function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const designations = ["Android Developer", "ML Engineer"] 
let i = 0;
let designation = document.getElementById("designation")

setInterval(()=>{
  i = (i+1)%2
  designation.innerText = designations[i];
  designation.classList.add("animate-fadein");
  setTimeout(()=>{
    designation.classList.remove("animate-fadein");
  },700);
},3000) 