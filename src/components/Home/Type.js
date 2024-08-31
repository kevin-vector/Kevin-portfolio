import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "full stack web developer",
          "AI engineer",
          "algorithm enthusiast",
          "Biomedical Informatics Specialist",
          "Eager to learn something NEW"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
