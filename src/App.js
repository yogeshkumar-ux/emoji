import "./styles.css";
import { useState } from "react";

var emojiDick = {
  "😂": "laugh",
  "🤣": "funny",
  "😍": "lovely",

  "💖": "heart",

  "😎": "cool",
  "😘": "kiss",
  "😛": "tongue out",
  "🤪": "mad"
};

var emojiData = Object.keys(emojiDick);

export default function App() {
  const [displayItem, setDisplayItem] = useState("");

  function emojiHandler(event) {
    var displayItem = emojiDick[event.target.value];

    setDisplayItem(displayItem);
  }

  function emojiClickHandler(emoji) {
    var displayItem = emojiDick[emoji];
    setDisplayItem(displayItem);
  }

  return (
    <div className="App">
      <h1>like game </h1>
      <input onChange={emojiHandler} />
      <div style={{ padding: "2rem" }}>
        Meaning of The Emoji Is {displayItem}{" "}
      </div>

      {emojiData.map(function (emoji) {
        return (
          <span
            style={{ cursor: "pointer" }}
            onClick={() => emojiClickHandler(emoji)}
          >
            {" "}
            {emojiData}
          </span>
        );
      })}
    </div>
  );
}
