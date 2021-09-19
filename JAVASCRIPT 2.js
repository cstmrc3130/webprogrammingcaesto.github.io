// SCROLL BACK TO TOP WHEN RELOAD
window.onload = function() 
{
  document.location.hash = "#";
  window.scrollTo(0, 0);
}


// PROCESS ARROW TRANSITION
var FORM_1 = document.getElementById("FORM_1");
var FORM_2 = document.getElementById("FORM_2");
var FORM_3 = document.getElementById("FORM_3");

var NEXT_1 = document.getElementById("NEXT_1");
var BACK_1 = document.getElementById("BACK_1");
var NEXT_2 = document.getElementById("NEXT_2");
var BACK_2 = document.getElementById("BACK_2");

var PROCESS_ARROW = document.getElementById("PROCESS_ARROW");

NEXT_1.onclick = function()
{
  FORM_1.style.left = "-450px";
  FORM_2.style.left = "40px";
  PROCESS_ARROW.style.width = "240px"
}

BACK_1.onclick = function()
{
  FORM_1.style.left = "40px";
  FORM_2.style.left = "450px";
  PROCESS_ARROW.style.width = "120px"
}

NEXT_2.onclick = function()
{
  FORM_2.style.left = "-450px";
  FORM_3.style.left = "40px";
  PROCESS_ARROW.style.width = "360px"
}

BACK_2.onclick = function()
{
  FORM_2.style.left = "40px";
  FORM_3.style.left = "450px";
  PROCESS_ARROW.style.width = "240px"
}


// TO DISABLE AND ENABLE BUTTON IN FORM 1
document.getElementById("FORM_1").addEventListener("keyup", () => 
{
  if (document.getElementById("USERNAME").value.length >= 1 && document.getElementById("PASSWORD").value.length >= 5)
  {
    document.getElementById("NEXT_1").style.display = "block"
    document.getElementById("NEXT_CHECK").style.display = "none"
  }
  else
  {
    document.getElementById("NEXT_1").style.display = "none"
    document.getElementById("NEXT_CHECK").style.display = "block"
  }
})


// FUNCTION TO GET ALL INPUT VALUE
function SUBMITALLFORMS()
{
  var USERNAME = document.getElementById("USERNAME").value;
  var PASSWORD = document.getElementById("PASSWORD").value;
  var COMMENTS = document.getElementById("COMMENTS").value;
  var GENDER = document.querySelector('input[name="GENDER"]:checked').value;
  var HOBBIES = document.getElementById("CHECKER").value;
  var PROFESSION = document.getElementById("PROFESSION").value;
  var INSTAGRAM = document.getElementById("INSTAGRAM").value;
  var FACEBOOK = document.getElementById("FACEBOOK").value;
  var WHATSAPP = document.getElementById("WHATSAPP").value;

  localStorage.setItem("VALUE_USERNAME",USERNAME);
  localStorage.setItem("VALUE_PASSWORD",PASSWORD);
  localStorage.setItem("VALUE_COMMENTS",COMMENTS);
  localStorage.setItem("VALUE_GENDER",GENDER);
  localStorage.setItem("VALUE_HOBBIES",HOBBIES);
  localStorage.setItem("VALUE_PROFESSION",PROFESSION);
  localStorage.setItem("VALUE_INSTAGRAM",INSTAGRAM);
  localStorage.setItem("VALUE_FACEBOOK",FACEBOOK);
  localStorage.setItem("VALUE_WHATSAPP",WHATSAPP);

return false;
}


function GETCHECKBOXVALUES()
{
  if(document.getElementById("SPORT").checked === true && document.getElementById("TRAVEL").checked === false && document.getElementById("BUSINESS").checked === false)
  {
    document.getElementById("CHECKER").value = "SPORT";
  }
  else if(document.getElementById("TRAVEL").checked === true && document.getElementById("SPORT").checked === false && document.getElementById("BUSINESS").checked === false)
  {
    document.getElementById("CHECKER").value = "TRAVEL";
  }
  else if(document.getElementById("BUSINESS").checked === true && document.getElementById("SPORT").checked === false && document.getElementById("TRAVEL").checked === false)
  {
    document.getElementById("CHECKER").value = "BUSINESS";
  }
  else if(document.getElementById("SPORT").checked === true && document.getElementById("TRAVEL").checked === true && document.getElementById("BUSINESS").checked === false)
  {
    document.getElementById("CHECKER").value = "SPORT AND TRAVEL";
  }
  else if(document.getElementById("SPORT").checked === true && document.getElementById("BUSINESS").checked === true && document.getElementById("TRAVEL").checked === false)
  {
    document.getElementById("CHECKER").value = "SPORT AND BUSINESS";
  }
  else if(document.getElementById("TRAVEL").checked === true && document.getElementById("BUSINESS").checked === true && document.getElementById("SPORT").checked === false)
  {
    document.getElementById("CHECKER").value = "TRAVEL AND BUSINESS";
  }
  else if(document.getElementById("SPORT").checked === true && document.getElementById("TRAVEL").checked === true && document.getElementById("BUSINESS").checked === true)
  {
    document.getElementById("CHECKER").value = "SPORT, TRAVEL, AND BUSINESS";
  }
  else
  {
    document.getElementById("CHECKER").value = "NONE OF THE LIST";
  }
}










