function validateForm() {
        var name = document.forms["myForm"]["name"].value;
        var dob = document.forms["myForm"]["dob"].value;
        var address = document.forms["myForm"]["address"].value;
        var pincode = document.forms["myForm"]["pincode"].value;
        var branch = document.forms["myForm"]["branch"].value;
        var year = document.forms["myForm"]["year"].value;
    }
    //var x = localStorage.getItem('Userid');
    document.getElementById("header").innerHTML=localStorage.getItem('Userid');
    //console.log(x);
//document.getElementById("header").innerHTML=localStorage.getItem(Userid);
    