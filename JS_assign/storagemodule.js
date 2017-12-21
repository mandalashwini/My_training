var storage_module=(function(){

    var data_array=[];
    data_array.push({fname:"abc",lname:"abc",address:"pune",mobilenumber:"80872127060",gender:"female",emailid:"a@gmail.com",profession:"student",password:"pass",reenterpassword:"pass"},{fname:"xyz",lname:"xyz",address:"pune",mobilenumber:"80872127060",gender:"female",emailid:"b@gmail.com",profession:"teacher",password:"pass",reenterpassword:"pass"});
    console.log("in getData ");
    
    function setdata(data)
    {
      
      console.log("data...");
        data_array.push(data);
        //signin_module.signin(store_array);
     console.log(data);
        
    }
    function getdata()
    {
        return data_array;
    }
   

    return{
        setdata:setdata,
        getdata:getdata
    }

})();





