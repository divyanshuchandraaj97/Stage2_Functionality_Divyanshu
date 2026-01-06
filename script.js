/* ================== CAROUSEL SCRIPT ================== */
let slideIndex = 0;
let slides = document.getElementsByClassName("carousel-slide");
let timer;

function showSlides() {
  if (slides.length === 0) return; // safety check

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  timer = setTimeout(showSlides, 3000); // auto change every 3 sec
}

function changeSlide(n) {
  if (slides.length === 0) return; // safety check

  clearTimeout(timer);
  slideIndex += n;

  if (slideIndex > slides.length) slideIndex = 1;
  if (slideIndex < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
  timer = setTimeout(showSlides, 3000); // restart timer
}

// Initialize carousel safely
if (slides.length > 0) {
  showSlides();
}



/* ================== CONTACT FORM ================== */
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (!form) return; // safety check

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || mobile === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }

    if (mobile.length !== 10 || isNaN(mobile)) {
      alert("Mobile number must be exactly 10 digits.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Form submitted successfully!");
    form.reset();
  });
});
/* ================== THEME TOGGLE (GLOBAL) ================== */
const themeToggle = document.getElementById("themeToggle");

// Apply saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save theme preference
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}
