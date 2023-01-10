const characterAmountRange = document.getElementById("characterrange");

const characterAmountNumber = document.getElementById("characternumber");

const IncludeSymbol = document.getElementById("includesymbol")

const IncludeUppercase = document.getElementById("includeuppercase")

const form = document.getElementById("Form-validator")

document.getElementById("phoneNum").addEventListener("input", (event) => {
    const regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g;
    const input = document.getElementById("phoneNum");
    const format = document.querySelector(".phoneFormat");
    const phone = input.value;
    const found = regex.test(phone);
    if (!found && phone.length){
          input.classList.add("invalid");
          format.classList.add("block");
          console.log("clicked!");
    } else {
        input.classList.remove("invalid");
        format.classList.remove("block");
        console.log("nor click!");
    }
})

document.getElementById("phoneForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("phoneNum");
    const regex = /[()-. ]/g;
    const savedPhoneNum = input.value.replaceAll(regex);
    console.log(savedPhoneNum);
})

characterAmountRange.addEventListener("input", syncCharacterAmount);
characterAmountNumber.addEventListener("input", syncCharacterAmount);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("phoneNum");
    const regex = / {2,}/g;
    const newText = input.value.replaceAll(regex, " ").trim();
    console.log(newText);
    const encodedInputText = encodeURI(input.value);
    const encodedCleanText = encodeURI(newText);
    console.log(encodedInputText);
    console.log(encodedCleanText);
})

// const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
// const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
// const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
// const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91,96)).concat(arrayFromLowToHigh(123, 126)).





// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const characterAmount = characterAmountNumber.value;
//     const characterRange = characterAmountNumber.value;
//     const syncSymbol = IncludeSymbol.checked;
//     const syncUppercase = IncludeUppercase.checked; 
//     const password = generatePassword(characterAmount, syncSymbol, syncUppercase);
// })

// function generatePassword(characterAmount, syncSymbol, syncUppercase){
//     let charCode = LOWERCASE_CHAR_CODES;
//     if(syncUppercase){
//         charCode = charCode.concat(UPPERCASE_CHAR_CODES);                                                                                                     charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
//     } 
//     if(syncSymbol){
//         charCode = charCode.concat(SYMBOL_CHAR_CODES);
//     }

//     const passwordCharacters = [];
//     for(let i = 0; i < characterAmount; i++){
//         const charatCode = charCode[Math.floor(Math.random() * charCode.length)]
//         passwordCharacters.push(String.fromCharCode(charatCode)); 
//     }
// }





// function arrayFromLowToHigh(low, high){
//     const array = [];
//     for(let i = low; i <= high; i++){
//         array.push(i);
//     }
//     return array;
// }



function syncCharacterAmount(e){
    const value = e.target.value;
    characterAmountNumber.value = value;
    characterAmountRange.value = value;
}


