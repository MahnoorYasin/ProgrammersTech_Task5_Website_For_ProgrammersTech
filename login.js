document.addEventListener("DOMContentLoaded", function () {
    console.log('DOM fully loaded and parsed');

    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the default form submission

            const formData = new FormData(loginForm);

            fetch("login.php", {
                method: "POST",
                body: formData,
            })
                .then((response) => response.text())
                .then((data) => {
                    if (data.includes("Login successful")) {
                        localStorage.setItem("isLoggedIn", "true"); // Ensure value is a string
                        window.location.href = "home.html"; // Redirect to home
                    } else {
                        loginMessage.textContent = data; // Display error message
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                    loginMessage.textContent = "An error occurred. Please try again.";
                });
        });
    }
});
