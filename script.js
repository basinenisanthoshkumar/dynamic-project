
function fuu(){
  window.open("page1.html")
}
    function validateForm() {
        var name = document.forms["myForm"]["name"].value;
        var dob = document.forms["myForm"]["dob"].value;
        var address = document.forms["myForm"]["address"].value;
        var pincode = document.forms["myForm"]["pincode"].value;
        var branch = document.forms["myForm"]["branch"].value;
        var year = document.forms["myForm"]["year"].value;
    }
    document.querySelector('form').addEventListener('submit', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
      
      // Get the URL of the next page
      var nextPageUrl = 'https://web-platform-zb4tot.stackblitz.io/page1.html'; // Replace with the URL of your next page
      
      // Navigate to the next page
      window.location.href = nextPageUrl;
    });
    
    