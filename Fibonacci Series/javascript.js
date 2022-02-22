
function printt(){
                  var get=document.getElementById("get").value;
                  var getclear=document.getElementById("get");
                  var display=document.getElementById("display");
                  var i,a=0,b=1,c;
                  c=a+b;
              
                  if(get>1)
                  {
                  display.style.color="#009879";
                  display.innerHTML="0,1";
                  
                  for(i=1;i<=get-2;i++){
                                     display.innerHTML+="," + c;
                                     a=b;
                                     b=c;
                                     c=a+b;
                                     }
                  getclear.value="";
                  }
                  else{
                       display.style.color="red";
                       display.innerHTML="Enter Value Greaterthan 1 <br> Don't Enter Alphabets(a,b,c..) , Special Characters(!,@,#,$..)";
                       getclear.value="";
                        }

}