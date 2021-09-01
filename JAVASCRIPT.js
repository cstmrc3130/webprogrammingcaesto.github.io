function clickEvent() {
    if (SHOW_IMAGE_CORT.style.display == "none" ) 
    {
      document.getElementById("SHOW_IMAGE_CORT").style.display = "block";
      document.getElementById("SHOW_CORT").innerText = "HIDE IMAGE";
           
    }
    else
    {
      document.getElementById("SHOW_CORT").innerText = "SHOW IMAGE";
      document.getElementById("SHOW_IMAGE_CORT").style.display = "none";
    }
}

function clickEvent2(){
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

// SCROLL BACK TO TOP WHEN RELOAD
window.onload = function() 
{
document.location.hash = "#";
window.scrollTo(0, 0);
}


// SCROLL BACK TO TOP WHEN BUTTON CLICKED
var mybutton = document.getElementById("BACK_TO_TOP");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// FUNCTION TO CLOSE CURRENT WINDOW 
function close_onclick(){
  if (confirm("Close Current Tab?")){
    window.close();
  }
}

// FUNCTION TO ENABLE WINDOW CLOSE
function taylor_samepage(){
  window.location.replace('#TAYLOR');
}

function cort_samepage(){
  window.location.replace('#CORT');
}

function footer_samepage(){
  window.location.replace('#FOOTER');
}

