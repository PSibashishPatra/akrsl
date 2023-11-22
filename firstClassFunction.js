

//function statement (aka function declarations)
function  a(){
    console.log("a is called");
} 

//function expression
var b = function() {     //named function expression
    console.log("b is called");
}

a();
b();

//anonymous function(a function without a name)

//first class function( the ability of function to be used as values and to be passed as an argument to another function and can can be returned out of another function )
//aka first class citizen
var c = function(para1) {
    return function xyz() {

    }

}

console.log(c());

