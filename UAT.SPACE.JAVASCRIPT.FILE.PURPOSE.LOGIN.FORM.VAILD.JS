
//This a the function that validates user inputs for submission on the login page
    function validate()
    {
        //The varibles
        var FirstName = document.getElementById("FirstName").value;
        var LastName = document.getElementById("LastName").value;
        var FirstName =
        document.forms.LoginForm.FirstName.value;
        var firstname = document.forms["LoginForm"]["FirstName"];              
        var lastname = document.forms["LoginForm"]["LastName"];   
        var Badge = document.forms["LoginForm"]["Badge"]
       //if said varible = 0 then write this text
        if (firstname.value == "")                                 
        {
            window.alert("Please enter your First Name.");
            firstname.focus();
            return false;
        }
       //if said varible = 0 then write this text
        if (lastname.value == "")                              
        {
            alert("Please enter your Last Name.");
            lastname.focus();
            return false;
        }
      //if said varible = 0 then write this text
        if (Badge.value == "")                                  
        {
            window.alert("Please enter a valid badge number.");
            Badge.focus();
            return false;
        }
      //if said varible more than 20  then write this text
        if (FirstName.length > 20)                                 
        {
            window.alert("Please enter a vaild First Name.");
            FirstName.focus();
            return false;
        }
      //if said varible more than 20 then write this text
        if (LastName.length > 20)                                 
        {
            window.alert("Please enter a vaild Last Name.");
            LastName.focus();
            return false;
        }
        //if said varible is more than 3 charaters then give an alert 
        if (Badge.length > 3)                                 
        {
            window.alert("Please enter a vaild Badge Number  HINT: three numbers or less.");
            Badge.focus();
            return false;
        }
        return true;
    }
 