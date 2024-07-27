document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const signupMessage = document.getElementById("signupMessage");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(signupForm);

        fetch("signup.php", {
            method: "POST",
            body: formData,
        })
        .then((response) => response.text())
        .then((data) => {
            if (data.trim() === "success") {
                // Redirect to login page if signup is successful
                window.location.href = "login.html";
            } else {
                // Display error message if signup failed
                signupMessage.textContent = data;
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            signupMessage.textContent = "An error occurred. Please try again.";
        });
    });
});
