
function printt(){
                  var get=document.getElementById("get").value;
                  var display=document.getElementById("display");
                  var i;
          
                  if(get>0){
                            display.style.color="#009879";
                            display.innerHTML="";

                  for(i=1;i<=10;i++){
                                     display.innerHTML+=get + " X " + i + " = " + get*i + "<br>";
                                      }
                                     document.getElementById("continue").style.display="block";
                              }
          
                  else if(get<0){
                            display.style.color="#009879";
                            display.innerHTML="";

                  for(i=1;i<=10;i++){
                                     display.innerHTML+=get + " X " + i + " = " + get*i + "<br>";
                                      }
                                     document.getElementById("continue").style.display="block";
                              }
         
                   else{
                        document.getElementById("continue").style.display="none";
                        display.style.color="#009879";
                        display.innerHTML="";

                        for(i=1;i<=10;i++){
                        display.innerHTML+="0 X " + i + " = " + "0" + "<br>";
                                          }
                       }
                  c=20,j=11;
}


var c=20,j=11;

function increase(){
                    c=c+10;
                    j=j+10;
}


function continuee(){
                     var get=document.getElementById("get").value;
                     var display=document.getElementById("display");
                     var i;
             
                     for(i=j;i<=c;i++){
                                     display.innerHTML+=get + " X " + i + " = " + get*i + "<br>";
                                      }
                     increase();


}


function clearr(){
                  document.getElementById("display").innerHTML="";

                  document.getElementById("get").value="";

                  document.getElementById("continue").style.display="none";

                  c=20,j=11;
}

