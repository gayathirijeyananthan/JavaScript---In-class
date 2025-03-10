//step 1 
let userName=prompt('What is your Name?');
let age=prompt('How old are you?');

//step 2
document.write('My Name is'+' '+userName+'<br>');

document.write('My age is'+' '+age);

//step4

if (age<18){
    console.log("You can't loged in");
}
else{
    console.log('You can logged in');
}