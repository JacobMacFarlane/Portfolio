import { Container, Row, Col } from "react-bootstrap"
import { MailchimpForm } from "../Mailchimp/MailChimp"
import linkedInLogo from "../../assets/img/linkedInLogo.png"
import githubLogo from "../../assets/img/githublogo.png"
import turinglogo from "../../assets/img/turinglogo.png"
import leoLogo from "../../assets/img/leLogo3.jpeg"
export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col size={12} sm={6}>
                        <img src={leoLogo} alt="logo alt" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/jacob-macfarlane"><img src={linkedInLogo} alt="linkedIn" /></a>
                            <a href="https://github.com/JacobMacFarlane"><img src={githubLogo} alt="Github" /></a>
                            <a href="https://terminal.turing.edu/profiles/1871"><img src={turinglogo} alt="Terminal" /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}