var first_name= prompt("Hello!! What is your First name?")
var last_name = prompt("What is you Last name?")
var age= prompt("What is your age?")
var height = prompt("What is your height in cms?")
var pet= prompt("What is your pet name?")
var s_name=null;
var s_age=null;
var s_height=null;
var s_pet=null;

if (first_name[0] === last_name[0]) {
   s_name = true;
   console.log("name is true");
}
else {
  s_name = false;
}
console.log(s_name);

if (age > 20 && age < 30) {
   s_age=true;
   console.log("age is true");
}else {
  s_age=false;
}

if (height>=170) {
   s_height=true;
   console.log("Height is true");
}else {
  s_height=false;
}

if (pet[(pet.length)-1] === "y") {
   s_pet = true;
   console.log("pet is true");
}else {
  s_pet=false;
}

if(s_name && s_age && s_height && s_pet){
  console.log("You are a spy!!");
}else {
  console.log("Welcome");
}
