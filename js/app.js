(function () {
    "use strict";
    // Enter code here inside of IIFE
    let loginPageEl = document.getElementById("login-page");
    let homePageEl = document.getElementById("home-page");
    let loginButtonEl = document.getElementById("login-button");
    let usernameInput = document.getElementById("username-id");
    let passwordInput = document.getElementById("password-id");

    // Create admin username and password;
    const adminAccount = {
        username: "admin",
        password: "password"
    };
    window.localStorage.setItem("admin", JSON.stringify(adminAccount));

    // If login button is clicked & account login is valid, hide the login page and proceed to the main menu
    let loginButtonClicked = function () {
        loginButtonEl.addEventListener("click", function () {
            // Check if the entered username is equal to a valid username/password
            let username = JSON.parse(window.localStorage.getItem(usernameInput.value));
            if (username.password === passwordInput.value) {
                alert("You entered valid account information");
                loginPageEl.style.display = "none";
                homePageEl.style.display = "block";
            } else {
                alert("Please enter a valid account login.");
                passwordInput.value = "";
            }
        });
    };

    loginButtonClicked();
})();