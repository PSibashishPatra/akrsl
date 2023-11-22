
//closures
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


function ab(){
    for(let k=1 ; k<=5; k++) {
        setTimeout(function(){
            console.log(k);

        },k*2000);
    }
    console.log("Here's my new code");
}
ab();

function abc() {
    for(var i = 1 ; i <= 5 ; i++) {
        function close(h) {
            setTimeout(function() {
                console.log(h);
            }, x * 1000)
        }
        close(i);
    }
    console.log("Hey there !!!");
}
abc();


//data hiding using closures
 function counter() {
    var count = 0;
    return function incrementCounter(){
        count++;
        console.log(count);

    }
 }
  var counter1 = counter();
  counter1();
  counter1();
  
  //counter2 doesn't affect the scope of counter1 and start the function calling from initial value of count i.e,count = 0 

  var counter2 = counter();
  counter2();

  //or (for scalable reasons)

  function Counter(){
    var count = 0 ;
    this.incrementCounter = function(){
        count++;
        console.log(count);

    }
    this.decrementCounter = function(){
        count--;
        console.log(count);
    }
  }
  var count1 = new Counter();
  count1.incrementCounter();
  count1.decrementCounter();
  count1.decrementCounter();


  //closure and garbage collector
  function a(){
    var x = 0 , z = 10 ;
    return function b() {
        console.log(x);
    }
  }//z is collected by the garbage collector and it will not be present in the memory if we try to get the value of z
  
  var y = a();
  y();