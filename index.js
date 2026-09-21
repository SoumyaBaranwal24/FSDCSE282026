/*function sum(a, b) {
    return Math.sqrt(a) + Math.sqrt(b);
}

console.log(sum(25, 9));


let a = 34;
if(a>20){
    let a = 45;
    console.log("a inside a = " + a);

}
console.log("a outside a = " + a);*/
// let access within block(local scope) while var has both (global scope)

//const sum = function(a, b){
 //   return a+b;
//}
//console.log(sum(23,40));


//const sum = (a, b) => { return Math.sqrt(a + b); };
//sum (20,30);

//IIFE (Immediately Invoked Function Expression) is a function
//(()=>{console.log("hiii")})();


//callBack function is a function which is passed as an argument to another function
// function sum(a,b){
//     return a+b;
// }

// function sumWithMsg(clbk,msg){
//     const result =clbk(20,58);
//     console.log("hiii"+msg+""+result)
// }

// sumWithMsg(sum," Ram ");


// function login(msg,error){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(msg)
//     }
// }


// function loginHandler(username,password,clbk){
//    // username ="soumya62";
//    // password = "12345";
//     if(username =="soumya62" && password =="12345"){
//         clbk("success",null)
//     }else{
//         clbk(null,"username or password is incorrect")
//     }
// }
// loginHandler("soumya62", "12345", login);
// loginHandler("som62", "1234", login);




//callback Hell


setTimeout(() => {console.log("hii..")
    setTimeout(()=>{
        console.log("two")
        setTimeout(()=>{
            console.log("three")
            setTimeout(()=>{
                console.log("four");
            })
        },500)
    },500)
},500)
