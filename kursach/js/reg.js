function togglePassword() {
    var passwordInput = document.getElementById("password");
    var showPasswordCheckbox = document.getElementById("show-password");
    if (showPasswordCheckbox.checked) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }
function check()
{
    
    var name = document.getElementById("name");
    var name_txt = document.getElementById("name_txt");

    var surname = document.getElementById("surname");
    var surname_txt = document.getElementById("surname_txt");

    var login = document.getElementById("login");
    var login_txt = document.getElementById("login_txt");

    var password = document.getElementById("password");
    var password_txt = document.getElementById("password_txt");

    console.log("Значение пароля:", password.value);
    console.log("Элемент password-txt:", password_txt);
    

    if(login.value == "")
    {
        login_txt.textContent = "Введите логин";
        login_txt.style.color = "red";
    }
    else
    {
        login_txt.textContent = "Логин:";
        login_txt.style.color = "black";
    }
    if(password.value == "")
    {
        password_txt.textContent = "Введите пароль";
        password_txt.style.color = "red";
    }
    else
    {
        password_txt.textContent = "Пароль:";
        password_txt.style.color = "black";
    }
    if(name.value == "")
    {
        name_txt.textContent = "Введите имя";
        name_txt.style.color = "red";
    }
    else
    {
        name_txt.textContent = "имя:";
        name_txt.style.color = "black";
    }
    if(surname.value == "")
    {
        surname_txt.textContent = "Введите Фамилия";
        surname_txt.style.color = "red";
    }
    else
    {
        surname_txt.textContent = "Фамилия:";
        surname_txt.style.color = "black";
    }
    if(login.value != "" && password.value != "" && name.value != "" && surname.value != "")
    {
      alert("Вы успешно зарегистрированны!")
      location.href='/kursach/pages/main.html'
    }
  return false;
}