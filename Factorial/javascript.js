function factorial(){
                    var n=document.getElementById("number").value;
                    var dsply=document.getElementById("result");
                    var i,f=1;

                    if(n>0){  
                    for(i=n;i>=1;i--)
                    {
                     f=f*i;    
                    }
                    dsply.innerHTML="Factorial of " + n + " is " + f;

                    }
                    
                    else if(n<0){
                                 for(i=-n;i>=1;i--)
                                 {
                                  f=f*i;
                                  }
                                 dsply.innerHTML="Factorial of " + n + " is " + "-" + f;
                                 }

                    else{
                         dsply.innerHTML="Factorial of 0 is 1"; 
                         }  


}