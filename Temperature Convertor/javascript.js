
/* Calculate and Dispaly the Result */

function c_k_c(){
                 var get=Number(document.getElementById("c_k_g").value);
                 var display=document.getElementById("c_k_d");
                 var ans;
                 ans=get+273;
                 display.innerHTML=get + "&deg;C + 273 = "+ ans + "K"; 

                 document.getElementById("c_k_g").value="";  
}

function c_f_c(){
                 var get=Number(document.getElementById("c_f_g").value);
                 var display=document.getElementById("c_f_d");
                 var ans;
                 ans=get*(9/5)+32;
                 display.innerHTML=get +"&deg;C X ( 9/5 ) + 32 = " + ans + "&deg;F"; 

                 document.getElementById("c_f_g").value="";  
}

function k_c_c(){
                 var get=document.getElementById("k_c_g").value;
                 var display=document.getElementById("k_c_d");
                 var ans;
                 ans=get-273;
                 display.innerHTML=get + "K - 273 = "+ ans + "&deg;C"; 

                 document.getElementById("k_c_g").value="";   
}

function k_f_c(){
                 var get=document.getElementById("k_f_g").value;
                 var display=document.getElementById("k_f_d");
                 var ans;
                 ans=(get-273)*(9/5)+32;
                 display.innerHTML="( " + get + "K - 273 ) X ( 9/5 ) + 32 = " + ans + "&deg;F"; 

                 document.getElementById("k_f_g").value="";  
}

function f_c_c(){
                 var get=document.getElementById("f_c_g").value;
                 var display=document.getElementById("f_c_d");
                 var ans;
                 ans=(get-32)*(5/9);
                 display.innerHTML="( " + get + "&deg;F - 32 ) X ( 5/9 ) = " + ans + "&deg;C"; 

                 document.getElementById("f_c_g").value="";  
}

function f_k_c(){
                 var get=document.getElementById("f_k_g").value;
                 var display=document.getElementById("f_k_d");
                 var ans;
                 ans=(get-32)*(5/9)+273;
                 display.innerHTML="( " + get + "&deg;F - 32 ) X ( 5/9 ) + 273 = " + ans + "K"; 

                 document.getElementById("f_k_g").value="";  
}


/* Hide Conversion Page and Show Options List */

function back(){
                document.getElementById("c_k_s").style.display="none";
                document.getElementById("c_f_s").style.display="none";
                document.getElementById("k_c_s").style.display="none";
                document.getElementById("k_f_s").style.display="none";
                document.getElementById("f_c_s").style.display="none";
                document.getElementById("f_k_s").style.display="none";

                document.querySelector(".options").style.display="block";             
}


/* Hide Options List and Dispaly Conversion Page on Select any Option */

function c_k_s(){
                          document.querySelector(".options").style.display="none";
                          document.querySelector("#c_k_s").style.display="block";
}

function c_f_s(){
                          document.querySelector(".options").style.display="none";
                          document.querySelector("#c_f_s").style.display="block";
}

function k_c_s(){
                          document.querySelector(".options").style.display="none";
                          document.querySelector("#k_c_s").style.display="block";
}

function k_f_s(){
                          document.querySelector(".options").style.display="none";
                          document.querySelector("#k_f_s").style.display="block";
}

function f_c_s(){
                          document.querySelector(".options").style.display="none";
                          document.querySelector("#f_c_s").style.display="block";
}

function f_k_s(){
                          document.querySelector(".options").style.display="none";
                          document.querySelector("#f_k_s").style.display="block";
}
