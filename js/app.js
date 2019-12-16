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
    const adminAccount = {
        username: "admin",
        password: "password",
        balance: 0
    };
    window.localStorage.setItem("admin", JSON.stringify(adminAccount));

    // Set total accounts
    window.localStorage.setItem("numOfAccounts", "1");
    // console.log(typeof window.localStorage.getItem("numOfAccounts"));
    window['var' + window.localStorage.getItem("numOfAccounts")] = "hung";


    // If login button is clicked & account login is valid, hide the login page and proceed to the home page
    let loginButtonClicked = function () {
        loginButtonEl.addEventListener("click", function () {
            let usernameInput = document.getElementById("username-id").value;
            let passwordInput = document.getElementById("password-id");
            // Check if the entered username is equal to a valid username/password
            let username = JSON.parse(window.localStorage.getItem(usernameInput)) || alert("Please enter a valid account login.");
            if (username.password === passwordInput.value) {
                alert("Logging in...");
                loginPageEl.style.display = "none";
                homePageEl.style.display = "block";
                accountCreationModalEl.style.display = "none";
                accountCreationModalEl.classList.add("close-modal");
            } else {
                alert("Please enter a valid account login.");
                passwordInput.value = "";
            }
        });
    };

    // If create account link is clicked, display a modal that opens and allows user to create an account.
    let createAccountLinkClicked = function () {
        createAccountEl.addEventListener("click", function () {
            accountCreationModalEl.classList.remove("close-modal");
            accountCreationModalEl.classList.add("open-modal");
        });
    };

    let createAccountButtonClicked = function () {
        accountCreationButtonEl.addEventListener("click", function () {
            let nameInput = document.getElementById("account-creation-name").value;
            let emailInput = document.getElementById("account-creation-email").value;
            let usernameInput = document.getElementById("account-creation-username").value;
            let passwordInput = document.getElementById("account-creation-password").value;

            if (nameInput && emailInput && usernameInput && passwordInput) {
                // Increment the number of accounts
                let numOfAccounts = parseInt(window.localStorage.getItem("numOfAccounts"));
                window['account' + numOfAccounts] = {
                    username: usernameInput,
                    password: passwordInput,
                    balance: 0
                };
                numOfAccounts++;
                window.localStorage.setItem("numOfAccounts", numOfAccounts.toString());

                alert("Account created!");
            } else {
                alert("Please enter all fields");
            }
        });
    };

    let createAccountCancelButtonClicked = function () {
        accountCreationCancelButtonEl.addEventListener("click", function () {
            accountCreationModalEl.classList.add("close-modal");
            accountCreationModalEl.classList.remove("open-modal");
        });
    };


    loginButtonClicked();
    createAccountLinkClicked();
    createAccountButtonClicked();
    createAccountCancelButtonClicked();
})();