// profile.js

function renderProfile(user) {
  const box = document.getElementById("profileBox");
  box.innerHTML = `
    <div style="display:flex;gap:14px;align-items:center;">
      <div style="width:96px;height:96px;border-radius:50%;overflow:hidden;border:1px solid #ddd;">
        <img src="${user.photo ? user.photo : '../assets/logo.png'}" style="width:100%;height:100%;object-fit:cover;">
      </div>
      <div>
        <h2 style="margin:0">${user.name}</h2>
        <p style="margin:4px 0 0;"><strong>Email:</strong> ${user.email}</p>
        <p style="margin:4px 0;"><strong>Phone:</strong> ${user.phone}</p>
        <p style="margin:4px 0;"><strong>Country:</strong> ${user.country}</p>
        <p style="margin:4px 0;"><strong>Gender:</strong> ${user.gender}</p>
      </div>
    </div>
  `;
}

function redirectToLogin() {
  window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const current = localStorage.getItem("currentUser");
  if (!current) {
    alert("You are not logged in. Please login first.");
    redirectToLogin();
    return;
  }

  const usersJSON = localStorage.getItem("users");
  const users = usersJSON ? JSON.parse(usersJSON) : [];
  const user = users.find(u => u.email === current);

  if (!user) {
    // no user found
    alert("User not found. Please login again.");
    localStorage.removeItem("currentUser");
    redirectToLogin();
    return;
  }

  renderProfile(user);

  document.getElementById("logoutBtn").addEventListener("click", function () {
    if (confirm("Logout now?")) {
      localStorage.removeItem("currentUser");
      // Optionally also redirect to home
      window.location.href = "../index.html";
    }
  });

  document.getElementById("editBtn").addEventListener("click", function () {
    // simple edit: allow change phone/country/name in a prompt (optional)
    const newName = prompt("Name:", user.name) || user.name;
    const newPhone = prompt("Phone:", user.phone) || user.phone;
    const newCountry = prompt("Country:", user.country) || user.country;

    // update user in storage
    const updatedUsers = users.map(u => {
      if (u.email === user.email) {
        return {...u, name: newName, phone: newPhone, country: newCountry};
      }
      return u;
    });
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    // re-render
    renderProfile({...user, name: newName, phone: newPhone, country: newCountry});
    alert("Profile updated.");
  });
});