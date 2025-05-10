const wordlist = ["ΑΓΕΛΑΔΑ", "ΣΚΥΛΟΣ", "ΦΑΡΜΑ", "ΤΡΑΚΤΕΡΙ", "ΧΩΡΑΦΙ","ΚΑΝΑΡΙΝΙ", "ΕΞΩΧΙΚΟ", "ΚΑΤΟΙΚΙΑ", "ΕΛΕΦΑΝΤΑΣ", "ΠΕΡΙΣΤΕΡΙ", "ΜΟΤΟΣΥΚΛΕΤΑ", "ΡΙΝΟΚΕΡΟΣ", "ΔΕΛΦΙΝΙ", "ΚΑΡΧΑΡΙΑΣ", "ΜΠΑΤΑΡΙΑ", "ΤΡΑΠΕΖΑΡΙΑ", "ΝΤΟΥΛΑΠΑ", "ΠΑΡΑΛΙΑ", "ΘΕΣΣΑΛΟΝΙΚΗ", "ΚΑΝΑΠΕΣ", "ΖΑΧΑΡΗ", "ΠΙΠΕΡΙ", "ΣΑΛΑΜΑΝΔΡΑ",
    "ΚΑΡΑΓΚΙΟΖΗΣ", "ΜΑΡΜΑΡΟ", "ΣΚΙΟΥΡΟΣ", "ΤΡΑΠΕΖΑΡΙΑ", "ΑΜΜΟΥΔΙΑ"];
const randomNum = Math.floor(Math.random() * wordlist.length)
let word1 = wordlist[randomNum];
let word = word1.split("");
//create empty array and fill with blanks
let result = [];
for(let i = 0; i < word.length; i++) {
    result.push("-")
}

let wordSize =  word.length;

const grStr = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ";
//array of Greek letters 
let greekLetters = grStr.split("")
let btnsPushed = [];
let lives = 8
document.getElementById('show').textContent = lives

const wordContainer = document.getElementById('word-container');

//Create word Spaces
for (let i = 0; i < (word.length); i++) {
    const ltr = `
    <span id='${i}' class='letters' value='${word[i]}'>-</span>
    `
    wordContainer.insertAdjacentHTML('beforeend', ltr);
}

//showWord Blanks
//showWord()


const lettersContainer = document.getElementById('letters-container');
//create Letter buttons
for (let i = 0; i < greekLetters.length; i++) {
    const lt = greekLetters[i];
    const btn = `
    <button id='${lt}' class="letterButton" value='${lt}' onclick="btnPress(${lt})" >${lt}</button>
    `;
    lettersContainer.insertAdjacentHTML('beforeend', btn);
}

function btnPress(letter) {
    document.getElementById('show').textContent=lives;
    showWord();
    document.getElementById(`${letter.id}`).disabled = true;
    replaceLetter(letter.value)
    checkWin()
    
}

function replaceLetter(letter) {
    if(word.includes(letter)){
        for (let i = 0; i < word.length; i++) {
            if(letter === word[i]) {
                document.getElementById(`${i}`).textContent = letter;
                result[i] = letter;
            }
        }
    }else {
        lives--;
        document.getElementById('show').textContent=lives;

    }

    document.getElementById('show').textContent = lives

}

function checkWin() {
    if(lives == 0 && result.includes("-")) {
        document.querySelectorAll('button.letterButton').forEach(elem => {
            elem.disabled = true;
        });
        alert(`ΕΧΑΣΕΣ! Η ΛΕΞΗ ΕΙΝΑΙ ${word1}`);
        document.getElementById('restart').hidden=false;


    } else if (!result.includes("-")) {
        document.querySelectorAll('button.letterButton').forEach(elem => {
            elem.disabled = true;
        });
        alert("ΚΕΡΔΙΣΕΣ");
        document.getElementById('restart').hidden=false;

    }

}


function showWord() {
    for (let i = 0; i < result.length; i++) {
        document.getElementById(`${i}`).textContent = `${result[i]}`;
    }
}