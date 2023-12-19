
const displayArea= document.querySelector(".edit")  //accessing display

   let str="";

   const btns= document.querySelectorAll('.btn');
   
   Array.from(btns).forEach((btn)=>{
        btn.addEventListener('click', (e)=>{
           

           if(e.target.value == '='){
                  str = eval(str);    //it will evaluate all the values of string and applicable on strings 
                displayArea.innerHTML= str;

           }
         else if(e.target.value == 'AC'){
            str="";
            displayArea.innerHTML=str;
         }
         else if(e.target.value == "DE"){
            str = str.slice(0,-1);
            displayArea.innerHTML=str;
         }


        else{
            str = str+e.target.value;
           displayArea.innerHTML= str;
        }
        })
   })

