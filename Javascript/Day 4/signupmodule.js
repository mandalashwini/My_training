var signup_module = (function(){
    var fname,lname, address,mobilenumber,gender,dob,emailid, profession,  password, reenterpassword;
    console.log("in getData ");
        
        var fetchDetails = function (){
        
          
            fname=document.getElementById('firstname').value;
            lname=document.getElementById('lastname').value;
            address=document.getElementById('address').value;
            mobilenumber=document.getElementById('mobilenumber').value;
            gender=document.getElementById('gender').value;
            emailid=document.getElementById('emailid').value;
            profession=document.getElementById('profession').value;
            password=document.getElementById('password').value;
            ppass=document.getElementById('rpassword').value;
             alert(fname);
            validation();
            
            
        };
        
        return {
            fetchDetails: fetchDetails
         };
         
})();
