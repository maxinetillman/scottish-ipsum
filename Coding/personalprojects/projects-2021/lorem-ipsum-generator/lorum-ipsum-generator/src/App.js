import "./App.css";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const doricLoremSentences = [
  "A bilin' o tatties.",
  "A pun a hingin mince.",
  "A recht denner.",
  "Ken fit like.",
  "Act fiel.",
  "Antrin wirdie.",
  "Clappit thegither.",
  "Doon aboot the moo.",
  "Easy moggit.",
  "Far hiv ye bin?",
  "Hale-jingbang!",
  "Leesome lane.",
  "Orra breet.",
  "Watter made waur.",
  "Tak the len.",
  "Baaldie-heidt 👨‍🦲",
  "Foos yer doos.",
  "Ma bum's dottled.",
  "Stap makkin on!",
  "Aa ower the back.",
  "It's affa dreich oot.",
  "Dinna fash yersel.",
  "Still nae spikin.",
  "Gie's a bosie!",
  "Am fair-tricket.",
  "Gawaaah! Yer kiddin oan!",
  "Yer quine is affa bonny.",
  "Awa ye go, ya neep.",
  "Hud yer wheesht!",
  "She's a coarse besom!",
  "Come awa' ben the hoose.",
  "An foos yer ma 'n' da?",
  "Taak a pew.",
  "Fit ye bin uptae?",
  "Far and fan will ye be roond?",
  "Ye winrin a fly an' a piece?",
  "Fit ye wantin fae the chipper?",
  "Ye needin onythin fae toon?",
  "Gads min, at fish smells bowfin.",
  "It's blowin a hoof!",
];

const doricLoremWords = [
  "bairn",
  "aabody",
  "ken",
  "bairn",
  "quine",
  "loon",
  "backeyn",
  "baith",
  "barritchfu",
  "bashfu",
  "bawbee",
  "beastie",
  "beld",
  "neep",
  "teuchter",
  "bik",
  "taak",
  "hud",
  "wheesht",
  "bowfin",
  "chipper",
  "fit",
  "uptae",
  "spikin",
  "canny",
  "canna",
  "scunner",
  "braw",
  "glaikit",
  "eejit",
  "haiver",
  "besom",
  "clarty",
  "drouth",
  "laldie",
  "mauchit",
  "gallus",
  "fouter",
  "bosie",
  "gype",
  "swick",
  "fizog",
  "dreich",
  "blether",
  "greet",
  "laldie",
  "crabbit",
  "scunner",
  "besom",
  "mauchit",
  "skiver",
  "gallus",
  "tatties",
  "slitter",
];

function App() {
  const [outputValue, setOutputValue] = React.useState("");
  const [inputValue, setInputValue] = React.useState(0);
  const [type, setType] = React.useState("words");

  //shuffle array so different out sent out each time
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  //function onSubmit gives output
  function onFormSubmit(event) {
    event.preventDefault();
    console.log(inputValue, type);
    //words / sentence /
    if (type === "words") {
      shuffle(doricLoremWords);
      console.log("words worked");
      let newArray = doricLoremWords.slice(0, inputValue);
      return setOutputValue(newArray.join(" "));
    } else if (type === "sentences") {
      console.log("sentences worked");
      shuffle(doricLoremSentences);
      let newSentenceArray = doricLoremSentences.slice(0, inputValue);
      return setOutputValue(newSentenceArray.join(" "));
    } else if (type === "paragraphs") {
      console.log("paragraphs worked");
      let paragraphArray;
      let newArray = [];
      for (let i = 0; i < inputValue; i++) {
        shuffle(doricLoremSentences);
        paragraphArray = doricLoremSentences.slice(0, 10);
        newArray.push(`<p>${paragraphArray.join(" ")}</p>`);
      }
      return setOutputValue(newArray.join(" "));
    }
  }

  return (
    <div className="App">
      <center>
        <div className="App-logo">
          <img
            className="logo"
            src="https://media.istockphoto.com/vectors/engraving-illustration-of-highland-cattle-head-vector-id962344008?k=6&m=962344008&s=612x612&w=0&h=uuu8cD74FyDD0L9d43mMxg24azleClJBkxiY8PDHgnU="
            alt="highland cow"
          />
        </div>
        <h1 className="App-header">Doric Ipsum</h1>
        <div className="App-description">
          <span className="description-line">
            Lorem placeholder text but Scottish.
          </span>
          <br />
          <span className="creator-line">Created by Maxine Tillman</span>
        </div>
        <div className="App-output">
          <div className="App-output-options">
            <form onSubmit={onFormSubmit}>
              <label className="App-label">
                Give me
                <input
                  className="App-input"
                  type="number"
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <select
                  name="options"
                  onChange={(e) => setType(e.target.value)}
                >
                  <option className="words" value="words">
                    Words
                  </option>
                  <option className="sentences" value="sentences">
                    Sentences
                  </option>
                  <option className="paragraphs" value="paragraphs">
                    Paragraphs
                  </option>
                </select>
              </label>
              <button
                className="App-submit-button"
                type="submit"
                value="Submit"
              >
                Submit
              </button>
              <CopyToClipboard text={outputValue}>
                <button type="button" className="App-copy-button">
                  Copy
                </button>
              </CopyToClipboard>
            </form>
          </div>
        </div>
        <div
          className="App-output-value"
          dangerouslySetInnerHTML={{ __html: outputValue }}
        />
      </center>
    </div>
  );
}

export default App;
