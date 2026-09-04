var funcs = [];
for(var k = 0; k<3; k++){
    funcs.push(function(){
        console.log(k);
    })
}// k = 3 

funcs[0]();// var is functional scope, therefore k = 3
funcs[1]();// var is functional scope, therefore k = 3
funcs[2]();// var is functional scope, therefore k = 3


var funcs = [];
for(let k = 0; k<3; k++){
    funcs.push(function(){
        console.log(k);
    })
}// k = 3

funcs[0]();//let is block scope therefore it remember its lexical scope value of k whick is 0
funcs[1]();//let is block scope therefore it remember its lexical scope value of k = 1
funcs[2]();//let is block scope therefore it remember its lexical scope value of k = 2


