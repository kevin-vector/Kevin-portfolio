import React from "react";
import Card from "react-bootstrap/Card";
import { BsBook } from "react-icons/bs";
import { CgTennis } from "react-icons/cg";
import { ImPointRight } from "react-icons/im";
import { TbBallTennis, TbFeather, TbSwimming } from "react-icons/tb";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            &nbsp;&nbsp;Hi Everyone, my name is <span className="blue">Kevin Allen </span>.
            <br />
            &nbsp;&nbsp;I was born on August 20, 1999, and I have a diverse academic background.
            <br /><br />
            &nbsp;I majored in <span className="blue">Computer Science</span> and explored <span className="blue">medical terminology</span>, ultimately integrating both fields into <span className="blue">Bioinformatics</span> at Kettering University.
            <br /><br />
            &nbsp;Recently, I have transitioned into <span className="blue">AI-integrated full stack</span> engineering, where I combine my technical skills with a passion for innovating the <span className="blue">digitalization of healthcare</span>.
            <br /><br />
            &nbsp;Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <CgTennis /> Playing Tennis
            </li>
            <li className="about-activity">
              <BsBook /> Reading History Books
            </li>
            <li className="about-activity">
              <TbSwimming /> Swimming
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
