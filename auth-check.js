// auth-check.js
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("profileBtn");
  if (!btn) return; // যদি index এ না থাকে

  const currentEmail = localStorage.getItem("currentUser"); // logged in user's email

  if (currentEmail) {
    // Profile view
    btn.innerHTML = `<i class="fa-solid fa-user"></i><span>Profile</span>`;
    btn.onclick = () => {
      // Profile পেজে নিয়ে যাবে
      window.location.href = "User/profile.html";
    };
  } else {
    // Show login
    btn.innerHTML = `<i class="fa-solid fa-right-to-bracket"></i><span>Login</span>`;
    btn.onclick = () => {
      window.location.href = "User/login.html";
    };
  }
});