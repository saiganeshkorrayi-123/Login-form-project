let inputx=document.getElementById("input1");
let inputy=document.getElementById("input2");
let btnx=document.getElementById("btn");
let span1=document.getElementById("error1");
let span2=document.getElementById("error2");
let span3=document.getElementById("error3");
let emialpattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
let passwordpattern="^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$";
btnx.onclick=function(){
  taskinput1=inputx.value.trim();
  taskinput2=inputy.value.trim();
  let isValid=true;
  let isValid1=true;
  let pattern=""
  if(taskinput1==""){
   span1.innerText="Please enter a email";
   span1.style.marginLeft="30px";
   span1.style.color="red";
   isValid=false;
  
  }
  else if(!taskinput1.match(emialpattern)){
    span1.innerText="Please enter a valid email";
    span1.style.marginLeft="30px";
    span1.style.color="red";
    isValid=false;
  }
   else{
    span1.innerText="";
  }

  if(taskinput2==""){
    span2.innerText="Please enter a password";
    span2.style.marginLeft="30px";
   span2.style.color="red";
    isValid=false;
  }
  else if(!taskinput2.match(passwordpattern)){
    span2.innerText="Please enter a valid password";
    span2.style.marginLeft="30px";
    span2.style.color="red";
    isValid=false;
  }
  else if(taskinput2.length>6){
    span2.innerText="Password must be at least 6 characters long";
    span2.style.marginLeft="30px";
    span2.style.color="red";
    isValid=false;
  }
  else{
    span2.innerText="";
  }
 if(!isValid){
  return;
 }


 
  
if(taskinput1!="" && taskinput2!=""){
 span3.innerText="Login successful";
 span3.style.marginLeft="90px";
 span3.style.color="green";
 span3.style.fontSize="20px";
 span3.style.fontWeight="bold";
 span3.style.fontFamily="cursive";
 span3.style.backgroundColor="lightgreen";
 span3.style.border="none";
 span3.style.borderRadius="10px";
 inputx.value="";
 inputy.value="";
 
}


}