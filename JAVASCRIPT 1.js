// JAVASCRIPT FOR 1st PROJECT JAVASCRIPT FOR 1st PROJECT JAVASCRIPT FOR 1st PROJECT JAVASCRIPT FOR 1st PROJECT JAVASCRIPT FOR 1st PROJECT
function ClickEventTaylor()
{
  if (SHOW_IMAGE_TAYLOR.style.display == "none")
  {
  document.getElementById("SHOW_TAYLOR").innerText = "HIDE IMAGE";
  document.getElementById("SHOW_IMAGE_TAYLOR").style.display = "block";
  }
  else
  {
    document.getElementById("SHOW_TAYLOR").innerText = "SHOW IMAGE";
    document.getElementById("SHOW_IMAGE_TAYLOR").style.display = "none";
  }
}

function ClickEventCort()
{
  if (SHOW_IMAGE_CORT.style.display == "none" )
  {
    sada
    document.getElementById("SHOW_IMAGE_CORT").style.display = "block";
    document.getElementById("SHOW_TEXT_CORT").innerText = "HIDE IMAGE";

  }
  else
  {
    document.getElementById("SHOW_TEXT_CORT").innerText = "SHOW IMAGE";
    document.getElementById("SHOW_IMAGE_CORT").style.display = "none";
  }
}

// SCROLL BACK TO TOP WHEN RELOAD
window.onload = function()
{
  document.location.hash = "#";
  window.scrollTo(0, 0);
}

// SHOW THE BUTTON WHEN USER SCROLL DOWN 20px FROM THE TOP OF THE DOCUMENT
var BUTTON_TOP = document.getElementById("BUTTON_TOP");
window.onscroll = function()
{
  scrollFunction()
};

function scrollFunction()
{
  if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750)
  {
  BUTTON_TOP.style.display = "block";
  }
  else
  {
  BUTTON_TOP.style.display = "none";
  }
}

// SCROLL TO THE TOP WHEN USER CLICKS THE BUTTON
function TOPFUNCTION()
{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// FUNCTION TO LOAD SMOOTH SCROLL IN THE SAME PAGE
function TAYLOR_SAMEPAGE()
{
  window.location.replace('#TAYLOR');
}

function CORT_SAMEPAGE()
{
  window.location.replace('#CORT');
}

function FOOTER_SAMEPAGE()
{
  window.location.replace('#FOOTER');
}
