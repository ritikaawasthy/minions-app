var btnTranslate= document.querySelector("#btn-translate")
var txtArea= document.querySelector('#txt-area')
var output= document.querySelector("#output")

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
function getTranslationURL(text){
  return serverURL +"?"+"text="+ text
}


btnTranslate.addEventListener("click",function clickEventHandler()
{
//  output.innerText = "ajajasjsjajjsj" + txtArea.value;
var inputText = txtArea.value;

fetch(getTranslationURL(inputText))
  .then(response=> response.json())
  .then(json=>console.log(json.contents.translated))
})
