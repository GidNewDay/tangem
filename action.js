var slideIndex = 1;
document.getElementById("next").addEventListener(
  "click",
  function () {
    var slides = document.getElementsByClassName("slide");
    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    if (slideIndex < 1) {
      slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  },
  false
);

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 110) {
    document.querySelector("#card").classList.add("b-show");
  }
});

let classes = [];
document.querySelector("#card .close").onclick = function () {
  document.querySelector("#card").classList.add("display-none");
  classes[0] = "display-none";
  localStorage.setItem("classes", JSON.stringify(classes));
  console.log(localStorage)
};

if (localStorage.getItem("classes") !== null) {
  classes = JSON.parse(localStorage.getItem("classes"));
  classes.forEach((e) => {
    document.querySelector("#card").classList.add(e);
  });
}

for (var a in localStorage) {
  if (!localStorage.hasOwnProperty(a)) continue;
  console.log(a, " = ", localStorage[a]);
}

// localStorage.removeItem('classes')