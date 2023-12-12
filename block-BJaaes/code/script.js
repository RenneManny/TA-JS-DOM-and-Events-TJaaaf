let form = document.querySelector("form");

// checking wheather it contains number or not
function isContainNumber(str) {
  return str.split("").some(function (e) {
    return !isNaN(e);
  });
}
// check for @ sign
function checkSign(str) {
    return str.includes("@");
}

function formHandle(event) {
  event.preventDefault();
  let userinfo = {};
  // validation for username
  userinfo.username = event.target.elements.username;
  username = userinfo.username;
  // console.log(username);
  let errorMsg = "";
  if (userinfo.username.value.length < 4) {
    errorMsg = "Value cannot be less than 4 characters";
    username.classList.add("error");
  } else {
    errorMsg = "";
    username.classList.add("success");
    username.classList.remove("error");
  }
  userinfo.username.nextElementSibling.innerText = errorMsg;
  // validation for name
  errorMsg = "";
  userinfo.uname = event.target.elements.name;
  uname = userinfo.uname;

  if (uname.value === "") {
    errorMsg = "Name cannot be empty";
    uname.classList.remove("success");
    uname.classList.add("error");
  } else if (isContainNumber(uname.value)) {
    errorMsg = "Name cannnot contain numbers!!";
    uname.classList.remove("success");
    uname.classList.add("error");
  } else {
    errorMsg = "";
    uname.classList.add("success");
    uname.classList.remove("error");
  }

  uname.nextElementSibling.innerText = errorMsg;




//   validating email
errorMsg=""
userinfo.email=event.target.elements.email;
email=userinfo.email;
if (checkSign(userinfo.email.value) !== true || userinfo.email.value.length < 6) {
    errorMsg="Kindly enter a valid email!"
    email.classList.remove("success");
    email.classList.add("error");
}
else{
    errorMsg="";
    email.classList.add("success");
    email.classList.remove("error");
}
email.nextElementSibling.innerText = errorMsg;

// checking phone number


    
errorMsg="";
userinfo.phoneNumber=event.target.elements.number;
phoneNumber=userinfo.phoneNumber;
if(userinfo.phoneNumber.value.length<7 ){
errorMsg="Invalid phone number";
phoneNumber.classList.remove("success");
phoneNumber.classList.add("error");
phoneNumber.nextElementSibling.innerText = errorMsg;
}
else if (/[a-zA-Z]/.test(phoneNumber.value)) {
    errorMsg = "Number cannot contain alphabets";
    phoneNumber.classList.remove("success");
    phoneNumber.classList.add("error");
    phoneNumber.nextElementSibling.innerText = errorMsg;
} else {
    errorMsg = "";
    phoneNumber.classList.remove("error");
    phoneNumber.classList.add("success");
    phoneNumber.nextElementSibling.innerText = errorMsg;
}

// validation of password field

errorMsg="";
userinfo.psswd=event.target.elements.password;
userpsswd=userinfo.psswd;
userinfo.psswd2=event.target.elements.conpassword;
confirmPasswd=userinfo.psswd2;

if(userinfo.psswd.value!==userinfo.psswd2.value){
    errorMsg="Passwords are not same";
    confirmPasswd.nextElementSibling.innerText = errorMsg;
    confirmPasswd.classList.remove("success");
    confirmPasswd.classList.add("error");
    
}

else{
    errorMsg=""
    confirmPasswd.classList.remove("error");
    confirmPasswd.classList.add("success");
    confirmPasswd.nextElementSibling.innerText = errorMsg;
    alert("User data added sucessfully");
}


}

form.addEventListener("submit", formHandle);
