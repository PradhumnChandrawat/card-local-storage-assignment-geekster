if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const theme = document.body.classList.contains("dark-mode")
    ? "dark"
    : "light";
  localStorage.setItem("theme", theme);
}

document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var city = document.getElementById("city").value;

    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);
    localStorage.setItem("city", city);

    document.getElementById("userForm").style.opacity = "0";
    document.getElementById("userCard").style.display = "flex";

    updateCard();
  });

function updateCard() {
  document.getElementById("userData").innerHTML =
    "Name: " +
    localStorage.getItem("name") +
    "<br>Phone: " +
    localStorage.getItem("phone") +
    "<br>Email: " +
    localStorage.getItem("email") +
    "<br>City: " +
    localStorage.getItem("city");
}

function showForm() {
  document.getElementById("userForm").style.opacity = "1";
  document.getElementById("userCard").style.display = "none";
}

updateCard();
