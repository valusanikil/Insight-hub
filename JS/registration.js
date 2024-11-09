function saveData() {
  event.preventDefault();

  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var phone = document.getElementById("phone").value;

  var user = {
    fname: fname,
    lname: lname,
    email: email,
    password: password,
    phone: phone,
  };

  var json = JSON.stringify(user);
  localStorage.setItem("userDetails", json);
  console.log(localStorage.getItem("userDetails"));

  var element = document.getElementById("loginResult");
  element.innerHTML = "Registration Succesful!";
}
