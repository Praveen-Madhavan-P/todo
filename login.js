function login(callback){
        //authenticating user credentials//
        var uname = document.getElementById("uname");
        var pass = document.getElementById("pass");

        if(uname.value=="admin" && pass.value=="12345"){
            callback();
        }
        else{
            alert("Username or Password is incorrect");
        }
}
function redirect(){
    //redirecting to todo page//
    document.getElementById("traverse").action="todo.html";
}
