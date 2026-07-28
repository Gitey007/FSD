// // console.log("hello I am  missing js")

// function sum(a,b){
//     return a+b;
// }

// a = sum(9,6);
// console.log( "sum is : ",a);
// =========================================
// function root(a){
//     return Math.sqrt(a);
// }

// function sum1(a,b){
//     return root(a)+root(b);
// }

// b = sum1(9,6);
// console.log( "sum1 is : ",b);

// const sum=(a,b)=>{return a+b};
//  a = sum(9,6);
// console.log( "sum is : ",a);
// =========================================
// (()=>{
//     console.log("hey ..... using IIFE");
// })();
//===========================================
// const a = 23
// if(a<40){
//     const a = 40;
//     console.log("value of a inside block = "+a);
// }
// console.log("value of a out block = "+a);
//==============================================
// var a = 23
// if(a<40){
//     var a = 40;
//     console.log("value of a inside block = "+a);
// }
// console.log("value of a out block = "+a);
//===================================================
// function sum(a,b){
//          return a+b;
// }
// function msgWithSum(clbk,msg){
//     const result = clbk(40,50);
//     console.log("Hiii "+ msg+" your result is = "+result)
// }
// msgWithSum(sum,"Rahul");
//==========================================================
function login(error,msg){
    if(error){
        console.log("Error is: "+error)
    }
    else{
        console.log(msg);
    }
}

function loginHandler(username,password,clbk){
    if(username == "Gitey001" && password == "satyanshu@786"){
        clbk(null,"login Success")
    }else{
        clbk("username or password is incorrect",null)
    }
}

loginHandler("Gitey001","satyanshu@76",login);