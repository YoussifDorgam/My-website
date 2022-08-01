import "./scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "jquery/dist/jquery.min";
import "popper.js/dist/popper.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();

window.onscroll = function () {
  if (window.scrollY >= 690) {
    $(".navbar").css({
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "58px",
      zIndex: "1000",
    });
  } else if (window.scrollY < 690) {
    let navBar = document.querySelector(".navbar");
    navBar.style.setProperty("position", "absolute", "important");
    navBar.style.setProperty("bottom", "0", "important");
    navBar.style.setProperty("width", "100%", "important");
    navBar.style.setProperty("height", "58px", "important");
    navBar.style.setProperty("top", "", "important");
  }
};

const myTags = [
  "Flutter",
  "Dart",
  "OOP",
  "API Integration",
  "Bloc State Manage",
  "Clean Code",
  "SQflite Database",
  "Postman",
  "GitHup",
  "Firebase",
];

var tagCloud = TagCloud(".content", myTags, {
  // radius in px
  radius: 250,

  // animation speed
  // slow, normal, fast
  maxSpeed: "fast",
  initSpeed: "fast",

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,

  // interact with cursor move on mouse out
  keep: true,
});

//To change the color of text randomly
// var colors = ["#34A853", "#FBBC05", "#4285F4", "#7FBC00", "FFBA01", "01A6F0"];
// var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector(".content").style.color = "#e31b6d";

let navbarLinks = Array.from(
  document.querySelectorAll(".navbar-nav .nav-item")
);

navbarLinks.forEach(function (el) {
  el.addEventListener("click", () => {
    navbarTogglerBtn.click();
  });
});

$("#to-top-btn").click(function () {
  window.location.href = "#";
});
let year = new Date().getFullYear();
$(".copy-right").find("span").html(`©${year}`);
 