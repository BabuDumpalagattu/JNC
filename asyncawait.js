
// function fetchData(){

//     return new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     resolve("datafetched");
// },2000);

//     })
// }
// async function getData() {
//     try {
//         console.log("Fetching data...");
//         const data = await fetchData();
//         console.log(data);
//     } catch (error) {
//         console.error("Error:", error); // If there's any error, it will be caught here
//     }
// }

// getData();


function wakeUp(){

    return new Promise((resolve, reject) => {

            setTimeout(() => {
            const wake = true;
        if(wake)
            {
                resolve("You wokeup");
            } 
        else{
        reject("Sleeping");
        }}, 1500);
    });
}

function Cooking()
{
return new Promise((resolve, reject) => {
         setTimeout(() => {
        const food = true;
        if(food) 
            {
            resolve("You prepared food");
            }
            else{
                reject("You DIDN'T prepare the food ");
            }}, 2500);
        });

}
function Getready(){

        return new Promise((resolve, reject) => {
                setTimeout(() => {
                const trashTakenOut = true;
                if(trashTakenOut)
                    {
                    resolve("Good to go");
                    }
                    else{
                        reject("not yet ready");
                        }}, 500);
                        });}
                        
function College(){
   return new Promise((resolve, reject) => {
          setTimeout(() => {
                    const trashTakenOut = false;
                        if(trashTakenOut)
                            {
                             resolve("You reached college");
                             }
                        else{
                         reject("You DIDN'T reached college");
                                }}, 5000);
                          });}

                          async function doit() {
                            try{
                            let wakeresult = await wakeUp();
                            console.log(wakeresult);
                            let cookresult = await Cooking();
                            console.log(cookresult);
                            let readyesult = await Getready();
                            console.log(readyesult);
                            let Collegeresult = await College();
                            console.log(Collegeresult);
                            console.log("you have done all routines");
                            }
                            catch(error)
                            {
                                console.log("getting error",error);
                            }
                          }
                          doit();