/**
 * Created by msioud on 24/08/17.
 */
'use strict';
import obj from './myModule'

let y=5;
var x=20;
const pi=3.14;
var person={
    name:"Myriam",
    surname:"SIOUD",
    hobbies:["reading","playing"],
    displayName:function(){
        console.log(this.name + " " + this.surname)
    }
}
function test(){
//delete obj;
    console.log(x);
    console.log(pi);
}


function add (y=0,x=0) {
    console.log(x+y);
}

function anyParams(...params){
    console.log(params);
}

var Lambda = (x) => {
    x+=7; // x = x +7
    console.log("I am here" +x)
};

add();
test();
anyParams(1,2,3,6);
Lambda(1);
person.displayName();

var p =person;
p.name = "Oussama";
p.displayName();
console.log(typeof(person));

var {name}= person;
console.log(name);

var thisIsAString = `the name of the person is ${name}`
console.log(thisIsAString);

var myArray =[];
myArray.push("something");
var myNewArray = new Array();
myNewArray.push("somethingElse", "someHow", "Oussama");
console.log(myArray);
console.log(myNewArray);


var item = myNewArray.findIndex((x)=>x.startsWith('O'));
console.log(item);





function returPromess(){
    var p = new Promise(function(resolve,reject){
//reject("hey") ;
        setTimeout(function(){
            if(true)
                resolve("hey")
            else
                reject(false)},1000
        )
    });
    return p;
}
var myProm = returPromess();
myProm.then(function(msg){console.log(msg)}, function(m){console.log("Wrong" + m)})

