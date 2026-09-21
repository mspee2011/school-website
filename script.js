
// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// CLOSE MENU AFTER CLICKING A LINK

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");

    });

});


// CONTACT FORM VALIDATION

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
if (contactForm){

contactForm.addEventListener("submit", function(event) {



    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (name.length<2) {
        event.preventDefault();
        alert("Please enter your full name.");
        return;

    }

    if (!emailPattern.test(email)) {
        event.preventDefault();
alert( "Please enter a valid email address.");

        return;

    }


    if (phone.length<7) {
        event.preventDefault();
alert( "Please enter your phone number.");

        return;

    }


    if (message.length < 10) {
        event.preventDefault();
alert("Please enter a message of at least 10 characters.");

        return;

    }


    formMessage.textContent =
        "Thank you! Your enquiry has been received.";

    contactForm.reset();

})};

// ===== Image slider =====
(function () {
  const slides = document.querySelector('.slides');
  const dotsBox = document.querySelector('.dots');
  if (!slides || !dotsBox) return; // stops errors on pages without a slider

  const total = slides.children.length;
  let index = 0;

  for (let i = 0; i < total; i++) {
    const d = document.createElement('span');
    d.className = 'dot';
    d.onclick = () => showSlide(i);
    dotsBox.appendChild(d);
  }

  function showSlide(i) {
    index = (i + total) % total;
    slides.style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll('.dot').forEach((d, n) => d.classList.toggle('active', n === index));
  }

  function moveSlide(step) {
    showSlide(index + step);
  }

  showSlide(0);
  setInterval(() => moveSlide(1), 4000);

  document.getElementById('prevBtn').onclick = () => moveSlide(-1);
  document.getElementById('nextBtn').onclick = () => moveSlide(1);
})();

