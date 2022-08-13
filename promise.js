const promiseobj = new Promise((resolve,reject)=>{
    let a = [1,2,3,4,5,6,7,8,9,10];
    if(a.length<=9){
        resolve()
    }
    else{
        reject("error");
    }
}).then(res=>{
    
    console.log("response");

}).catch((result)=>{

    console.log("error");

}).finally(res=>{

    console.log("finally called");


})