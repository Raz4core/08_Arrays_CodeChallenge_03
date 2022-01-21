
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Wer","du","bist"],"Q"));
output(getSentence(["Wer","du","bist","will","ich","wissen?"],"E"));
output(getSentence(["Ohaaaa"],"E"));

function name(params) {
    
}

function getSentence(arr,op) {

    const gap = " ";
    const punct = getPunct(op);
    let str = "";

    for (let i = 0; i < arr.length; i++) {

        if ( i != arr.length-1 ) {
            str += arr[i] + gap; 
        } else {
            str += arr[i] + punct; 
        }
    }

    return str;
}

function getPunct(op){
    switch (op) {
        case "S":
            return ".";
        case "Q":
            return "?";
        case "E":
            return "!";
        default:
            return ".";  // TBA
    }
}

// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}