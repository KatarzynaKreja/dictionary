import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      This project was coded by{" "}
      <a
        href="https://www.linkedin.com/in/katarzyna-kreja-03a30b198/"
        target="_blank"
        rel="noreferrer"
      >
        Katarzyna Kreja
      </a>{" "}
      and is{" "}
      <a
        href="https://github.com/KatarzynaKreja/dictionary"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced on GitHub.
      </a>{" "}
    </div>
  );
}
