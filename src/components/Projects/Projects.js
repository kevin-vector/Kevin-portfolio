import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import businessListing from "../../Assets/Projects/businessListing.png";
import zillow from "../../Assets/Projects/zillow.png";
import jooj from "../../Assets/Projects/jooj-us.png";
import twitterClone from "../../Assets/Projects/twitter-clone.png";
import AIHospital from "../../Assets/Projects/AI-Hospital.png";
import AIBigdata from "../../Assets/Projects/AI-Bigdata.png";
import AIGrow from "../../Assets/Projects/iGrow.png";
import triDot from "../../Assets/Projects/triDot.png";
import genAI from "../../Assets/Projects/galleryAI.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">``
            <ProjectCard
              imgPath={genAI}
              isBlog={false}
              title="GalleryAI"
              description={<div>
                  By leveraging serverless
                  &nbsp;<b className="blue"> Generative AI architecture</b>&nbsp;,
                  &nbsp;<b className="blue">Blockchain</b>&nbsp;
                  and
                  &nbsp;<b className="blue">advanced image compression</b>&nbsp;
                  techniques, the team overcame significant challenges to deliver a cutting-edge platform for digital art and collectibles.
                  It was built upon
                  &nbsp;<b className="blue">React/Redux</b>&nbsp;,
                  &nbsp;<b className="blue">Node</b>&nbsp;
                  and provided a great help to Ceras Health operate a well-optimized hospital management system that significantly enhanced the quality of care and operations.
                </div>}
              ghLink=""
              demoLink="https://gallerai.ai/"
            />
          </Col>

          <Col md={4} className="project-card">``
            <ProjectCard
              imgPath={AIGrow}
              isBlog={false}
              title="iGrow"
              description={<div>
                  By leveraging the power of blockchain technology and analytics, iGrow offers a comprehensive and intelligent solution for efficient and sustainable plantation management.
                  Under the motivational call
                  &nbsp;<b className="blue">"Let's save our home-blue planet!"</b>&nbsp;
                  the team succeeded in which I was
                  &nbsp;<b className="blue">front end developer</b>&nbsp;
                  with
                  &nbsp;<b className="blue">React.js</b>&nbsp;.
                  I was also responsible for the
                  &nbsp;<b className="blue">Algorithm Design, Problem Solving</b>&nbsp;.
                </div>}
              ghLink=""
              demoLink="https://istream.my/service/igrow/"
            />
          </Col>

          <Col md={4} className="project-card">``
            <ProjectCard
              imgPath={AIBigdata}
              isBlog={false}
              title="AI Big Data Analytics"
              description={<div>
                  Big data analytics refers to the process of examining large and varied data sets—often referred to as big data—to uncover hidden patterns, correlations, market trends, and customer preferences.
                  My role was
                  &nbsp;<b className="blue">full stack developer</b>&nbsp;
                  with 
                  &nbsp;<b className="blue">MongoDB, Express, React.js, Node.js</b>&nbsp;
                </div>}
              ghLink=""
              demoLink="https://istream.my/service/idata/"
            />
          </Col>

          <Col md={4} className="project-card">``
            <ProjectCard
              imgPath={triDot}
              isBlog={false}
              title="triDot"
              description={<div>
                  A dynamic training management system that allows users to create, modify, and track training programs.
                  My role was
                  &nbsp;<b className="blue">full stack developer</b>&nbsp;
                  with 
                  &nbsp;<b className="blue">React.js</b>&nbsp;,
                  &nbsp;<b className="blue">MaterialUI</b>&nbsp;
                  and
                  &nbsp;<b className="blue">Node.js</b>&nbsp;
                </div>}
              ghLink=""
              demoLink="https://tridot.com"
            />
          </Col>

          <Col md={4} className="project-card">``
            <ProjectCard
              imgPath={zillow}
              isBlog={false}
              title="Zillow"
              description={<div>
                  Zillow enhance Zillow Gruop's dedication to enhancing digital accessibility for individuals with disabilities by continually improving their online services and welcoming user feedback. I developed
                  &nbsp;<b className="blue">front end</b>&nbsp;
                  site with 
                  &nbsp;<b className="blue">React.js</b>&nbsp;
                </div>}
              ghLink=""
              demoLink="https://zillow.com/"
            />
          </Col>

          <Col md={4} className="project-card">``
            <ProjectCard
              imgPath={twitterClone}
              isBlog={false}
              title="Twitter Clone"
              description={<div>
                  Twitter clone, a dynamic social media platform designed to connect users through real-time updates, engaging conversations, and a vibrant community. My opportunity to work on this project 
                  as a
                  &nbsp;<b className="blue">full stack developer</b>&nbsp;
                  led me to create a much more communicative lifestyle. It was developed with
                  &nbsp;<b className="blue">WordPress</b>&nbsp;
                  and
                  &nbsp;<b className="blue">React.</b>&nbsp;
                </div>}
              ghLink=""
              demoLink="https://jooj.us/twitter-clone/"
            />
          </Col>

          <Col md={4} className="project-card">``
            <ProjectCard
              imgPath={AIHospital}
              isBlog={false}
              title="Ceras Hospital"
              description={<div>
                  To develop a robust and efficient hospital management system was a challenging job, but I'm proud to say that I've successfully completed it with my teammates.
                  It was built upon &nbsp;<b className="blue">Angular17</b>&nbsp;
                  and provided a great help to Ceras Health operate a well-optimized hospital management system that significantly enhanced the quality of care and operations.
                </div>}
              ghLink=""
              demoLink="https://cerashealth.com/"
            />
          </Col>

          <Col md={4} className="project-card">``
              <ProjectCard
                imgPath={businessListing}
                isBlog={false}
                title="Business Listing"
                description={<div>
                    Business Listing Plus is a user-friendly online platform that serves as a local business directory, enabling businesses to list their profiles and attract local customers through increased visibility in search engines. My role in this project was 
                    &nbsp;<b className="blue">front end developer</b>&nbsp;
                    with 
                    &nbsp;<b className="blue">Angular.js</b>&nbsp;
                  </div>}
                ghLink=""
                demoLink="https://www.businesslistingplus.com/"
              />
            </Col>

            <Col md={4} className="project-card">``
              <ProjectCard
                imgPath={jooj}
                isBlog={false}
                title="JoojUs"
                description={<div>
                    JooJ makes cost-effective Readymade Scripts to turn your entrepreneurial dreams into successful startups instantly. By playing a role as a
                    &nbsp;<b className="blue">full stack developer</b>&nbsp;
                    based one
                    &nbsp;<b className="blue">WordPress</b>&nbsp;
                    and
                    &nbsp;<b className="blue">React</b>&nbsp;
                    on this, I've made my dream to contribute to the digitalizing world, and even clients' ones to be startup successfully.
                  </div>}
                ghLink=""
                demoLink="https://jooj.us/"
              />
            </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
