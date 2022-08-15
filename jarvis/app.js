//elements
 const startBtn = document.querySelector("#start")
 const stopBtn = document.querySelector("#stop")
 const speakBtn = document.querySelector("#speak")
 
// speech recognition setup
const SpeechRecognition = 
window.SpeechRecognition ||window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
// sr start
 recognition.onstart = function (){
     console.log("vr active");
 };

 // sr results
 recognition.onresult = function(event){
     let current = event.resultIndex;
     let transcript = event.results[current][0].transcript;
     transcript=transcript.toLowerCase();
     console.log('my words :${transcript}');

  if(transcript.includes("hello jarvis")){
      readOut("hello cloud engineer");
  }
  if(transcript.includes("open youtube")){
      readOut("Opening youtube Sir");
      window.open("https://www.youtube.com/");
  }
if(transcript.includes("open google")){
    readOut("opening google sir");
    window.open("https://www.google.com/");
}
if(transcript.includes("open dhoni wikipedia")){
    readOut("opening dhoni wikipedia sir");
    window.open("https://en.wikipedia.org/wiki/MS_Dhoni")
}
if(transcript.includes("open firebase")){
    readOut("opening firebase sir");
    window.open("https://www.firebase.com/");
}
if(transcript.includes("play honey singh song")){
    readOut("playing honey singh song");
    window.open("https://www.youtube.com/watch?v=LibJisH1M30");
}
if(transcript.includes("open cricket score")){
    readOut("opening  IPL cricket score sir");
    window.open("https://www.google.com/search?q=live+score+of+ipl&rlz=1C1RXQR_enIN996IN996&oq=live+score+of+ipl&aqs=chrome..69i57j0i131i433i512j0i512j0i3l3j0i512l2j0i22i30l2.5004j1j15&sourceid=chrome&ie=UTF-8");
}


 };

// sr stop
 recognition.onend=function(){
     console.log("vr deactive");
 };

 // sr continuos
 recognition.continuous = true;

 startBtn.addEventListener("click",()=>{
    recognition.start()
 });

 stopBtn.addEventListener("click",()=>{
       recognition.stop()
 });

 // jarvis speech
 function readOut(message){
     const speech = new SpeechSynthesisUtterance()
     // diff voices
     const allVoices = speechSynthesis.getVoices()
    speech.text = message;
    speech.voice=allVoices[0];
    speech.volume = 1
    window.speechSynthesis.speak(speech)
    console.log("speaking out");
 }
// example
speakBtn.addEventListener("click",()=>{
     readOut("hello, software engineers")
});


