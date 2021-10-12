let toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {

  if (window.pageYOffset > 50) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }

})
let goImg = document.querySelector("#goImg")

goImg.addEventListener("mouseover", () => {


  goImg.src = "images/index/LogoIcon/gotop02.png";

})

toTop.addEventListener("mouseout", () => {
  let goImg = document.querySelector("#goImg")

  goImg.src = "images/index/LogoIcon/gotop01.png";

})

