var btnTranslate = document.querySelector("#btnTranslate");
var inputTextarea = document.querySelector("#inputTextarea");
var outputTextarea = document.querySelector("#outputTextarea");
var btnRefresh = document.querySelector("#btnRefresh");

var audio1 = new Audio('/audio/minion-bababa.mp3');
var audio2 = new Audio('/audio/minion-bello.mp3');
var audio3 = new Audio('/audio/minion-laugh.mp3');

var audioArray = [audio1,audio2,audio3];

function audioSelection() {
    var i = Math.floor(Math.random() * audioArray.length);
    var curntAudio = audioArray[i];
    return curntAudio;
}

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function constructURL(text) {
 return serverURL+"?"+"text="+ text;
}

function errorHandler(error){
    console.log("Error Occured: " + error);
    alert("Maximum Limit Exceeded. Please try again after an hour.");
}

function clickHandler() {
    var inputMessage = inputTextarea.value;

    fetch(constructURL(inputMessage))
    .then(response => response.json())
    .then(json => outputTextarea.innerText = json.contents.translated)
    .catch(errorHandler)

    var audioPlay = audioSelection();
    audioPlay.play();
}

btnTranslate.addEventListener("click", clickHandler);

btnRefresh.addEventListener("click", () => {
    inputTextarea.value = "";
    outputTextarea.innerText = "";
})