/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
var isBackToTopRendered = false;

var alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

/* --------------------------------------- */
/* ----- Reveal on Scroll ----- */
/* --------------------------------------- */

function reveal() {
  var reveals = document.querySelectorAll(".reveal"); 
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

/* --------------------------------------- */
/* ----- Progress Bars  ----- */
/* --------------------------------------- */

function progress(idName) {
  var temp;
  switch(idName) {
    case 1 : {
      temp = 70;
      break;
    }
    case 2 : {
      temp = 50;
      break;
    }
    case 3 : {
      temp = 60;
      break;
    }
    case 4 : {
      temp = 20;
      break;
    }
    case 5 : {
      temp = 40;
      break;
    }
    default : {
      temp = 30;
      break;
    }
  }
  var bars = document.getElementById(idName);
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= temp) {
      clearInterval(id);
    } else {
      width++;
      bars.style.width = width + "%";
    }
  }
}

function moveProgressBars() {
  var percent = document.querySelectorAll('.percent');
  for(var i = 0; i < percent.length; i++) {
    percent[i].style.display = "inline";
  }
  for (var i = 1; i <= 6; i++) {
    progress(i);
  }
}
