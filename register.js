document.getElementById("registerForm").addEventListener("submit", function(e){
    e.preventDefault();

    let user = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        country : document.getElementById("country").value,
        gender : document.getElementById("gender").value,
        password : document.getElementById("password").value
    };

    let cpass = document.getElementById("cpassword").value;

    // ========== Password Strong Rule ==========
    let pass = user.password;

    // Regex = 1st capital, 2nd small, 3rd number
    let strongPass = /^[A-Z][a-z][0-9].*/;

    if (!strongPass.test(pass)) {
        alert("Password format ভুল!\nExample: Admin123 \n(1st Capital, 2nd small, 3rd number)");
        return;
    }

    // Confirm Password check
    if(user.password !== cpass){
        alert("Password does not match!");
        return;
    }

    // Save user data
    localStorage.setItem("userData", JSON.stringify(user));

    alert("Registration Successful!");
    window.location.href = "login.html";
});