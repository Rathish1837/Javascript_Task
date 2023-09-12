// try{
//     var a=4;
//     var result=a.toUpperCase();
//     console.log(result);
// }
// catch(err){
//     console.log(err);
// }


var age=parseInt(prompt("Please enter your age"))
try{
    if(age>=18){
        console.log("you are eligible for vote")
    }
    else{
        throw new Error("Sorry you are not eligible for vote")
    }
}
catch(err){
    console.log(err)
}
