import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsDiscord, BsSkype, BsWhatsapp } from "react-icons/bs";
import { SiGmail, SiGithub } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="6" className="footer-copywright">
          <h3>Copyright © {year} KA</h3>
        </Col>
        <Col md="6" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="mailto:kevinallen5877066@gmail.com?subject=To Kevin!&body=Hi there!%0D%0AYou are invited to join us for an event. Looking forward to seeing you!"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiGmail />
              </a>
            </li>
            {/* <li className="social-icons">
              <a
                href="https://wa.me/17622158287?text=Hello, Kevin!%20I%20would%20like%20to%20contact%20with%20you."
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BsWhatsapp />
              </a>
            </li> */}
            <li className="social-icons">
              <a
                href="https://discord.gg/invite-code"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BsDiscord />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="skype:live:.cid.74205addcd887d45?chat"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BsSkype />
              </a>
            </li>            
            <li className="social-icons">
                <a                
                  // href = "https://github.com/kevin0820-dev"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <SiGithub />
                </a>
              </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
