              //  let email =document.getElementById("email");
             let username=document.getElementById("username")
             let nameerror=document.getElementById("usernameerror");
            //let error=document.getElementById("error");
             //let phno=document.getElementById("phno")
             //let phoneerror=document.getElementById("phnoerror");
             let password=document.getElementById("psw")
             //let confirm_password=document.getElementById("confpsw")
             let pwderror=document.getElementById("pwderror")
             
             
             
             
             
             
             
             function validate()
             {
             
                 if(username.value.trim()=="admin")
                 {
                  nameerror.innerHTML=null;
                  
                   return true;
                 }
                 else
                 {
                  nameerror.innerHTML="username is invalid";
                  nameerror.style.color="red";
                   return false;
                 }
             
             }
             
            function pswvalidate()
            {
              if(password.value.trim()==12345)
                 {
                  pwderror.innerHTML=null;
                  
                   return true;
                 }
                 else
                 {
                  pwderror.innerHTML="password is invalid";
                  pwderror.style.color="red";
                   return false;
                 }
            }  
             
            function main()
            {
              return(validate()  && pswvalidate() )
            }
             
               function myFunction() {
                 var x = document.getElementById("psw");
                 if (x.type === "password") {
                   x.type = "text";
                 } else {
                   x.type = "password";
                 }
               }
            