import React from "react";
import "./Result.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <h2>{props.result.word}</h2>
        {props.result.phonetics.map(function (phonetic, index) {
          return (
            <section key={index}>
              <div>
                <Phonetic phonetic={phonetic} />
              </div>
            </section>
          );
        })}
        {props.result.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <div>
                <Meaning meaning={meaning} />
              </div>
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
