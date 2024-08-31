import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row textAlign="center">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> KEVIN ALLEN</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "center" }}>
                <Type />
              </div>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
