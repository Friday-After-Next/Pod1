(function () {
    "use strict";
// Enter code here inside of IIFE
    let loginPageEl = document.getElementById("login-page");
    let homePageEl = document.getElementById("home-page");
    let loginButtonEl = document.getElementById("login-button");
    let createAccountEl = document.getElementById("create-account-link");
    let accountCreationModalEl = document.getElementById("account-creation-container");
    let accountCreationButtonEl = document.getElementById("account-creation-button");
    let forgotAccountLinkEl = document.getElementById("forgot-account-link");
    let forgotAccountModalEl = document.getElementById("forgot-account-container");


    let forgotPasswordLinkEl = document.getElementById("forgot-password-link");
    let accountCreationCancelButtonEl = document.getElementById("account-creation-cancel-button");
    let forgotAccountCancelButtonEl = document.getElementById("forgot-account-cancel-button");
// Create admin username and password;
    let admin = {
        username: "admin",
        password: "password",
        balance: 0
    };
    window.localStorage.setItem("adminAccount", JSON.stringify(admin)); // place adminAccount in local storage
// Create blank user account
    let user = {
        name: "",
        username: "",
        password: "",
        email: "",
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
            createAccountModalTrigger();
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
                user.name = nameInput;
                user.email = emailInput;
                user.username = usernameInput;
                user.password = passwordInput;
                window.localStorage.setItem("user", JSON.stringify(user));
                createAccountModalTrigger();
                alert("Account created!");
            } else {
                alert("Please enter all fields");
            }
        });
    };

    let createAccountCancelButtonClicked = function () {
        accountCreationCancelButtonEl.addEventListener("click", function () {
            createAccountModalTrigger();
        });
    };

    let forgotAccountCancelButtonClicked = function() {
        forgotAccountCancelButtonEl.addEventListener("click", function() {
            forgotAccountModalTrigger();
        });
    }

    let forgotAccountLinkClicked = function() {
       forgotAccountLinkEl.addEventListener("click", function() {
           forgotAccountModalTrigger();
       });
    };

    function createAccountModalTrigger() {
        accountCreationModalEl.classList.toggle("close-modal-account-creation");
        accountCreationModalEl.classList.toggle("open-modal-account-creation");
    }

    function forgotAccountModalTrigger() {
        forgotAccountModalEl.classList.toggle("close-modal-forgot-account");
        forgotAccountModalEl.classList.toggle("open-modal-forgot-account");
    }

    loginButtonClicked();
    createAccountLinkClicked();
    createAccountButtonClicked();
    createAccountCancelButtonClicked();
    forgotAccountLinkClicked();
    forgotAccountCancelButtonClicked()
})();