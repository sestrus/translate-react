import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";

const Translate = ({ language, onLanguageChange, options }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick);
    return () => {
      return document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const ref = useRef();
  const renderedOptions = options.map((option) => {
    if (option.value === language.value) {
      return;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          onLanguageChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label>Choose Language</label>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{language.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Translate;
