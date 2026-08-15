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

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();


    if (name === "") {

        formMessage.textContent = "Please enter your full name.";
        return;

    }


    if (email === "") {

        formMessage.textContent = "Please enter your email address.";
        return;

    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        formMessage.textContent =
            "Please enter a valid email address.";

        return;

    }


    if (phone === "") {

        formMessage.textContent =
            "Please enter your phone number.";

        return;

    }


    if (message.length < 10) {

        formMessage.textContent =
            "Please enter a message of at least 10 characters.";

        return;

    }


    formMessage.textContent =
        "Thank you! Your enquiry has been received.";

    contactForm.reset();

});
