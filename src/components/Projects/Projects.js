import { ProjectCards } from "../ProjectCards/ProjectCards"
import { Col, Container, Tab, Nav, Row } from "react-bootstrap"
import 'animate.css'
import TrackVisibility from "react-on-screen"
export const Projects = () => {
    const projects = [
        {
            title: "Song Verusz",
            description: "Fun Learning TypeScript",
            imgUrl: 'Some type of img',
        },
        {
            title: "Travel Tracker",
            description: "Air BnB Clone",
            imgUrl: 'Some type of img',
        },
        {
            title: "AI Project",
            description: "Fun Learning Ai",
            imgUrl: 'Some type of img',
        }
    ]
    
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                    {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <p>About projects</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCards key={index} {...project} />
                                            )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Place Hold 2</Tab.Pane>
                        <Tab.Pane eventKey="third"> 
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCards key={index} {...project} />
                                            )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </div>}
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}