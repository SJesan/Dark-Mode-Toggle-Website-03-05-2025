const a = document.querySelector(".btn");
const p = document.querySelector(".pbtn");
const body = document.querySelector(".body");
const l1 = document.querySelectorAll(".line1");
const l2 = document.querySelector(".line2");
let flag = 0;

a.addEventListener("click", () => {
  if (flag == 0) {
    body.style.backgroundImage ="linear-gradient(to top, #09203f 0%, #537895 100%)";
    l1.forEach((element) => {
      element.style.color = "#a2a8d3";
    });
    l2.style.color = "#5e60769b";
    a.innerHTML = "Dark";
    a.style.backgroundColor = "#79c2d0";
    a.style.marginLeft = "60px";
    p.style.backgroundColor = "#a2a8d3";
    flag = 1;
  }

  else{
    body.style.backgroundImage ="linear-gradient(to top, #5f72bd 0%, #9b23ea 100%)";
    l1.forEach((element) => {
      element.style.color = "#27296d";
    });
    l2.style.color = "#2023688a";
    a.innerHTML = "Light";
    a.style.backgroundColor = "#ff5722";
    a.style.marginLeft = "8px";
    p.style.backgroundColor = "#27296d";
    flag = 0;
  }
});
