// FUNCTION BASICS
// Functions (AKA Reusable Procedures) are lines of code (AKA Block of code) that can be used multiple times throughout a file
// There are different types of functions (AKA Different ways to create a function) in JavaScript. This lesson will cover Declaration Functions (AKA Function Statements) which is the traditional way to write a function

/*
Syntax Example for a Declaration Function

To Create/Declare the function...
function functionName(){
  CODE TO BE RUN WHEN FUNCTION IS USED GOES HERE;
}

To Call (AKA Run or Execute)...
functionName();
*/

// Example 1
// Creates the phineasAndFerb function
function phineasAndFerb(){
    console.log(`Hey Ferb, I know what we're gonna do today`);
  }
  
  phineasAndFerb(); // Hey Ferb, I know what we're gonna do today
  
  console.log('====================================');
  
  // Example 2
  // A function can have multiple lines inside of it
  function perry(){
    console.log(`Hey...`);
    console.log(`where's Perry?`);
  }
  
  perry();
  /*
  Hey...
  where's Perry?
  */
  perry();
  /*
  Hey...
  where's Perry?
  */
  
  console.log('====================================');
  
  // PARAMETERS & ARGUMENTS
  // Example 1
  // char is the parameter
  function bestCharacter(char){
    console.log(`${char} is the best character on Phineas and Ferb`);
  }
  
  // "Dr. Heinz Doofenshmirtz" is the argument
  bestCharacter(`Dr. Heinz Doofenshmirtz`); // Dr. Heinz Doofenshmirtz is the best character on Phineas and Ferb
  bestCharacter(`Major Francis Monogram`);
  
  console.log('====================================');
  
  // Example 2
  // A single parameter can be used multiples times in a function
  function doofAndPerry(adjective){
    console.log(`Oh Perry the Platypus, how un${adjective} and by un${adjective} I mean COMPLETELY ${adjective}`);
  }
  doofAndPerry(`expected`); // Oh Perry the Platypus, how unexpected and by unexpected I mean COMPLETELY expected
  
  console.log('====================================');
  
  // Example 3
  function openingSong(num){
    console.log(`There's ${num} days of summer vacation...`);
  }
  // Parameters can accept all data types (Strings, Number, etc.)
  openingSong(104); // There's 104 days of summer vacation...
  
  console.log('====================================');
  
  // Example 4
  // Functions can have multiple parameters
  function doof(name, animal){
    console.log(`Curse you, ${name} then ${animal}!`);
  }
  doof(`Perry`, `Platypus`); // Curse you, Perry the Platypus!
  
  console.log('====================================');
  
  // Example 5
  // A default argument can be set for a parameter
  function invention(inator = `Inator`){
    console.log(`Behold my new evil scheme, the ${inator}-Inator!`);
  }
  // Runs the function with the default argument value
  invention(); // Behold my new evil scheme, the Inator-Inator!
  // Runs the function with the overriding `I don't care` value
  invention(`I don't care`); // Behold my new evil scheme, the I don't care-Inator!
  
  console.log('====================================');
  
  // RETURN KEYWORD
  // Example 1
  // The RETURN keyword stops the execution of a function and returns a value if a value is present
  function isabella(){
    return `What'cha Doin?`;
  }
  
  const question = isabella();
  console.log(question); // What'cha Doin?
  
  console.log('====================================');
  
  // Example 2
  // Functions will run and return what follows the return keyword on the line the return is on. However, any lines following the line the return keyword is on will NOT run.
  function agentPTheme(){
    console.log(`Dooby dooby doo-bah`);
    return;
    console.log(`Agent P!`);
  }
  
  agentPTheme(); // Dooby dooby doo-bah
  
  console.log('====================================');
  
  // Example 3
  function candace(momFindsOut){
    if (momFindsOut){
      return `In Trouble`;
    }
    return `NOT In Trouble`;
  }
  
  console.log(candace(true)); // In Trouble
  console.log(candace(false)); // NOT In Trouble
  
  console.log('====================================');
  
  // FUNCTION NESTING
  function findPerry(){
    function foundPerry(){
      console.log(`Oh, there you are Perry`);
    }
    foundPerry();
  }
  
  findPerry(); // Oh, there you are Perry
  
  console.log('====================================');
  
  // HOSTING
  // A function declaration CAN be run on a line that precedes where the function is created/declared, because function declarations are Hoisted to the beginning of the JavaScript file (AKA JavaScript treats the function as if it were created at the start of the file)
  curseYou();
  
  function curseYou(){
    console.log(`Curse you Perry the Platypus!`);
