var btnTranslate= document.querySelector("#btn-translate")
var txtArea= document.querySelector('#txt-area')
console.log(txtArea)
console.log(btnTranslate)

btnTranslate.addEventListener("click",function clickEventHandler()
{ console.log("clicked!")
  console.log("input", txtArea.value)
})
