import React, { useState } from "react";
import Translate from "./Translate";

const options = [
  {
    label: "Polish",
    value: "pl",
  },
  {
    label: "German",
    value: "de",
  },
  {
    label: "Arabic",
    value: "ar",
  },
];

const App = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div className="ui container">
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Translate
        options={options}
        language={language}
        onLanguageChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <div>Translated output</div>
    </div>
  );
};
export default App;
