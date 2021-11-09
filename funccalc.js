function clearScreen() {

    document.getElementById("result").value = "";
   }
   
   function display(value) {
   
    document.getElementById("result").value += value;
   }
   
   function calculate() {
   
       var aa = document.getElementById("result").value;
       var bb = eval(aa);
   
       document.getElementById("result").value = bb;
   }

   function RANDSANDU() {

      document.getElementById("result").value = Math.floor(Math.random() * 1000);
   }

   function SQRTSANDU() {
       
    if(document.getElementById("result").value < 0) {
        alert("can't sqrt a negative number");
    } else {
        document.getElementById("result").value = Math.sqrt(document.getElementById("result").value,2);
    }
    }

    function LOGSANDU() {
       
        if(document.getElementById("result").value <= 0) {
            alert("can't log a negative number or equals to 0 number");
        } else {
            document.getElementById("result").value = Math.log(document.getElementById("result").value);
        }
    }

    function BIGSANDU() {
       
        alert("SANDU SANDU SANDU SANDU SANDU");
        document.getElementById("result").value = "BIG SANDU";
    }

    function myFunction() {
        var checkBox = document.getElementById("sanducar1");
        var text = document.getElementById("kingsand");
        if (checkBox.checked == true){
          text.style.display = "block";
        } else {
          text.style.display = "none";
        }
      } 