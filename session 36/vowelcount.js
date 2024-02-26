
let vowels = document.getElementById('vowels');
let counter = 0;
function count(){
    let inputName = document.getElementById('inputName');
    let input = inputName.value;
    console.log(input);
    for (let i = 0; i < input.length; i++) {
        if(['a','e','i','o','u'].includes(input.toLowerCase().charAt(i))) {
            counter++;
        }
    }
    vowels.textContent = `Your name has ${counter} vowels`;
}