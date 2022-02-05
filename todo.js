function todo(){

   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status==200){
            var response = JSON.parse(this.responseText);
            
            var output = `<h6>`;
            for (var i=0;i < response.length; i++){
                if(response[i].completed == true){
                    output += `<li>  <input type="checkbox" checked disabled> ${response[i].title} </li>`;
                   
                }
                else{
                    output += `<li>  <input type="checkbox" name="check" onchange="hichecked()"> ${response[i].title} </li>`;
                }
            
            }
            output +=`</h6>`;
            document.getElementById("todo").innerHTML=output;
         }
     }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}

function hichecked(){
    var check = document.getElementsByName("check");
    var counter = 0;
    for(var i=0;i<check.length;i++){
        if(check[i].checked == true){
            counter +=1
        }
    }
    if(counter == 5){
        alert("congrats. 5 task have been sucessfully completed");
    }
}