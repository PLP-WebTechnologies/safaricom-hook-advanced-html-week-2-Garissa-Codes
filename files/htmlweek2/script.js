// Form Validation on Submit
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    const form = event.target;

    const password = form.password.value;
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        event.preventDefault(); // Prevent form submission
    }

    const terms = form.terms.checked;
    if (!terms) {
        alert("You must agree to the Terms and Conditions.");
        event.preventDefault(); // Prevent form submission
    }
});
