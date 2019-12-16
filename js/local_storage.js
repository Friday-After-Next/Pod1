(function() {
    "use strict";

    // Create test username and password;
    window.localStorage.setItem("username", "admin");
    window.localStorage.setItem("password", "password");

    const adminAccount = {
        username: "admin",
        password: "password"
    };
    window.localStorage.setItem("admin", JSON.stringify(adminAccount));




})();