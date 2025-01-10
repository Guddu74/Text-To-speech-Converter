const input=document.querySelector(".input")
const btn=document.querySelector(".btn")
const voicechanger=document.querySelector(".voicechanger")

btn.addEventListener('click',(e)=>{
    e.preventDefault();

    let text=input.value;

    let speech=new SpeechSynthesisUtterance(text);
    
    speechSynthesis.speak(speech);

  
})






