function myFunction() {
    document.getElementById("kep").src = document.getElementById("cars").value;
    document.getElementById("kep").style.width = document.getElementById("width").value;
    document.getElementById("kep").style.height = document.getElementById("height").value;
}

function box1() {
    if(document.getElementById("box1").checked)
    {
        document.getElementById("kep").style.filter = "blur(5px)";
    }
    else {
        document.getElementById("kep").style.filter = "blur(0px)";
    }   
  }
  
function box2() {
    if(document.getElementById("box2").checked)
    {
        document.getElementById("kep").style.filter = "invert(100%)";
    }
    else {
        document.getElementById("kep").style.filter = "invert(0%)";
    }
  }