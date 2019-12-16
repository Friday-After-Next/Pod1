(function () {
    "use strict";
// Enter code here inside of IIFE
    let loginPageEl = document.getElementById("login-page");
    let homePageEl = document.getElementById("home-page");
    let loginButtonEl = document.getElementById("login-button");
    let createAccountEl = document.getElementById("create-account-link");
    let accountCreationModalEl = document.getElementById("account-creation-container");
    let accountCreationButtonEl = document.getElementById("account-creation-button");
    let accountCreationCancelButtonEl = document.getElementById("account-creation-cancel-button");

// Create admin username and password;
    let admin = {
        username: "admin",
        password: "password",
        balance: 0
    };
    window.localStorage.setItem("adminAccount", JSON.stringify(admin)); // place adminAccount in local storage
// Create blank user account
    let user = {
        username: "",
        password: "",
        balance: 0
    };

// If login button is clicked & account login is valid, hide the login page and proceed to the home page
    let loginButtonClicked = function () {
        loginButtonEl.addEventListener("click", function () {
            let usernameInput = document.getElementById("username-id").value;
            let passwordInput = document.getElementById("password-id").value;
            // Check if the entered username is equal to a valid username/password
            let adminAccount = JSON.parse(window.localStorage.getItem("adminAccount"));
            let userAccount = JSON.parse(window.localStorage.getItem("user")) || "";
            if ((adminAccount.password === passwordInput) && (adminAccount.username === usernameInput)) {
                alert("Logging in as Admin...");
                loginPageEl.style.display = "none";
                homePageEl.style.display = "block";
                accountCreationModalEl.style.display = "none";
            } else if ((userAccount.username === usernameInput) && (userAccount.password === passwordInput)) {
                alert(`Logging in as ${userAccount.username}...`);
                loginPageEl.style.display = "none";
                homePageEl.style.display = "block";
                accountCreationModalEl.style.display = "none";
            } else {
                alert("Please enter a valid account login.");
                passwordInput.value = "";
            }
        });
    };

// If create account link is clicked, display a modal that opens and allows user to create an account.
    let createAccountLinkClicked = function () {
        createAccountEl.addEventListener("click", function () {
            modalTrigger();
        });
    };

    let createAccountButtonClicked = function () {
        accountCreationButtonEl.addEventListener("click", function () {
            let nameInput = document.getElementById("account-creation-name").value;
            let emailInput = document.getElementById("account-creation-email").value;
            let usernameInput = document.getElementById("account-creation-username").value;
            let passwordInput = document.getElementById("account-creation-password").value;

            if (usernameInput === "admin") {
                alert("Cannot use admin as username.");
            } else if (nameInput && emailInput && usernameInput && passwordInput) {
                user.username = usernameInput;
                user.password = passwordInput;
                window.localStorage.setItem("user", JSON.stringify(user));
                modalTrigger();
                alert("Account created!");
            } else {
                alert("Please enter all fields");
            }
        });
    };


    let createAccountCancelButtonClicked = function () {
        accountCreationCancelButtonEl.addEventListener("click", function () {
            modalTrigger();
        });
    };

    function modalTrigger() {
        accountCreationModalEl.classList.toggle("close-modal");
        accountCreationModalEl.classList.toggle("open-modal");
    };

    loginButtonClicked();
    createAccountLinkClicked();
    createAccountButtonClicked();
    createAccountCancelButtonClicked();

})();