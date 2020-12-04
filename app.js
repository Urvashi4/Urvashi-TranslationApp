var btnTranslate = document.querySelector("#btnTranslate");
var inputTextarea = document.querySelector("#inputTextarea");
var outputTextarea = document.querySelector("#outputTextarea");
var btnRefresh = document.querySelector("#btnRefresh");


var serverURL = "https://api.funtranslations.com/translate/minion.json";

function constructURL(text) {
 return serverURL+"?"+"text="+ text;
}

function errorHandler(error){
    console.log("Error Occured: " + error);
    alert("Some Error has occured please try after sometime!!!!");
}

function clickHandler() {
    var inputMessage = inputTextarea.value;

    fetch(constructURL(inputMessage))
    .then(response => response.json())
    .then(json => outputTextarea.innerText = json.contents.translated)
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);

btnRefresh.addEventListener("click", () => {
    inputTextarea.value = "";
    outputTextarea.innerText = "";
})