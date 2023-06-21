import { ProjectCards } from "../ProjectCards/ProjectCards";
import { Col, Container, Tab, Nav, Row } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import projectImg1 from "../../assets/img/Screenshot 2023-06-19 at 4.03.38 PM.png"
export const Projects = () => {

  const projects = [
    {
      title: "Song Verusz",
      description: "Fun Learning TypeScript",
      imgUrl: projectImg1,
    },
    // {
    //   title: "Travel Tracker",
    //   description: "Air BnB Clone",
    //   imgUrl: projectImg1,
    // },
    // {
    //   title: "AI Project",
    //   description: "Fun Learning Ai",
    //   imgUrl: projectImg1,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>About projects</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Showcase Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Serious Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Silly Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">No projects yet, Check back in a bit!</Tab.Pane>
                      <Tab.Pane eventKey="second">No projects yet, Check back in a bit!</Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCards key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={'yo'}></img>
    </section>
  );
};
