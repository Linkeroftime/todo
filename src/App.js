import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [listItems, setListItems] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputText.trim() !== "") {
      setListItems([...listItems, inputText]);
      setInputText("");
    }
  };

  const handleDelete = (index) => {
    const updatedList = [...listItems];
    updatedList.splice(index, 1);
    setListItems(updatedList);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Todo</h1>
      </div>
      <div className="todo-input">
        <form id="myForm" onSubmit={handleFormSubmit}>
          <input
            type="text"
            id="textInput"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="todo-list">
        <ul id="list">
          {listItems.map((item, index) => (
            <li key={index}>
              {" "}
              {item} <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
