import { Container, Row, Col, Tab, Nav, Carousel } from "react-bootstrap";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';



// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../node_modules/react-tooltip/dist/react-tooltip.css"

import {MoneySaver} from "./project_parts/money_saver";
import {Filingo} from "./project_parts/filingo";
import {WeatherApp} from "./project_parts/weather_app";
import {SimpleApps} from "./project_parts/simple_apps";
import {Game} from "./project_parts/game";
import {Tooles} from "./project_parts/tools";



export const Projects = () => {

  return (
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                      <h2>Projects</h2>

                      <div className="leverageHold">
                        <p className=" capitalize o">"The only way to do great work is to love what you do." - Steve Jobs</p>
                      </div>

                      <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item  className="cursor-pointer">
                                <Nav.Link eventKey="first">MONEY SAVER</Nav.Link>
                            </Nav.Item>
                          <Nav.Item  className="cursor-pointer">
                            <Nav.Link eventKey="second">TOOLS</Nav.Link>
                          </Nav.Item>
                          <Nav.Item  className="cursor-pointer">
                            <Nav.Link eventKey="third">FILINGO</Nav.Link>
                          </Nav.Item>
                          <Nav.Item  className="cursor-pointer">
                            <Nav.Link eventKey="fourth">WEATHER APP</Nav.Link>
                          </Nav.Item>
                            <Nav.Item  className="cursor-pointer">
                                <Nav.Link eventKey="fifth">GAME</Nav.Link>
                            </Nav.Item>
                          <Nav.Item  className="cursor-pointer">
                            <Nav.Link eventKey="sixth">SIMPLE APPS</Nav.Link>
                          </Nav.Item>
                        </Nav>

                        <MoneySaver />
                        <Tooles />
                        <Filingo />
                        <WeatherApp />
                        <Game />
                        <SimpleApps />
                      </Tab.Container>
                    </div>}
              </TrackVisibility>

            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
  )
}
