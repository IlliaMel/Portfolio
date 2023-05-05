import { Container, Row, Col } from "react-bootstrap";
import email from "../assets/img/AppImgs/svg/email.svg"
import github from "../assets/img/AppImgs/svg/icons8-github.svg"
import telegram from "../assets/img/AppImgs/svg/telegram.svg"
import linkedin from '../assets/img/AppImgs/svg/nav-icon1.svg';
import { ExternalLink } from "react-external-link";

export const Footer = () => {
  return (
    <footer className="footer mt-10">
      <Container>
        <Row className="align-items-center ">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end pt-3">
            <div className="social-icon">
              <ExternalLink href=""> <img src={linkedin}  /> </ExternalLink>
              <ExternalLink href=""> <img src={telegram} style={{transform: "scale(1.35)"}} /> </ExternalLink>
              <ExternalLink href="">  <img src={email} style={{transform: "scale(1.3)"}} /> </ExternalLink>
              <ExternalLink href="">  <img src={github} style={{transform: "scale(1.32)"}} /> </ExternalLink>
            </div>
            <p className=" capitalize">Copyright 2023. Infinity</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
