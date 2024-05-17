import { useEffect, useState } from "react";
import "../App.css";
import MyText from "../../about_us.txt";

const RenderText = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(MyText)
      .then((r) => r.text())
      .then((text) => {
        setText(text);
      })
      .catch((error) => console.error("Error fetching the text:", error));
  }, []);

  return (
    <>
      <div>
        <h1>A PROPOS</h1>
        <div className="about">{text}</div>
      </div>
    </>
  );
};

export default RenderText;
