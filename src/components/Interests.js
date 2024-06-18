import React from "react";

export default function Interest() {
  return (
    <section className="interest">
      <h2 className="interest--title">Interests</h2>
      <ul className="interest--list">
        <li className="interest--item">
          <span role="img" aria-label="Travel">
            🌍
          </span>{" "}
          Learning about cultures through travel
        </li>
        <li className="interest--item">
          <span role="img" aria-label="Coding">
            💻
          </span>{" "}
          Coding/Programming
        </li>
        <li className="interest--item">
          <span role="img" aria-label="Web Security">
            🔐
          </span>{" "}
          Web Security
        </li>
        <li className="interest--item">
          <span role="img" aria-label="Java">
            🍵
          </span>{" "}
          Java/Spring
        </li>
        <li className="interest--item">
          <span role="img" aria-label="Reading">
            📖
          </span>{" "}
          Reading
        </li>
      </ul>
    </section>
  );
}
