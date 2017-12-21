var init_load=(function()
{
    function initial_load()
    {
        document.getElementById('div_signup').style.display="block";
        document.getElementById('div_signin').style.display="none";
        document.getElementById('show_data').style.display="none";
        document.getElementById('teacher_header').style.display="none";
        document.getElementById('student_header').style.display="none"; document.getElementById('div1').style.display="block";
        document.getElementById('profile').style.display="none";
        document.getElementById('div_edit').style.display="none";
        document.getElementById("fname_label").style.display="none"

        document.getElementById("lname_label").style.display="none"
         document.getElementById("fname_label").style.display="none"
        document.getElementById("address_label").style.display="none"
        document.getElementById("mbnumber_label").style.display="none"
        document.getElementById("emailid_label").style.display="none"
        document.getElementById("emailid_exist_label").style.display="none"
        document.getElementById("password_label").style.display="none"
        document.getElementById("rpassword_label").style.display="none"

        document.getElementById("fname_label1").style.display="none"
        document.getElementById("lname_label1").style.display="none"
        document.getElementById("address_label1").style.display="none"
        document.getElementById("mbnumber_label1").style.display="none"
        document.getElementById("emailid_label1").style.display="none"
      // document.getElementById("emailid_exist_label1").style.display="none"
        document.getElementById("password_label1").style.display="none"
        document.getElementById("rpassword_label1").style.display="none"




        
    }
    function signin()
    {
        document.getElementById('div_signup').style.display="none";
        document.getElementById('div_signin').style.display="block";
        document.getElementById('show_data').style.display="none";
        document.getElementById('profile').style.display="none";
        
    }
    
    function signup()
    {
        document.getElementById('div_signup').style.display="block";
        document.getElementById('div_signin').style.display="none";
        document.getElementById('show_data').style.display="none";
        document.getElementById('profile').style.display="none";
    }

     function edit()
    {
        document.getElementById('div_signup').style.display="none";
        document.getElementById('div_signin').style.display="none";
        document.getElementById('show_data').style.display="none";
        document.getElementById('profile').style.display="none";
        document.getElementById('div_edit').style.display="block";

        

       edit_profile.getdata1();
    }


    return{
        initial_load:initial_load,
        signin:signin,
        signup:signup,
        edit:edit

    }
})();

