let isOn=false;
const showMenu=()=>{
    const div=document.querySelectorAll(".mobile-menu");
    
if(isOn){
div[0].style.display="none";
if (window.scrollY <10 ){
myNav.classList.remove("nav-colored");
myNav.classList.add("nav-transparent")
}
}else{
 div[0].style.display="flex"
myNav.classList.add("nav-colored");
myNav.classList.remove("nav-transparent")
}
isOn=!isOn;
}
document.getElementById("showMenu").addEventListener('click', showMenu);

const switchContent=id=>{
    const about=document.getElementById("aboutBtn");
    const aboutContent=document.querySelector(".show-about");
    const skills=document.getElementById("skillsBtn");
    const skillsContent=document.querySelector(".show-skills");
    const experience=document.getElementById("experience");
    if(id=="aboutBtn")
    {
        skillsContent.style.display="none";
        skills.className="";
        
        // experience.style.display="none";
        // experience.className="";

        aboutContent.style.display="block";
        about.className="active";
    }
    if(id=="skillsBtn")
    {
        aboutContent.style.display="none";
        about.className="";

        skillsContent.style.display="block";
        skills.className="active";
        
        // experience.style.display="none";
        // experience.className="";

    }
}

var myNav = document.getElementById('mynav');
window.onscroll = function () { 
    "use strict";
    if (window.scrollY > 10 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};




const form = document.getElementById("messageForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const userMsg = document.getElementById("message");

const errorMsg = document.getElementsByClassName("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validate(username, 0, "Name cannot be blank");
  validate(email, 1, "Please enter your email address");
  validate(userMsg, 2, "Message cannot be blank");
});
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let validate = (id, serial, message) => {
 
  if(id.id==="email")
  {
if(id.value.trim()==="")
{
  errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";
}
else if(!id.value.match(validRegex))
{
errorMsg[serial].innerHTML="Invalid Email Address";
id.style.border = "2px solid red";
}
else
{
  errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";
}
  }
  else
  {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";
  }
}
};

