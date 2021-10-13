let logo1 = document.getElementById("logo1");

let ftIcon01= document.getElementById("ftIcon01");
let ftIcon02 = document.getElementById("ftIcon02");
let ftIcon03 = document.getElementById("ftIcon03");

checkbox.addEventListener('change', () => {
    changeColor.classList.toggle("dark");
    changeColor.classList.toggle("navColor");
    changeColor.classList.toggle("changeFci");

    if (changeColor.classList.contains("dark")) {
        logo1.src = "images/index/LogoIcon/logo-w.png";
        ftIcon01.src="images/index/LogoIcon/w-fb.png"
        ftIcon02.src="images/index/LogoIcon/w-ig.png"
        ftIcon03.src="images/index/LogoIcon/w-twitter.png"

    } else {
        logo1.src = "images/index/LogoIcon/logo-b.png";
        ftIcon01.src="images/index/LogoIcon/b-fb.png"
        ftIcon02.src="images/index/LogoIcon/b-ig.png"
        ftIcon03.src="images/index/LogoIcon/b-twitter.png"
    }
})



