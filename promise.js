// Promise = An Object that manages asynchronous operations.

//Wrap a Promise Object around {asynchronous code}
"I promise to return a value"

//

//PENDING -> RESOLVED or REJECTED

// new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. wakeup

// 2. cook

// 3. get ready
//4.going to college

function wakeUp(){

            return new Promise((resolve, reject) => {

                    setTimeout(() => {
                    const wake = false;
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
                            const trashTakenOut = true;
                                if(trashTakenOut)
                                    {
                                     resolve("You reached college");
                                     }
                                else{
                                 reject("You DIDN'T reached college");
                                        }}, 5000);
                                  });}

wakeUp().then(value => {console.log(value); return Cooking()}) 
        .then(value => {console.log(value); return Getready()}) 
        .then(value => {console.log(value); return College()}) 
        .then(value => {console.log(value); console.log("you have finished your all the routines")}) 
        .catch(error => console.error(error));

//wakeUp().then(Cooking).then(Getready).then(College)