// ..............turnary......................
// var a = 100;
// var b = 20;
// var c = 60;

// var result = (a > b) ? (a > c) ? a : c : (b > c) ? b : c
// console.log(result);


// console.log(4 + 4);
// console.log(4 + "4");
// console.log(4 - "4");


// var a = [10, 20, 30, 40, 50, 50];

// console.log(a.length);
// console.log(a[2]);
// console.log(a.reverse());
// console.log(a);
// console.log(a.pop());
// console.log(a.pop());
// a.push(200);
// a.push(100);
//console.log(a);
// a.shift();
// a.unshift(500);
// console.log(a);
// for (var i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }
// var sub = ["node", "java", "react", 300, 50.55, "a"];
// console.log(sub);


//...............Max value Array......................
// var a = [10, 20, 30, 40, 50, 50];
// var sum = 0;
// var max = a[0];
// for (var i = 0; i < a.length; i++) {
//     console.log(a[i]);
//     if (a[i] > max) {
//         max = a[i];
//     }
// }
// console.log("Addition is : " + sum);
// console.log("avg is : " + (sum / a.length));
// console.log("Max is : " + max);

// ...............Second Max value array...............
// var a = [10, 20, 30, 40, 50, 50];
// var sum = 0;
// var max = a[0];
// var sec = a[1];
// for (var i = 0; i < a.length; i++) {
//     console.log(a[i]);
//     if (a[i] > max) {
//         sec = max;
//         max = a[i];
//     }
//     else if (a[i] > sec && a[i] != max) {
//         sec = a[i];
//     }
// }
// console.log("Addition is : " + sum);
// console.log("avg is : " + (sum / a.length));
// console.log("Max is : " + max);
// console.log(("Second max is : " + sec));


//var str = "sun rises in East";

// console.log(str.length);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.slice(4, 9));
// console.log(str.replace("sun", "moon"));
//console.log(str.replaceAll("sun", "moon"));
// console.log(str.charAt(5));
// console.log(str.indexOf("s"));
// console.log(str.lastIndexOf("s"));
// console.log(str.endsWith("suns"));
// console.log(str.startsWith("sun"));
// console.log(str.trim());
// console.log(str.trimStart().concat("abcd"));
// console.log(str.trimEnd().concat("abcd"));

// var s = str.split(" ")
// for (var i = s.length - 1; i >= 0; i--) {
//     console.log(s[i]);
// }

// var temp = s[0];
// s[0] = s[s.length - 1];
// s[s.length - 1] = temp;

// for (var i = 0; i < s.length; i++) {
//     console.log(s[i]);
// }

// var obj1 = {
//     name: "Jinal",
//     email: "jinal@gmail.com",
//     phno: 9876543210
// }

// var obj2 = {
//     name: "Hemali",
//     email: "hemali@gmail.com",
//     phno: 7896541230
// }

// console.log(obj1);
// console.log(obj1.name);

// var ar = [obj1, obj2];
// console.log(ar);

//.................Factorial.......................
var i;
var n = 5;
var fact = 1;

for (i = n; i >= 1; i--) {
    fact = fact * i;
}
console.log("Factorial of ", fact);


// ...................Fibonacci..........................
// var a = 0;
// var b = 1;
// var c;
// var n = 10;
// console.log(" ", a, b);
// for (var i = 2; i <= n; i++) {
//     c = a + b;
//     console.log(" ", c);
//     a = b;
//     b = c;
// }

// ............sum is digits...........................
// var n = 16548;
// var sum = 0;
// var rem;
// while (n != 0) {
//     rem = n % 10;
//     sum = sum + rem;
//     n /= 10;
// }
// console.log("Sum of Individual digits are ", sum);

// ............first and last digits..............

// var n = 16547;
// var sum = 0;
// var rem, r;
// r = n % 10;
// while (n != 0) {
//     rem = n % 10;
//     n /= 10;
// }
// console.log("Sum of first and last digits are ", rem + r);

// ....................palidrome.................

// var n = 1221;
// var rem;
// var sum = 0;
// var temp = n;
// while (n != 0) {
//     rem = n % 10;
//     sum = sum * 10 + rem;
//     n /= 10;
// }
// if (sum == temp) {
//     console.log("Given number is Palindrome");
// }
// else {
//     console.log("Given number is not Palindrome");
// }

// ..........break statement..............

// var i;
// for (i = 1; i <= 10; i++) {
//     if (i == 6) {
//         break;
//     }
//     console.log(" ", i);
// }

// ..........continue statement..............

// var i;
// for (i = 1; i <= 10; i++) {
//     if (i == 6) {
//         continue;
//     }
//     console.log(" ", i);
// }
// ..........goto statement..............

// var i = 1;
// text:
// console.log(" ", i);
// i++;
// while (i <= 10) {
//     goto text;
// }

//.............sort................

// var i, j, temp;
// var a = [26, 55, 12, 67, 8, 16, 96];
// for (i = 0; i < 7; i++) {
//     for (j = i + 1; j < 7; j++) {
//         if (a[i] > a[j]) {
//             temp = a[i];
//             a[i] = a[j];
//             a[j] = temp;

//         }
//     }
//     console.log(" ", a[i]);
// }


//...........Matrix..................

// var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// for (var i = 0; i < 3; i++) {
//     for (var j = 0; j < 3; j++) {
//         console.log(" ", a[i][j]);
//     }
//     console.log(" ");
// }

// var a;
// class Demo{
//     constructor(x){
//         a=x;
//         console.log("cons calling....");
//     }
//     dis
// }

// const mydate = new Date();
// console.log(mydate);
// console.log(mydate.getDate());
// console.log(mydate.getDay());
// console.log(mydate.getFullYear());
// console.log(mydate.getMonth());