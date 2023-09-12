let age =12;
let age1="12";
var promiseData=new Promise(function(res,rej){
    if(age===age1){
        res("Equal");
    }
    else{
        rej("Not Equal");
    }
})
console.log(promiseData);

