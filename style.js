const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();   
    alert("Submitted form");
});