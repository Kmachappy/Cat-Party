import "./App.css";
import Giphy from "./components/Giphy";
import Button from "./components/Button";
import { useState, useEffect } from "react";
import audio from "./no-limit.mp3"; 
// i dont like this 
let wackhack = true

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [giphy, setGiphy] = useState(null);
  // const [audi, setAudioPlay] = useState(audioPlay);
  
  let song = new Audio(audio);
  const audioPlay = () => {
    song.play();
    wackhack = false
    
  };
  console.log("here:" +  wackhack)
  const randomGradient = () => {
    let arr = [];
    for (let i = 1; i <= 12; i++) {
      var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      arr.push(randomColor);
    }
    let gradient = arr.join(", ");
    return `radial-gradient(circle, ${gradient})`;
  };
  // console.log(typeof(randomGradient()))

  // const randomColor = ()=>{
  //   var randomColor = Math.floor(Math.random()*16777215).toString(16);
  //   return '#'+randomColor
  // }
  // console.log(typeof(randomColor()))
 
  const getGiphy = async () => {
    if(wackhack) audioPlay();
    console.log("insidegifphy: "+ wackhack)
    document.body.style.background = randomGradient();
    let arr = [];
    for (let i = 0; i < 6; i++) {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=cat&rating=r`
      );
      const data = await response.json();
      arr.push(data);
    }
    setGiphy(arr);

    // document.body.style.backgroundColor = randomColor();
    // document.body.style.background = "linear-gradient(to right top, #d16ba5, #af6498, #8f5c88, #735374, #59495f, #595168, #595971, #596178, #5e84a4, #56abca, #4dd3e5, #5ffbf1)";
    // linear-gradient(to right top, #e3ed04, #52935d, #724c3b, #36dade, #fab1ff, #396092, #9086e5, #d51cc6, #223881, #24d91b, #761a4f, #9ab650)
  };
  // console.log(wackhack)
  // const init = async ()=>{

  // }

  // useEffect(()=>{},[])
  // console.log(giphy)

  return (
    <div className="App">
      <a href=".">
        <h1 id="title">C̷̶̙̪͇̠͜at̨̛͖͈̰̣̱̳́͘ ̴̧̺̪̺̞̝̝̙̻̜̲̜͙̮̠͘̕͘P̧̛̼̜͍͙̻̞a̡̻̗̼̥̪͎̙̲͈̘̩̖͉̫͝͡r̨̡͠҉̗̠̰͓͚̬͚̞͚̻̱̭͎̜̤̲̬͟t̰̙̖͚̙̀́ͅy̛̤̱̤̥̜̼̝̟ͅ!͞͝͏̡̤̺̥̟̫͎̹̗̫̰̤͕!̶͕͕̖̭̠̥͔̺̞͈̀̕ͅ</h1>
      </a>
      <Button getGiphy={getGiphy} />
      <Giphy giphy={giphy}/>
      <div className="footer">
        <a id="idk" href="https://yyyyyyy.info/">
      {/* kill me please*/}
          <button>kill me...</button>
        </a>
        {/* <a id="idk2" href='https://pnrtscr.com/kqrkc7'><button>!!!DONT CLICK ME!!!!</button></a> */}
      </div>
    </div>
  );
}

export default App;
