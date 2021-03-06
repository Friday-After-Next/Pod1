(function () {
    "use strict";
// Enter code here inside of IIFE
    let bodyEl = document.querySelector("#custom-body");
    let loginPageEl = document.getElementById("login-page");
    let homePageEl = document.getElementById("home-page");
    let loginButtonEl = document.getElementById("login-button");
    let createAccountEl = document.getElementById("create-account-link");
    let accountCreationModalEl = document.getElementById("account-creation-container");
    let accountCreationButtonEl = document.getElementById("account-creation-button");
    let accountCreationCancelButtonEl = document.getElementById("account-creation-cancel-button");
    let forgotAccountLinkEl = document.getElementById("forgot-account-link");
    let forgotAccountModalEl = document.getElementById("forgot-account-container");
    let forgotAccountCancelButtonEl = document.getElementById("forgot-account-cancel-button");
    let forgotAccountFindButtonEl = document.getElementById("forgot-account-find-button");
    let forgotPasswordLinkEl = document.getElementById("forgot-password-link");
    let forgotPasswordModelEl = document.getElementById("forgot-password-container");
    let forgotPasswordFindButtonEl = document.getElementById("forgot-password-find-button");
    let forgotPasswordCancelButtonEl = document.getElementById("forgot-password-cancel-button");
    
// Create admin username and password;
    const admin = {
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
    user = JSON.parse(window.localStorage.getItem("user"));

// If login button is clicked & account login is valid, hide the login page and proceed to the home page
    function loginButtonClicked() {
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
    function createAccountLinkClicked() {
        createAccountEl.addEventListener("click", function () {
            createAccountModalTrigger();
        });
    };

    // Will open account creation modal
    function createAccountButtonClicked() {
        accountCreationButtonEl.addEventListener("click", function () {
            let nameInput = document.getElementById("account-creation-name").value;
            let emailInput = document.getElementById("account-creation-email").value;
            let usernameInput = document.getElementById("account-creation-username").value;
            let passwordInput = document.getElementById("account-creation-password").value;

            // Checks usernameInput for validity and creates account in local storage
            if (usernameInput === "admin") {
                alert("Cannot use admin as username.");
            } else if (nameInput && emailInput && usernameInput && passwordInput) {
                user.name = nameInput;
                user.email = emailInput;
                user.username = usernameInput;
                user.password = passwordInput;
                window.localStorage.setItem("user", JSON.stringify(user));
                createAccountModalTrigger();
                alert("Account created. Please log in!");
            } else {
                alert("Please enter all fields");
            }
        });
        window.addEventListener("click", function (e) {
            if (e.target === bodyEl) {
                accountCreationModalEl.classList.add("close-modal-account-creation");
                accountCreationModalEl.classList.remove("open-modal-account-creation");
            }
        });
    };

    // Will close the modal if cancel is clicked
    function createAccountCancelButtonClicked() {
        accountCreationCancelButtonEl.addEventListener("click", function () {
            createAccountModalTrigger();
        });
    };

    // Toggles the modal open and close views
    function createAccountModalTrigger() {
        accountCreationModalEl.classList.toggle("close-modal-account-creation");
        accountCreationModalEl.classList.toggle("open-modal-account-creation");
    }

    // Will open the modal when clicked
    let forgotAccountLinkClicked = function () {
        forgotAccountLinkEl.addEventListener("click", function () {
            forgotAccountModalTrigger();
        });
        window.addEventListener("click", function (e) {
            if (e.target === bodyEl) {
                forgotAccountModalEl.classList.add("close-modal-forgot-account");
                forgotAccountModalEl.classList.remove("open-modal-forgot-account");
            }
        });
    };

    let forgotAccountFindButtonClicked = function () {
        forgotAccountFindButtonEl.addEventListener("click", function () {
            let emailInput = document.getElementById("forgot-account-username").value;
            console.log(emailInput);
            if (emailInput === "") {
                alert("Please enter a valid email.");
            } else if (emailInput === user.email) {
                forgotAccountModalTrigger();
                alert("Your username: " + user.username);
            } else {
                alert("Incorrect email format or no user associated with email.")
            }
        });
    };

    // Will close the modal if cancel is clicked
    function forgotAccountCancelButtonClicked() {
        forgotAccountCancelButtonEl.addEventListener("click", function () {
            forgotAccountModalTrigger();
        });
    }

    // Toggles the modal open and close views
    function forgotAccountModalTrigger() {
        forgotAccountModalEl.classList.toggle("close-modal-forgot-account");
        forgotAccountModalEl.classList.toggle("open-modal-forgot-account");
    }

    let forgotPasswordLinkClicked = function () {
        forgotPasswordLinkEl.addEventListener("click", function () {
            forgotPasswordModalTrigger();
        })
        window.addEventListener("click", function (e) {
            if (e.target === bodyEl) {
                forgotPasswordModelEl.classList.add("close-modal-forgot-password");
                forgotPasswordModelEl.classList.remove("open-modal-forgot-password");
            }
        });
    };

    // checks if email is listed and returns that an email was sent to recover password.
    let forgotPasswordFindButtonClicked = function () {
        forgotPasswordFindButtonEl.addEventListener("click", function () {
            let emailInput = document.getElementById("forgot-password-username").value;
            if (emailInput === "") {
                alert("Please enter a valid email.");
            } else if (emailInput === user.email) {
                forgotPasswordModalTrigger();
                alert("An email has been sent to for you to recover your password.");
            } else {
                alert("Incorrect email format or no user associated with email.")
            }
        })
    }

    let forgotPasswordCancelButtonClicked = function () {
        forgotPasswordCancelButtonEl.addEventListener("click", function () {
            forgotPasswordModalTrigger();
        });
    };

    // Toggles the modal open and close views
    function forgotPasswordModalTrigger() {
        forgotPasswordModelEl.classList.toggle("close-modal-forgot-password");
        forgotPasswordModelEl.classList.toggle("open-modal-forgot-password");
    }

    loginButtonClicked();
    createAccountLinkClicked();
    createAccountButtonClicked();
    createAccountCancelButtonClicked();
    forgotAccountLinkClicked();
    forgotAccountFindButtonClicked();
    forgotAccountCancelButtonClicked();
    forgotPasswordLinkClicked();
    forgotPasswordFindButtonClicked();
    forgotPasswordCancelButtonClicked();
})();