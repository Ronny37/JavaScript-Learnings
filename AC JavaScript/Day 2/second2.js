// // const product = {
// //     name : "pen",
// //     rating : 1,
// //     price : 100,
// //     offer : 50,
// //     isdeal : true

// // };

// // //console.log(product);


// // const insta ={
// //     title : "shradakhapra",
// //     isfollow : true,
// //     message : "message",
// //     noofpost : 120,
// //     followers : 500,
// //     following : 200,
// //     Name : "Sharada",
// //     Id : "@sharadakhapra",
// //     bio : "hello there this shrada khapra from apna college we teach you about technical programming languages",




// // };

// // //console.log(insta);



// // // **Operators and operands   --->Arithematic operations 

// // // let a = 5;
// // // let b = 9;

// // // console.log("a = 5  b = 9");
// // // console.log("a + b =", a+b );
// // // console.log("a - b =", a-b );
// // // console.log("a * b =", a*b );
// // // console.log("a / b =", a/b );
// // // console.log("a % b =", a%b );
// // // console.log("a ** b =", a**b );

// // // //unary operators

// // let c = 5;
// // let d = 9;

// // console.log("c = 5  d = 9");
// // c;
// // d--;

// // console.log("post incremnet  c++ =", c++); //post incremnet
// // console.log("c =", c);

// // console.log("pre decrement --d",--d); //pre decrement
// // console.log("--d",--d);



// // // assignment operator

// // let e = 5;
// // let f = 2;

// // e += 3;
// // console.log("e +=", e);
// // e -= 3;
// // console.log("e -=", e);
// // e *= 3;
// // console.log("e *=", e);
// // e %= 3;
// // console.log("e %=", e);
// // e **= 3;
// // console.log("e **=", e);



// //  // assignment operator9
// //  let a = 20;
// //  let b = 9;

// //  console.log("20 == 9", a == b);
// //  console.log("20 != 9", a != b);
// //  console.log("20 > 9", a > b);
// //  console.log("20 < 9", a < b);
// //  console.log("20 >= 9", a >= b);
// //  console.log("20 <= 9",a <= b);

// // let age = 15;
// //  if (age > 18) {
// //     console.log("you can vote");
    
// //  } else {
// //     console.log("you can not vote");
// //  }




// // let mode = "dark";
// // let color;

// // if (mode === "dark") {
// //     color = "black";
// // } else {
// //    if (mode === "light");
// //    color ="white";

// // }
// // console.log(color);


// // let num = 2;
// // if (num % 2 === 0){
// //     console.log(num,"even");
// // }else {
// //     console.log(num, "odd");
// // }




// let mode = "dark";
// let color;

// if (mode === "dark"){
//     color = "black";
// }else if (mode === "blue"){
//     color = "blue";
// }else if (mode === "pink"){
//     color = "pink";
// } else {
// color = "white";
// }

// console.log(color);


// ternary operator


// let age = 25;

// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);


// let num = prompt("enter the number ");
// if (num % 5 === 0 ){

// console.log(num, "is a multiple of 5");
// } else {
//     console.log(num, "is not a multiple of 5")
// }

/// prints the tableof the given number
// let num = prompt("enter the number");

// console.log(num,"x 1 =", num * 1);
// console.log(num,"x 2 =", num * 2);
// console.log(num,"x 3 =", num * 3);
// console.log(num,"x 4 =", num * 4);
// console.log(num,"x 5 =", num * 5);
// console.log(num,"x 6 =", num * 6);
// console.log(num,"x 7 =", num * 7);
// console.log(num,"x 8 =", num * 8);
// console.log(num,"x 9 =", num * 9);
// console.log(num,"x 10 =", num * 10);


///calculates the operation by taking inputs
// let inputValue1 = prompt("fisrt number");
// let operator = prompt("operator");
// let inputValue2 = prompt("second number");


// // Convert the input value to a number using parseInt() or parseFloat()
// let num = parseFloat(inputValue1); // Use parseInt() for integers
// let num2 = parseFloat(inputValue2);



// // let num = prompt("fisrt number");
// // let operator = prompt("operator");
// // let num2 = prompt("second number");
  
// // let num = parseFloat();
// // if (operator === "x"){
// //     console.log(num,"x",num2,"=",num * num2);
    
// //     // console.log(num,"+",num2,"=",num + num2);
// //     // console.log(num,"-",num2,"=",num - num2);
// //     // console.log(num,"%",num2,"=",num % num2);

// // }else if {
// //     (operator === "/");
// //     console.log(num,"/",num2,"=",num / num2);
// // }else{
// //     console.log("unknown operator");
// // }

// if (operator === "x") {
//     console.log(num,"x",num2,"=",num * num2);




//   } else if (operator === "/") {
//     console.log(num,"/",num2,"=",num / num2);


//   } else if (operator === "+"){
//     console.log(num,"+",num2,"=",num + num2);


//   } else if (operator === "-"){
//     console.log(num,"-",num2,"=",num - num2);

//   } else if (operator === "%"){
//     console.log(num,"%",num2,"=",num % num2);

//   }else {
//     console.log("unknown operator")
//   }
  

let num = prompt("enter the value");
// let result = [A,B,C,D,F];
if (num >= 0 && num <= 49 ){
    console.log("F");
} else if (num >= 70 && num <= 89 ){
    console.log("b");
} else if (num >= 60 && num <= 69 ){
    console.log("c");

} else if (num >= 50 && num <= 59 ){
    console.log("d");
} else if (num >= 90 && num <= 100 ){
    console.log("a");
} else {
    console.log("invalid input");
}

  
  



