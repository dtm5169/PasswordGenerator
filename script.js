
let generateBtn = document.querySelector("#click");

let specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
let specialCheck;
let lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
function determineSpecial(){
  specialCheck = prompt("Do you want to include special characters? \n(Yes or No)");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck === null || specialCheck === ""){
      alert("Please answer Yes or No");
      determineSpecial();

    }else if (specialCheck === "yes" || specialCheck ==="y"){
      specialCheck = true;
      return specialCheck;

    }else if (specialCheck === "no" || specialCheck ==="n"){
      specialCheck = false;
      return specialCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineSpecial();
    }
    return specialCheck;
}
let passwordLength;
//display length of the password
function determineLength(){
  passwordLength = prompt("Please choose the length of password (8-128 characters): ");

    if (passwordLength<8){
      alert("Password should be between the numbers 8-128 characters");
      determineLength();
    }else if (passwordLength>128){
      alert("Password should be between the numbers 8-128 characters");
      determineLength();
    }else if (isNaN(passwordLength)){
      alert("Password should be between the numbers 8-128 characters");
      determineLength();
    }else{
    alert("Next you will be asked to determine the characters in your password");
    }
    return passwordLength;
}
let numberCheck;
let numberChar = "0-9";
//User will determine if they want to use numbers
function determineNumbers(){
  numberCheck = prompt("Include numbers? \n(Yes or No)");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === null || numberCheck === ""){
      alert("Please answer Yes or No");
      determineNumbers();

    }else if (numberCheck === "yes" || numberCheck ==="y"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck === "no" || numberCheck ==="n"){
      numberCheck = false;
      return numberCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineNumbers();
    }
    return numberCheck;
}
let uppercaseCheck;
let uppercaseChar = "A-Z";
//user will determine to use uppercase letters in the password
function determineUppercase(){
  uppercaseCheck = prompt("Include Uppercase? \n(Yes or No)");
    uppercaseCheck = uppercaseCheck.toLowerCase();

    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("Please answer Yes or No");
      determineUppercase();

    }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
      uppercaseCheck = false;
      return uppercaseCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineUppercase();
    }
    return uppercaseCheck;
}
function generatePassword(){
  determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(uppercaseCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);

let characters = lowercaseChar;
let password = "";
if (uppercaseCheck && numberCheck && specialCheck){
  characters += uppercaseChar + numberChar + specialChar;

}else if (uppercaseCheck && numberCheck){
  characters += uppercaseChar + numberChar;

}else if (numberCheck && specialCheck){
  characters += numberChar + specialChar;

}else if (uppercaseCheck && specialCheck){
  characters += uppercaseChar + specialChar;

}else if (uppercaseCheck){
  characters += uppercaseChar;

}else if(numberCheck){
  characters += numberChar;

}else if (specialCheck){
  characters += specialChar;

}else{
  characters === lowercaseChar;
}

  for(let i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

//write password
function writePassword() {
    let password1 = "";
  password1 = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password1;
}


generateBtn.addEventListener("click", writePassword);