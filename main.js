window.addEventListener('scroll', function() {
    var currScrollPos2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (currScrollPos2 > 100) {
      document.getElementById('hero').style.opacity = -currScrollPos2 / 120 + 2;
      document.getElementById('arrow-down').style.opacity = -currScrollPos2 / 120 + 2;
    }
  }
);

let toggleNavStatus = false;

let toggleNav = function () {
    let getButton = document.querySelector(".btn-toggle-nav");
    let getTopBar = document.querySelector(".nav-main");
    let getTopBarUl = document.querySelector(".nav-main ul");
    let getTopBarLinks = document.querySelectorAll(".nav-main a");


    if (toggleNavStatus == false) {
        getButton.classList.toggle("btn-close");
        getTopBarUl.style.visibility = "visible";
        getTopBar.style.height = "60vh";
        getTopBar.style.background = "rgba(255, 255, 255, .9)";

        let arrayLength = getTopBarLinks.length;
        for (let index = 0; index < arrayLength; index++) {
            getTopBarLinks[index].style.opacity = "1";

        }
        toggleNavStatus = true;
    } else if (toggleNavStatus === true) {

        getButton.classList.toggle("btn-close");
        getTopBarUl.style.visibility = "hidden";
        getTopBar.style.height = "60px";
        getTopBar.style.background = "rgba(255, 255, 255, 0)";

        let arrayLength = getTopBarLinks.length;
        for (let index = 0; index < arrayLength; index++) {
            getTopBarLinks[index].style.opacity = "0";

        }
        toggleNavStatus = false;

    }

}