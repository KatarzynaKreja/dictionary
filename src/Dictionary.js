import { useState } from "react";
import React from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeyword} />
      </form>
    </div>
  );
}
