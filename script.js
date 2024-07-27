document.addEventListener("DOMContentLoaded", function () {
    console.log('DOM fully loaded and parsed');

    updateNavigation();

    const logoutLink = document.getElementById("logout-link");
    if (logoutLink) {
        logoutLink.addEventListener("click", function (event) {
            event.preventDefault();
            localStorage.removeItem("isLoggedIn"); // Clear login state
            window.location.href = "login.html"; // Redirect to login page
        });
    }
});

function updateNavigation() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    console.log('User is logged in:', isLoggedIn);

    const navLinks = {
        homeLoggedOut: document.getElementById('home-link-logged-out'),
        login: document.getElementById('login-link'),
        signup: document.getElementById('signup-link'),
        home: document.getElementById('home-link'),
        about: document.getElementById('about-link'),
        menu: document.getElementById('menu-link'),
        gallery: document.getElementById('gallery-link'),
        logout: document.getElementById('logout-link'),
        contact: document.getElementById('contact-link'),
        test: document.getElementById('test-link')
    };

    if (isLoggedIn) {
        console.log('Updating navigation for logged in user');
        navLinks.homeLoggedOut.classList.add('hidden');
        navLinks.login.classList.add('hidden');
        navLinks.signup.classList.add('hidden');
        navLinks.home.classList.remove('hidden');
        navLinks.about.classList.remove('hidden');
        navLinks.menu.classList.remove('hidden');
        navLinks.gallery.classList.remove('hidden');
        navLinks.test.classList.remove('hidden');
        navLinks.logout.classList.remove('hidden');
        navLinks.contact.classList.remove('hidden');
    } else {
        console.log('Updating navigation for logged out user');
        navLinks.homeLoggedOut.classList.remove('hidden');
        navLinks.login.classList.remove('hidden');
        navLinks.signup.classList.remove('hidden');
        navLinks.home.classList.add('hidden');
        navLinks.about.classList.add('hidden');
        navLinks.menu.classList.add('hidden');
        navLinks.gallery.classList.add('hidden');
        navLinks.test.classList.add('hidden');
        navLinks.logout.classList.add('hidden');
        navLinks.contact.classList.add('hidden');
    }
}
