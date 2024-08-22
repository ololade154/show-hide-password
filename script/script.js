let eyeIcon = document.getElementById("eye-icon");
let passWord = document.getElementById("password");
eyeIcon.onclick = function () {
  if (passWord.type == "password") {
    passWord.type = "text";
    eyeIcon.src = "/images/eye-open.png";
  } else {
    passWord.type = "password";
    eyeIcon.src = "/images/eye-close.png";
  }
};
