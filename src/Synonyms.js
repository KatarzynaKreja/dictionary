import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <h6>Synonyms:</h6>
        {props.synonyms.map(function (synonym, index) {
          return <span key={index}> {synonym}</span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
