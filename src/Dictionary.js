import { useState } from "react";
import React from "react";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    console.log(response.data);
  }
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeyword} />
      </form>
    </div>
  );
}
