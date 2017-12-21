
var signin_module=(function()
{
    
      var s_emailid,s_password;
      var  data_array=storage_module.getdata();
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
             document.getElementById('student_header').style.display="block";
             document.getElementById('div1').style.display="none";
              document.getElementById('div_signup').style.display="none";
              document.getElementById('div_signin').style.display="none";
              document.getElementById('show_data').style.display="block";
              document.getElementById('profile').style.display="none";
              console.log("data_array");  
              dis_table(index);
            }

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

