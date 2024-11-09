function checkData() {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var user = localStorage.getItem("userDetails");
  var data = JSON.parse(user);
  console.log(data);
  var element = document.getElementById("loginResult");

  if (data && data.email === email && data.password === password) {
    document.location.href = "/HTML/index.html";
  } else if (data.email === email && data.password != password) {
    element.innerHTML = "Incorrect Password";
  } else {
    element.innerHTML = "Invalid Credentails";
  }
}
