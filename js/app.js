(function() {
    "use strict";
    // Enter code here inside of IIFE
    let loginPageEl = document.getElementById("login-page");
    let homePageEl = document.getElementById("home-page");
    let loginButtonEl = document.getElementById("login-button");

    // If login button is clicked & account login is valid, hide the login page and proceed to the main menu
    let loginButtonClicked = function() {
        loginButtonEl.addEventListener("click", function() {
            loginPageEl.style.display = "none";
            homePageEl.style.display = "block";
        });
    };


    loginButtonClicked();
})();