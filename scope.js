let global="im from global variable"
//console.log(global);
function localscope()
{
    let local="from local variables";
    console.log(local);
    console.log(global + "acceed fron the local function");
    a=50; //Variables created without a declaration keyword
};

{
     let blockvar="from the block";
 
     console.log(blockvar);
}
console.log(global);
localscope();
//console.log(local);
//console.log(blockvar);
console.log(a);