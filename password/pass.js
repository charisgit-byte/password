const passwordBox= document.
getElementById("password"); 

const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const numbercase = "0123456789"
const symbolscase = "@!#$%^&*()=+-_/<>"
/*
const firstname = 
document.querySelector("#firstname").value.trim();

const lastname = 
document.querySelector("#lasyname").value.trim();

const email = 
document.querySelector("#email").value.trim();

const form = document.getElementById("#myform");


form.addEventListener("submit",function(event){
  event.preventDefault();

  messages.push('Form Submitted Successfully') 
})

if (firstname ==="" || lastname ===""|| email ===""){
  messages.push('Please fill in all fields.')
  return;
}
if (!email.includes("@")){
  messages.push('Enter a valid email');
  return;
}
  */

const allchars = uppercase + numbercase +lowercase + symbolscase

function togglePassword(){
  const password = 
  document.getElementById("password");

  if (password.type === "password"){
  password.type = "text";
}else{
  password.type = "password";
}
};


function createPassword(){
  let  password = ""
  password += uppercase[Math.floor(Math.random()*uppercase.length)]
  password += lowercase[Math.floor(Math.random()*lowercase.length)]
  password += numbercase[Math.floor(Math.random()*numbercase.length)]
  password += symbolscase[Math.floor(Math.random()*symbolscase.length)]

  while(length > password.length){

    password += allchars[Math.floor(Math.random()*allchars.length)]
  }

  passwordBox.value = password;

  passwordBox.value = password;

  navigator.clipboard
  .writeText(passwordBox.value);
}

