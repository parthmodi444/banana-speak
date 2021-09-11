var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");
var btnTranslate=document.querySelector('#btn-translate');
btnTranslate.addEventListener("click",clickHandler);
function clickHandler()
{
    alert("clicked");
    outputDiv.innerHTML="translated text is "+txtInput.value;
}
