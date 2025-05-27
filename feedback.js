

document.getElementById("address").addEventListener("input", function() {
    const remaining = 200 - this.value.length;
    document.getElementById("addressCounter").textContent = "Remaining characters: " + remaining;
});

const form = document.getElementById("feedbackForm");
const yesOption = document.getElementById("yes");
const noOption = document.getElementById("no");
const commentBox = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission by default

    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const comment = commentBox.value.trim();

    // Check email validation
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check phone validation (must be exactly 10 digits)
    if (!validatePhone(phone)) {
        alert("Please enter a valid phone number.");
        return;
    }

    // Enforce comment requirement only if "No" is selected
    if (noOption.checked && comment === "") {
        alert("Please add your comment for improvement since you selected 'No'.");
        commentBox.focus();
        return;
    }

    // If all validations pass, display confirmation message
    alert("Thank you for submitting your feedback!");
});

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

function validatePhone(phone) {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
}
