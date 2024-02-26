// console.log("hello from ext");
// var a = Number(prompt("enter a number"));
// var b = Number(prompt("enter an number"));
// // alert("addition is",a+b);
// // alert("multiplication is",a*b);
// // alert("division is",a/b);
// alert(Math.max(Math.round(a),Math.round(b)));
// alert(Math.min(Math.round(a),Math.round(b)));
// alert(Math.round(Math.random()*10000));
// var str = "This is my course";
// console.log(str.split(" ")[0].split('').reverse().join('')+" "+
// str.split(" ")[1].split('').reverse().join('')+" "+
// str.split(" ")[2].split('').reverse().join('')+" "+
// str.split(" ")[3].split('').reverse().join(''));

// function sum(a,b){
//     return(a+b);
// }
// function sub(a,b){
//     return(a-b);
// }
// function mul(a,b){
//     return(a*b);
// }
// function div(a,b){
//     return(a/b);
// }
// var sum=sum(1,2);
// console.log("sum is",sum)
// var sum=sub(1,2);
// console.log("sub is",sub)
// var sum=mul(1,2);
// console.log("mul is",mul)
// var sum=div(1,2);
// console.log("div is",div)

// function findCharAt(str,index){
//     return str.charAt(index);
// }
// console.log(findCharAt("india",2));

// function area(radius){
//     return Math.PI*(radius**2);
// }
// console.log(area(2))

// function sq(radius){
//     return radius**2;
// }
// console.log(area(2))

// function area(radius){
//     return Math.PI*(radius**2);
// }
// function x(radius,fun){
//     return fun(radius);
    
// }

// console.log(x(2,area))

// var arr = [2,4,6,8,10];
// arr.push(12,14)
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.shift()
// console.log(arr);
// arr.unshift(0)
// console.log(arr);
// arr.splice(2,1,14,16);
// console.log();

// arr.sort(a,b)(function(a,b){
//     if(a)
//     return})

// var day = prompt("what day is it?");
// switch (day) {
//     case "tuesday": console.log("you are right"); break;
//     default: console.log("you are wrong");
// }

// let i=0;
// while(i%2==0 && i<20)   {
//     console.log(i);
//     i+=2;

// }

// //check whether every word starts with vowel in the sentence
// let sentence = "Anu and Pmu are educated";
// let arr = sentence.toLowerCase().split(" ");
// console.log(arr.length);
// let i=0;
// let flag = true;
// while(i<=2){
//     flag = ['a','e','i','o','u'].includes(arr[i].charAt(0));
//     i++;
// }
// if(flag){
//     console.log("every word starts with vowel in the sentence")
// }
// else{
//     console.log("every word does not start with vowel in the sentence")
// }

// //task1: take a string and give me count of vowels and consonants
// let sentence = "Anu and Pmu are educated";
// let consonant=0, vowels=0;
// for(let i=0;i<sentence.length;i++){
//     if(['a','e','i','o','u'].includes(sentence.toLowerCase().charAt(i))){
//         vowels++;
//     }
//     else if(sentence.toLowerCase().charAt(i)!=" "){ //better solution is to have split(" ").join("")
//         consonant++;
//     }
// }
// console.log(`count of vowels is ${vowels} and  count of consonants is ${consonant}`)

// //task2: check whether given is prime or not?
// let no = Number(prompt("Please enter a number: "));
// let prime = true;
// if(no == 0 || no == 1){
//     prime = false;
//     console.log("number is not a prime number")
// }
// else{
//     for(let i=2;i<=(no/2);i++){
//         if(no%i == 0){
//             console.log("number is not a prime number");
//             prime = false;
//             break;
//         }
//     }
// }
// if(prime){console.log("number is prime");}

// //take a array of values and print its sum without reduce
// let arr = [2,3,4,5]//[2,45,56,78,90,122,34];
// let sum = 0;
// for(let i of arr){
//     sum+=i;
// }
// console.log("sum is: " + sum);

//access elements by tagname,class,ID
console.log(document.getElementById("hello").textContent);  //will not return array as its unique value 
console.log(document.getElementsByTagName('p')[2].textContent);
console.log(document.getElementsByClassName('bye')[0].textContent);
console.log(document.querySelector('div p').textContent); //gives the first element that matches
console.log(document.querySelectorAll('div p')[2].textContent);