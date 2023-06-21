import { Container, Row, Col } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import typeScriptLogo from "../../assets/img/typescriptLogo.png"
import uiux from "../../assets/img/uiux2.svg"
import reactLogo from "../../assets/img/reactLogo.webp"
import htmllogo from "../../assets/img/htmlLogo.png"
export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>My Skills</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={reactLogo} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={typeScriptLogo} alt="Image" />
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={uiux} alt="Image" />
                                <h5>UI/UX Design</h5>
                            </div>
                            <div className="item">
                                <img src={htmllogo} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={'what is this'} />
        </section>
      )
}