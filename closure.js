function x() {
    var a = 12 ;
    //let b = 15 ;
    function y() {
        console.log(a);
      //  console.log(b);
    }
   // y();
    return y;
}
x();
var n = x();
console.log(n);
n();



function l() {
    var p = 4;
    function m() {
        console.log(p);
    }
    p = 100
    return m ;

}
var z = l();
console.log(z);
z();


function s() {
    var f = 55 ;
    function t() {
        var e = 65 ;
        function u() {
            console.log(e,f,j);
        }
        u();
    }
    t();
}
let j = 44;
s();

//Using var(global scope)
function p() {
    for(var i= 1; i<=5; i++) {
        setTimeout(function(){
            console.log(i);

        },i*1000);
    }
    console.log("Hello!!!");
}
p();

//Using let(block scope)
function v() {
    for(let i= 1; i<=5; i++) {
        setTimeout(function(){
            console.log(i);

        },i*1000);
    }
    console.log("Hello!!!");
}
v();
