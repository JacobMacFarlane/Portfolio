import { Container, Row, Col } from "react-bootstrap"
import { MailchimpForm } from "../Mailchimp/MailChimp"

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col size={12} sm={6}>
                        <img src={'yooo'} alt="logo alt" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><img src={'linkedIn'} alt="linkedIn" /></a>
                            <a href=""><img src={'Github'} alt="Github" /></a>
                            <a href=""><img src={'Terminal'} alt="Terminal" /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}