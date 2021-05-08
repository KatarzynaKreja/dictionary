import { useState } from "react";
import React from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    setResult(response.data[0]);
  }
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    // documentation https://dictionaryapi.dev/
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeyword} />
      </form>
      <Result result={result} />
    </div>
  );
}
