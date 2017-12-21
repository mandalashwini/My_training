var signup_module = (function(){
    var fname,lname, address,mobilenumber,gender,dob,emailid, profession,  password, reenterpassword;
    var emailvalid,success;
    var data;
  
        
        var fetchDetails = function (){
        
          
            fname=document.getElementById('firstname').value;
            lname=document.getElementById('lastname').value;
            address=document.getElementById('address').value;
            mobilenumber=document.getElementById('mobilenumber').value;
            gender=document.getElementById('gender').selectedIndex;
            emailid=document.getElementById('emailid').value;
            profession=document.getElementById('profession').value;
            password=document.getElementById('password').value;
            ppass=document.getElementById('rpassword').value;
           
           
            validation();
            if(success==true)
            {
                alert("successfully registered");
                data={fname:fname,lname:lname,address:address,mobilenumber:mobilenumber,gender:gender,emailid:emailid,profession:profession,password:password,reenterpassword:reenterpassword};
                storage_module.setdata(data);
                //data_array.push(data);
                document.getElementById('div_signup').style.display="none";
                document.getElementById('show_data').style.display="none";
                document.getElementById('div_signin').style.display="block";
                document.getElementById('profile').style.display="block";
            }
            
            
        };

        function validation()
        {
            var fields=[
                {
                    fieldname:"Enter first name",
                    fieldvalue:fname
                },
                {
                    fieldname:"Enter last name",
                    fieldvalue:lname
                },
                {
                    fieldname:"Enter address",
                    fieldvalue:address
                },
                {
                    fieldname:"Enter Mobile number",
                    fieldvalue:mobilenumber
                },
                {
                    fieldname:"Enter emailid",
                    fieldvalue:emailid
                },
                {
                    fieldname:"Enter profession",
                    fieldvalue:profession
                },
                {
                    fieldname:"Enter password",
                    fieldvalue:password
                },
                {
                    fieldname:"Enterst re-enter password",
                    fieldvalue:password
                }
            ];
            for(var i=0;i<8;i++)
            {
                if(fields[i].fieldvalue=="")
                {
                alert(fields[i].fieldname);
                }
            }
            if(validate_email())
           {
              //  emailvalid=true;
                if(validate_mobilenumber())
                {
                    if(validate_prof())  
                    {
                        if(password.localeCompare(ppass)==0)
                        {
                           if(gender==0)
                           {
                               alert("select gender");
                               return;
                           }
                           else
                           {
                            success=true;
                           }
                        }
                        else
                        {
                            alert("not match");
                            return;
                        }

                    }
                }

            }
         
          
        }

        function validate_email()
        {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(re.test(emailid))
            {
              
                return true;

            }
            else
            {
                alert("Enter valid email Id..");
                return false;
            }
        }
        function validate_mobilenumber()
        {
            var phoneno = /^\d{10}$/;  
            if(mobilenumber.match(phoneno))
            {
                return true;  
            }
             else  
              {  
                alert("Enter correct contact number");  
                 return false;  
               }  
          
        }
        function validate_prof()
        {
            if(profession.localeCompare("student")==0||profession.localeCompare("teacher")==0)
            {
                return true;
            }
            else
            {
                alert("Enter profession student or teacher");
                return ;
            }

        }
        function reset()
        {
            document.getElementById('div_signup').style.display="none";
            document.getElementById('div_signin').style.display="block";
            document.getElementById('show_data').style.display="none";
            document.getElementById('profile').style.display="none";
        }
        


        return {
            fetchDetails: fetchDetails,
            reset:reset
         };
         
})();


var storage_module=(function(){

    var data_array=[];
    data_array.push({fname:"abc",lname:"abc",address:"pune",mobilenumber:"80872127060",gender:"female",emailid:"a@gmail.com",profession:"student",password:"pass",reenterpassword:"pass"},{fname:"xyz",lname:"xyz",address:"pune",mobilenumber:"80872127060",gender:"female",emailid:"b@gmail.com",profession:"teacher",password:"pass",reenterpassword:"pass"});
    console.log("in getData ");
    
    function setdata(data)
    {
      
      console.log("data...");
        data_array.push(data);
        //signin_module.signin(store_array);
        
    }
    function get_store()
    {
        return data_array;
    }
   

    return{
        setdata:setdata,
        get_store:get_store

    }

})();



var signin_module=(function()
{
    
      var s_emailid,s_password;
      var data_array=storage_module.get_store();
      console.log(data_array);
      var flag=0,index=-1;
      function signin()
      {
          
       s_emailid=document.getElementById("s_emailid").value;
       s_password=document.getElementById("s_password").value;
       console.log("Strore array in check_log_in",data_array);
       
        if(s_emailid!=""||s_password!="")        
         {   
           for(var i=0; i<data_array.length; i++)
           {
             
             if(data_array[i].emailid==s_emailid && data_array[i].password==s_password)
             {
             
               flag=1;
               index=i;
               break;
             }
           }
           /*if("ash@gmail.com"==s_emailid&&"ash"==s_password)
           {
               flag=1
           }*/
           if(flag!=1)
           {
           alert("login fail");
            }
             else
             {
           
             alert("Login success");
             document.getElementById('user_header').style.display="block";
             document.getElementById('div1').style.display="none";
              document.getElementById('div_signup').style.display="none";
              document.getElementById('div_signin').style.display="none";
              document.getElementById('show_data').style.display="block";
              document.getElementById('profile').style.display="none";
              console.log("data_array");  
              dis_table(index);
            }

       } 
       
    
    function dis_table(index)
    {
        
        var html = "<table border='0'>";
      
        console.log(index);
        if(data_array[index].profession=="teacher")
        {
            html+="<tr>";
            html+="<th>FirstName</th>&nbsp;&nbsp;&nbsp;";
            html+="<th>LastName</th>&nbsp;&nbsp;&nbsp;";
            html+="<th>Address</th>&nbsp;&nbsp;&nbsp;";
            html+="<th>MobileNumber</th>&nbsp;&nbsp;&nbsp;";
            html+="<th>Gender</th>&nbsp;&nbsp;&nbsp;";
            html+="<th>EmailId</th>&nbsp;&nbsp;&nbsp;";
            html+="</tr>";
            for (var i = 0; i < data_array.length; i++) {
                if(data_array[i].profession=="student")
                {
                html+="<tr>";
                html+="<td>"+data_array[i].fname+"</td>&nbsp;&nbsp;&nbsp;";
                html+="<td>"+data_array[i].lname+"</td>&nbsp;&nbsp;&nbsp;";
                html+="<td>"+data_array[i].address+"</td>&nbsp;&nbsp;&nbsp;";
                html+="<td>"+data_array[i].mobilenumber+"</td>&nbsp;&nbsp;&nbsp;";
                html+="<td>"+data_array[i].gender+"</td>&nbsp;&nbsp;&nbsp;";
                html+="<td>"+data_array[i].emailid+"</td>&nbsp;&nbsp;&nbsp;";
    
                html+="</tr>";
                }
            }
        }
        if(data_array[index].profession=="student")
        {
            

                html+="<tr>";
                html+="<th>FirstName</th>&nbsp;&nbsp;&nbsp;";
                html+="<th>LastName</th>&nbsp;&nbsp;&nbsp;";
                html+="<th>Address</th>&nbsp;&nbsp;&nbsp;";
                html+="<th>MobileNumber</th>&nbsp;&nbsp;&nbsp;";
                html+="<th>Gender</th>&nbsp;&nbsp;&nbsp;";
                html+="<th>EmailId</th>&nbsp;&nbsp;&nbsp;";
                html+="</tr>";
                for (var i = 0; i < data_array.length; i++) {
                if(data_array[i].profession=="teacher")
                {
                html+="<tr>";
                html+="<td>"+data_array[i].fname+"</td>&nbsp;&nbsp;&nbsp;";
                html+="<td>"+data_array[i].lname+"</td>&nbsp;&nbsp;&nbsp;";
                html+="<td>"+data_array[i].address+"</td>&nbsp;&nbsp;&nbsp;";
                html+="<td>"+data_array[i].mobilenumber+"</td>&nbsp;&nbsp;&nbsp;";
                html+="<td>"+data_array[i].gender+"</td>&nbsp;&nbsp;&nbsp;";
                html+="<td>"+data_array[i].emailid+"</td>&nbsp;&nbsp;&nbsp;";
    
                html+="</tr>";
                }
            }
        }
    
        html+="</table>";
      document.getElementById("show_data").innerHTML = html;
    }       
}


    function personali_details()
    {
        alert("Hello");
        var html="<table border=0>";
        html+="<tr>";
        html+="<td>"+data_array[index].fname+"</td>&nbsp;&nbsp;&nbsp;";
        html+="<td>"+data_array[index].lname+"</td>&nbsp;&nbsp;&nbsp;";
        html+="<td>"+data_array[index].address+"</td>&nbsp;&nbsp;&nbsp;";
        html+="<td>"+data_array[index].mobilenumber+"</td>&nbsp;&nbsp;&nbsp;";
        html+="<td>"+data_array[index].gender+"</td>&nbsp;&nbsp;&nbsp;";
        html+="<td>"+data_array[index].emailid+"</td>&nbsp;&nbsp;&nbsp;";
        html+="</tr>";

        html+="</table>";
        document.getElementById("profile").innerHTML = html;
        document.getElementById('profile').style.display="block";
        document.getElementById('show_data').style.display="none";
    }

    return{
        signin:signin,
      personali_details:personali_details

        
    } 

})();











var init_load=(function()
{
    function initial_load()
    {
        document.getElementById('div_signup').style.display="block";
        document.getElementById('div_signin').style.display="none";
        document.getElementById('show_data').style.display="none";
        document.getElementById('user_header').style.display="none";
        document.getElementById('div1').style.display="block";
        document.getElementById('profile').style.display="none";
        
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


    return{
        initial_load:initial_load,
        signin:signin,
        signup:signup,

    }
})();
