function wake(){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {     
            //reject("You wokeup");   
            resolve("wokeup");
            console.log("wokeup");
    }, 1500);
});
}

// function cook()
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("cooking done");
//         },2500);
//     });
// }

function cook()
{
    
        setTimeout(()=>{
            console.log("cooking done");
        },2500);
    
}
// function getready(){
//   return  new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             //reject("not got ready");
//             resolve("got ready");
            
                   
//                    },2000);
//     });
// }
const Ready= () => {
  return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //reject("not  ready");
           resolve("got ready");
            console.log("ready");
                   
                   },2000);
    });
}


// //wake().then(value=>console.log(value));
// wake().then(value=> {console.log(value); return cook()})
//       //.then(value=> {console.log(value); return Ready()})
//          .then(value => {console.log(value); console.log("you have finished your all the routines")}) 
//          cook();
//       //.catch(error => console.error(error));

wake().then(cook).then(Ready)