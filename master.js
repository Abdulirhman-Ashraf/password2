let pass = document.querySelector("#pass");
let cPass = document.querySelector("#cPass");
let btn = document.querySelector("#save");
let msg = document.querySelector("#msg")
btn.onclick=function (){
    if(pass.value===cPass.value)
    {   
        msg.innerHTML=`The password matches <br>the number of characters in the password is :${pass.value.length}`;
        msg.style.color="green";

    }else{
        msg.innerHTML="password does not match ";
        msg.style.color="red";
    }
}
btn.addEventListener("click",function(){
    if(pass.value===""||cPass.value===""){
        msg.style.color="red";
        msg.innerHTML="The password is empty"
    }
})


