// Store your name in a varibale. 

// Store your courses in an array. 

// Display your name and courses and do one of the following: 

// 1. If the number of courses you are doing is an odd number, find and display all odd numbers from 1-200 (inclusive)
// 2. If the number of courses you are doing is an even number, find and display all even numbers from 1-200 (inclusive)

let name = "Joshua Emmanuel-Bessong";

let courses = ["Java", "C#", "Python", "Design", "HTML", "CSS", "Javascript", "UI / UX"];

console.log(`my name is ${name} my courses 
are ${courses}`)
//the number of courses I'm doing is even. 
for (i = 1; i <= 200; i++) {

    if (i % 2 == 0) {
        console.log(i);
    }
}