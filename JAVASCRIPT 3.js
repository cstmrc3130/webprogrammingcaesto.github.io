// SCROLL BACK TO TOP WHEN RELOAD
window.onload = function() 
{
  document.location.hash = "#";
  window.scrollTo(0, 0);
}

// JAVASCRIPT FOR 3rd PROJECT JAVASCRIPT FOR 3rd PROJECT JAVASCRIPT FOR 3rd PROJECT JAVASCRIPT FOR 3rd PROJECT JAVASCRIPT FOR 3rd PROJECT
function OPERATION()
{
  let OPTION = document.getElementById("OPERATION_SYMBOL").value;
    switch (OPTION) 
    {
        case "+":
          document.getElementById("RESULT").value = parseInt(document.getElementById("NUMBER_1").value) + parseInt(document.getElementById("NUMBER_2").value);
            break;
        case "-":
          document.getElementById("RESULT").value = parseInt(document.getElementById("NUMBER_1").value) - parseInt(document.getElementById("NUMBER_2").value);
            break;
        case "x":
          document.getElementById("RESULT").value = parseInt(document.getElementById("NUMBER_1").value) * parseInt(document.getElementById("NUMBER_2").value);
            break;
        case "÷":
          document.getElementById("RESULT").value = parseFloat(document.getElementById("NUMBER_1").value) / parseFloat(document.getElementById("NUMBER_2").value);
            break;
        case "%":
          document.getElementById("RESULT").value = parseInt(document.getElementById("NUMBER_1").value) % parseInt(document.getElementById("NUMBER_2").value);
            break;
        case "^":
          document.getElementById("RESULT").value = parseInt(document.getElementById("NUMBER_1").value) ** parseInt(document.getElementById("NUMBER_2").value);
            break;
        default:
          
            break;
    }
  
}





