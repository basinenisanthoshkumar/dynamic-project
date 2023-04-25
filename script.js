function validateForm() {
        var firstname = document.forms["myForm"]["firstname"].value;
       localStorage.setItem("FirstName",firstname);

        var lastname = document.forms["myForm"]["lastname"].value;
       localStorage.setItem("LastName",firstname);

        var Email= document.forms["myForm"]["email"].value;
        localStorage.setItem("Email",Email);

        var Number = document.forms["myForm"]["number"].value;
        localStorage.setItem("Number",Number);

        var dob = document.forms["myForm"]["dob"].value;
        localStorage.setItem("Dob",dob);

        var address = document.forms["myForm"]["address"].value;
       localStorage.setItem("Address",address);

        var pincode = document.forms["myForm"]["pincode"].value;
        localStorage.setItem("Pincode",pincode);

        var branch = document.forms["myForm"]["branch"].value;
        localStorage.setItem("Branch",branch);

        var year = document.forms["myForm"]["year"].value;
        localStorage.setItem("Year",year);
    }
    
    document.getElementById("header").innerHTML=localStorage.getItem('Userid');
    
    function loginPage() {

          if (!localStorage.getItem('Userid')) {   
            window.location.href = 'index.html';      
          }       
    }
        window.onload = loginPage;

function logout() {
     localStorage.removeItem("Userid");
     localStorage.removeItem("Password");
     window.open("index.html");
      //window.location.href = "index.html";
}