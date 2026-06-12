// Welcome Message

window.addEventListener("load", () => {

    const greeting = document.getElementById("greeting");

    if (greeting) {

        const hour = new Date().getHours();

        if (hour < 12) {
            greeting.textContent = "🌞 Good Morning!";
        }
        else if (hour < 18) {
            greeting.textContent = "☀️ Good Afternoon!";
        }
        else {
            greeting.textContent = "🌙 Good Evening!";
        }

    }

});

// Dark Mode

const toggleBtn = document.getElementById("theme-toggle");

if (toggleBtn) {

    toggleBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            toggleBtn.textContent = "☀️ Light Mode";
        }
        else {
            toggleBtn.textContent = "🌙 Dark Mode";
        }

    });

}

// Contact Form Validation

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        const formMessage =
            document.getElementById("form-message");

        if (name.value.trim() === "") {

            formMessage.innerHTML =
                "❌ Please enter your full name.";

            formMessage.className =
                "error-message";

            return;
        }

        if (email.value.trim() === "") {

            formMessage.innerHTML =
                "❌ Please enter your email address.";

            formMessage.className =
                "error-message";

            return;
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value)) {

            formMessage.innerHTML =
                "❌ Please enter a valid email address.";

            formMessage.className =
                "error-message";

            return;
        }

        if (message.value.trim() === "") {

            formMessage.innerHTML =
                "❌ Please enter your message.";

            formMessage.className =
                "error-message";

            return;
        }

        formMessage.innerHTML =
            "✅ Thank you! Your message has been submitted successfully. I will get back to you soon.";

        formMessage.className =
            "success-message";

        form.reset();

    });

}