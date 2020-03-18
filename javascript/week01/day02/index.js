//Write a JavaScript function which accepts a name and prints the initials.

// Input: Dwayne Johnson Actor Output: DJA

// Input: Shakira Colombian Singer Output: SCS


let name = prompt(); //Get name from user 

let init = name.split(" "); //Split by Space

let initials = ""
init.map(name => {
    initials += name.charAt(0) //From the split array get the first Characters
})

console.log(initials.toUpperCase()) //Display the Initials