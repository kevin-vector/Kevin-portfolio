import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import { SiGithub, SiGmail, SiWhatsapp } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            
            <p className="home-about-body">
              Passionate about technology and innovation, I am a <i><b className="blue"> versatile full stack</b></i>  web developer
              <br />
              <br />I have a strong foundation in&nbsp;
              <i>
                <b className="blue"> AI engineering and </b></i> &nbsp; and &nbsp; <i><b className="blue"> Bioinformatics </b>
              </i>
              <br />
              <br />
              With a
              <i>&nbsp;<b className="blue"> love for algorithms </b></i> &nbsp; and a drive to continually expand my knowledge,              
                I approach every challenge with an open mind and a relentless eagerness to learn new things including <i><b className="blue">Generative AI </b> &nbsp;and &nbsp; <b className="blue"> Crypto Currency </b>
              </i>
              <br />
              <br />
                My diverse skill set allows me to craft intelligent, data-driven solutions while staying at the 
                
              <i>
                <b className="blue">
                  {" "}
                  forefront of emerging technologies
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="blue"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Excited to connect with You!</h1>
            <p>
              Feel free to <span className="blue">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiWhatsapp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  // href = "https://github.com/kevin0820-dev"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
