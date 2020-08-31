/*
What is hoisting?

What's so important about it?

Is this something I need to consciously implement into my code? - not really

var vs let vs const ?????
*/


// implicit variable declaration for my_name prior to its actual declaration
// console.log(my_name);

// var my_name = "Cody"
// let my_name2 = "Thaller";

// const person = {
//     name: "Cody",
//     age:29
// };

// console.log(my_name);
// console.log(my_name2);
// my_name2 = "Bananas";
// console.log(my_name2);

// console.log(person);
// person.name = "Steven";
// console.log(person);

var y = 25;
bubble();
// bubble2();
console.log(y);
// console.log(x); // THIS WON'T WORK

function bubble(){
    var x = 10
    console.log(y);
    y += x;
}

const bubble2 = () => {
    console.log(10);
}

bubble2();

// var -> hoists the variable NAME but not its value to the top of the scope it was declared in
// let -> DOES NOT HOIST
// const -> DOES NOT HOIST

for(var i = 0; i < 10; i++){
    console.log(i*3);
}

console.log(i);
let x = true;
let count = 0;
while(x == true){
    let z = 10;
    if(count == 3){
        x = false;
    }
    count++;
}

console.log(z);
