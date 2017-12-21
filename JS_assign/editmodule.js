
var edit_profile=(function(){
	var index;
	var data_array=[];
	var fname,lname,address,mobilenumber,emailid,profession,password,ppass;
    function getdata1()
    {
      
      //alert("in edit profile module");
      index=signin_module.get_index();
     // alert(index);
      get_store();
       set_values();
  	}
    function get_store()
    {
    	console.log("In getstore");
    	data_array=  storage_module.getdata();
    }


    function set_values()
    {
    		console.log("in set values");
    		console.log(data_array[index]);
    		fname=document.getElementById('firstname1').value=data_array[index].fname;
            lname=document.getElementById('lastname1').value=data_array[index].lname;
            address=document.getElementById('address1').value=data_array[index].address;
            mobilenumber=document.getElementById('mobilenumber1').value=data_array[index].mobilenumber;
            gender=document.getElementById('gender1');
            emailid=document.getElementById('emailid1').value=data_array[index].emailid;
            profession=document.getElementById('profession1');
            password=document.getElementById('password1').value=data_array[index].password;
            ppass=document.getElementById('rpassword1').value=data_array[index].repassword;
     		console.log(mobilenumber)
           //alert(gender)
    }

     var fetchDetailsSave = function (){
      
            fname=document.getElementById('firstname1').value;
            lname=document.getElementById('lastname1').value;
            address=document.getElementById('address1').value;
            mobilenumber=document.getElementById('mobilenumber1').value;
            gender=document.getElementById('gender1').selectedIndex;
            emailid=document.getElementById('emailid1').value;
            profession=document.getElementById('profession1').selectedIndex
            password=document.getElementById('password1').value;
            ppass=document.getElementById('rpassword1').value;
            console.log(password);
           //alert(gender)
           //alert(profession)
            
           if(validation())
            {
                alert("successfully edited");
            
        if(gender==1)
        var g="male";
        else if(gender==2)
        g="female";


         if(profession==1)
        var p="student"
        else if(profession==2)
        p="teacher" 

        data={fname:fname,lname:lname,address:address,mobilenumber:mobilenumber,gender:g,emailid:emailid,profession:p,password:password,repassword:ppass};
             storage_module.setdata(data);
             document.getElementById('show_data').style.display="block";
           document.getElementById('profile').style.display="block";
           document.getElementById('div_edit').style.display="none";
           
                //data_array.push(data);
               /* document.getElementById('div_signup').style.display="none";
                document.getElementById('show_data').style.display="none";
                document.getElementById('div_signin').style.display="block";
                document.getElementById('profile').style.display="block";*/
                console.log("MY values");
                 console.log(data);
            }
            console.log("Edit data");
            //signin_module.personal_details();
           
   
        }


        ////
        function validation()
        {
           var flag=0;
           console.log("in validate")
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
                    fieldname:"Enter password",
                    fieldvalue:password
                },
                {
                    fieldname:"Enterst re-enter password",
                    fieldvalue:ppass
                }
            ];
          
	if(fname=="" && lname=="" && address=="" && password=="" && ppass=="" && emailid =="")
	{
		alert("Fill Details");
		return;
	}
	if(validate_name())
		if(validate_lastname())
			if(validate_address())
	{
   
         if(validate_mobilenumber())
	{
		if(validate_gender())	
		{
			 if(validate_email())
			{
				if(validate_prof())
				{
					if(validate_password())	
					{
						if(validate_confirmpassword())
						{
							return true;
						}
					}
				}
			}	
		}
		
		}
	}

	}


       /* function unique_emailid()
        {
            data_array=  storage_module.getdata();
            console.log("In unique..");
            console.log(data_array);
            s_emailid=document.getElementById("emailid1").value;
           for(var i=0; i<data_array.length; i++)
           {
                if(data_array[i].emailid==s_emailid)
                {
                document.getElementById("emailid_exist_label1").style.display="block"
                return false;
                }
                else
                {
                    document.getElementById("emailid_exist_label1").style.display="none"
                    return true;
                }
            }
        }*/
		
        function validate_email()
        {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(re.test(emailid))
            {
                document.getElementById("emailid_label1").style.display="none"
               return true;
              
            }
            else
            {
                document.getElementById("emailid_label1").style.display="block"
                return false;
            }
        }
        function validate_mobilenumber()
        {
            var phoneno = /^\d{10}$/;  
            if(mobilenumber.match(phoneno))
            {
                document.getElementById("mbnumber_label1").style.display="none"
                return true; 
 		
            }
             else  
              {  
                document.getElementById("mbnumber_label1").style.display="block"
                 return ;  
               }  
          
        }
        function validate_prof()
        {
            if(profession==0)
            {
               
                alert("select profession ");
                return ;
            }
            else
            {
		return true;
	
            }

        }
	function validate_gender()
        {
            if(gender==0)
            {
                
		alert("select gender ");
                return ;
            }
            else
            {
               return true; 
            }

        }

	function validate_password()
        {
	   var passw=/^[A-Za-z]\w{7,14}$/;
            if(password.match(passw))
            {
                document.getElementById("password_label1").style.display="none"
                return true;
            }
            else
            {
		      document.getElementById("password_label1").style.display="block"
               return; 
            }

        }




	function validate_confirmpassword()
        {
	   
            if(password==ppass)
            {
                document.getElementById("rpassword_label1").style.display="none"
                return true;
            }
            else
            {
		      document.getElementById("rpassword_label1").style.display="block"
               return; 
            }

        }


	function validate_name()
        {
	   
            if(fname!="")
            {
                
                fname_label=document.getElementById("fname_label1").style.display="none"
                return true;
            }
            else
            {
		        fname_label=document.getElementById("fname_label1").style.display="block"
               return; 
            }

        }

	function validate_lastname()
        {
	   
            if(lname!="")
            {
                document.getElementById("lname_label1").style.display="none"
                return true;
            }
            else
            {
		      document.getElementById("lname_label1").style.display="block"
               return; 
            }

        }

	function validate_address()
        {
	   
            if(address!="")
            {
                document.getElementById("address_label1").style.display="none"
                return true;
            }
            else
            {
		      document.getElementById("address_label1").style.display="block"
               return; 
            }

        }



        ////


    return{
        getdata1:getdata1,
        fetchDetailsSave:fetchDetailsSave
    }

})();

