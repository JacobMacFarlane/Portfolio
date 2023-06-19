import { Col } from'react-bootstrap';

export const ProjectCards = ({ title, description, imgUrl }) => {
    console.log(title, 'title')
    console.log(description, 'description')
    return (
        <Col size={12} sm={6} md={4}>
            <div className="=proj-imgbx">
                <img src={'yo'} alt="project display"/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}