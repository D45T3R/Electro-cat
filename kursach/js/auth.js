function togglePassword() {
  var passwordInput = document.getElementById("password");
  var showPasswordCheckbox = document.getElementById("show-password");
  if (showPasswordCheckbox.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
const form = document.getElementById("forms");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;
    var login_txt = document.getElementById("login_txt");
    var password_txt = document.getElementById("password_txt");
    if (login == "") {
      login_txt.textContent = "Введите логин";
      login_txt.style.color = "red";
      return;
    }
    else {
      login_txt.textContent = "Логин:";
      login_txt.style.color = "black";
      
    }
    if (password == "") {
      password_txt.textContent = "Введите пароль";
      password_txt.style.color = "red";
      return;
    }
    else {
      password_txt.textContent = "Пароль:";
      password_txt.style.color = "black";
    }
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          const response = xhr.responseText;
          const [status, post] = response.split("|");
          if (status === "success") {
            alert(post)
              switch (post) {
                  case "1": // Administrator
                      window.location.href = "/kursach/pages/admin.html";
                      break;
                  case "2": // Operator
                      window.location.href = "/kursach/pages/operator.html";
                      break;
                  case "3": // Technician
                      window.location.href = "/kursach/pages/technician.html";
                      break;
                  case "user": // User
                      window.location.href = "/kursach/pages/main.html";
                      break;
                  default:
                      alert("ошибочка");
              }
          } else {
              alert("Неверный логин или пароль");
          }
      }
  };
});




