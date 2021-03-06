toggleNav = function() {  
  navLinks = document.querySelectorAll(".nav-link");
  document.getElementById("toggle-btn").classList.toggle("active");

  for(i = 0; i < navLinks.length; i++) {
    if(navLinks[i].style.display !== "block") {
      navLinks[i].style.display = "block";
      navLinks[i].classList.add("animate__animated", "animate__fadeIn");
    }
    else {
      navLinks[i].style.display = "none";
    }    
  }  
}

toggleBtn = document.getElementById('toggle-btn');
toggleBtn.addEventListener("click", toggleNav);

function resizeNav() {
    navHeight = document.querySelector(".nav-container").clientHeight;
    navLinks = document.querySelectorAll(".nav-container .nav-link");

  if (window.pageYOffset >= navHeight) {
    document.querySelector("#nav-logo img").style.maxWidth = "10vw";
  }
  else {
    document.querySelector("#nav-logo img").style.maxWidth = "15vw";
  }
}

window.addEventListener("scroll", resizeNav);