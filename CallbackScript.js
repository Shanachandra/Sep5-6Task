 var addCode=(a)=> {   
        if (a>0) {
           setTimeout(function() {
                document.getElementById("trigger").innerHTML = a;  
                addCode(--a)          
            }, 1000);
  
        } else { // Loop
            setTimeout(function() {
                document.getElementById("trigger").innerHTML = "Happy Sunday";                         
            }, 1000);
        }
  
    
     
  }


//   var addCode=async (i)=> {

//     for(var a=i;a>=0;a--)
//     {
//         if (a>0) {
//            await sleep(1000,function() {
//                 document.getElementById("trigger").innerHTML = a;            
//             }, 1000);
  
//         } else { 
//             await sleep(1000,function() {
//                 document.getElementById("trigger").innerHTML = "Happy Sunday";            
//             }, 1000);
//         }
  
//     }
     
//   }

//   var sleep=(milliseconds,a)=> {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//       currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
//     a();
//   }
