import { Container, Row, Col, Tab, Nav, Carousel } from "react-bootstrap";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import moneysaverTransaction from "../assets/img/MoneySaverImg/3.jpg"
import moneysaverMain from "../assets/img/MoneySaverImg/2.jpg"
import moneysaverCategory from "../assets/img/MoneySaverImg/1.jpg"

import moneysaverMenu from "../assets/img/MoneySaverImg/10.jpg"
import moneysaverMakeTransaction from "../assets/img/MoneySaverImg/5.jpg"
import moneysaverAddAccount from "../assets/img/MoneySaverImg/16.jpg"

import moneysaverSecurity from "../assets/img/MoneySaverImg/14.jpg"
import moneysaverAddCategory from "../assets/img/MoneySaverImg/9.jpg"
import moneysaverChangeColor from "../assets/img/MoneySaverImg/8.jpg"



import filingoTest3 from "../assets/img/FilingoImg/5.jpg"
import filingoMain from "../assets/img/FilingoImg/1.jpg"
import filingoTest2 from "../assets/img/FilingoImg/4.jpg"

import filingoTest1 from "../assets/img/FilingoImg/2.jpg"
import filingoTest4 from "../assets/img/FilingoImg/6.jpg"
import filingoGrammar from "../assets/img/FilingoImg/8.jpg"



import weatherApp1 from "../assets/img/WeatherAppImg/1.jpg"
import weatherApp2 from "../assets/img/WeatherAppImg/2.jpg"
import weatherApp3 from "../assets/img/WeatherAppImg/3.jpg"




import memoryGame1 from "../assets/img/MemoryGameImg/2.png"
import datingApp1 from "../assets/img/DatingAppImg/2.jpg"
import clickerApp1 from "../assets/img/ClickerAppImg/1.jpg"



import Illustration from "../assets/img/try.png"
import speechBubble from "../assets/img/image.png"
import github from "../assets/img/AppImgs/svg/icons8-github.svg";
import web from "../assets/img/web.png";

// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { ExternalLink } from "react-external-link";

import { BsGithub } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "../../node_modules/react-tooltip/dist/react-tooltip.css"



import {DeviceFrameset} from "react-device-frameset";


export const Projects = () => {


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <BsArrowRight className=" text-white whiteColor z-50" />,
    prevArrow: <BsArrowLeft className=" text-white whiteColor z-50" />,

  };

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
                            <Nav.Link eventKey="second">FILINGO</Nav.Link>
                          </Nav.Item>
                          <Nav.Item  className="cursor-pointer">
                            <Nav.Link eventKey="third">WEATHER APP</Nav.Link>
                          </Nav.Item>
                          <Nav.Item  className="cursor-pointer">
                            <Nav.Link eventKey="fourth">SIMPLE APPS</Nav.Link>
                          </Nav.Item>
                        </Nav>
                        <Tab.Content >
                          <Tab.Pane eventKey="first">
                            <Row>
                              <div>
                                <Slider {...settings}>
                                  <div id="deviceItems">
                                    <div id="deviceContainer">
                                      <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                          <img id="phoneScreenImg" src={moneysaverTransaction} alt="Sample" />
                                        </div>
                                      </DeviceFrameset>
                                    </div>
                                    <div id="deviceContainer">
                                      <DeviceFrameset device="iPhone X" zoom="0.9" portrait>
                                        <div id="content">
                                          <img id="phoneScreenImg" src={moneysaverMain} alt="Sample" />
                                        </div>
                                      </DeviceFrameset>
                                    </div>
                                    <div id="deviceContainer">
                                      <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                          <img id="phoneScreenImg" src={moneysaverCategory} alt="Sample" />
                                        </div>
                                      </DeviceFrameset>
                                    </div>
                                  </div>
                                  <div id="deviceItems">
                                    <div id="deviceContainer">
                                      <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                          <img id="phoneScreenImg" src={moneysaverMenu} alt="Sample" />
                                        </div>
                                      </DeviceFrameset>
                                    </div>
                                    <div id="deviceContainer">
                                      <DeviceFrameset device="iPhone X" zoom="0.9" portrait>
                                        <div id="content">
                                          <img id="phoneScreenImg" src={moneysaverMakeTransaction} alt="Sample" />
                                        </div>
                                      </DeviceFrameset>
                                    </div>
                                    <div id="deviceContainer">
                                      <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                          <img id="phoneScreenImg" src={moneysaverAddAccount} alt="Sample" />
                                        </div>
                                      </DeviceFrameset>
                                    </div>
                                  </div>
                                  <div id="deviceItems">
                                    <div id="deviceContainer">
                                      <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                          <img id="phoneScreenImg" src={moneysaverSecurity} alt="Sample" />
                                        </div>
                                      </DeviceFrameset>
                                    </div>
                                    <div id="deviceContainer">
                                      <DeviceFrameset device="iPhone X" zoom="0.9" portrait>
                                        <div id="content">
                                          <img id="phoneScreenImg" src={moneysaverAddCategory} alt="Sample" />
                                        </div>
                                      </DeviceFrameset>
                                    </div>
                                    <div id="deviceContainer">
                                      <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                          <img id="phoneScreenImg" src={moneysaverChangeColor} alt="Sample" />
                                        </div>
                                      </DeviceFrameset>
                                    </div>
                                  </div>
                                </Slider>


                                <div className="flex justify-center ccc">

                                  <img src={Illustration} className="w20rem ml-10" />

                                  <div className=" airbnbIntroHold">
                                    <p className=" capitalize airbnbIntro">

                                      Our financial monitoring app offers a user-friendly experience, making it easy
                                      for you to track your expenses and income. With a sleek and modern design, you can
                                      switch between light and dark themes, ensuring optimal viewing at any time of day.
                                      Plus, your data is always safe and secure with password protection. The app also
                                      provides detailed charts and analysis, giving you a comprehensive view of your
                                      financial situation. With all these features and more, our app is the perfect tool
                                      to help you achieve your financial goals.<ExternalLink href="https://github.com/IlliaMel" className=" uppercase text-yellow-400 hover:text-yellow-500"> See more on my github </ExternalLink> "

                                    </p>
                                  </div>


                                </div>


                                <div className="flex relative speechHold">
                                  <img src={speechBubble} className="bubble" />
                                </div>

                                <ReactTooltip
                                    anchorId="github"
                                    place="bottom"
                                    content="github" />

                                <ReactTooltip
                                    anchorId="live"
                                    place="bottom"
                                    content="live project" />

                                <div className="flex gap-6 relative bubbleContentHold">
                                  <ExternalLink href="">
                                    <BsGithub className=" inline-block white text-3xl" id="github" />
                                  </ExternalLink>
                                  <ExternalLink href="">
                                    <BsGlobe className=" white text-3xl inline-block" id="live" />
                                  </ExternalLink>
                                </div>

                              </div>
                            </Row>
                          </Tab.Pane>
                        </Tab.Content>

                        <Tab.Content>
                          <Tab.Pane eventKey="second">
                            <Row>
                              <div>
                                <Slider {...settings}>
                                  <div id="deviceItems">
                                    <div id="deviceContainer">
                                      <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                          <img id="phoneScreenImg" src={filingoTest3} alt="Sample" />
                                        </div>
                                      </DeviceFrameset>
                                    </div>
                                    <div id="deviceContainer">
                                      <DeviceFrameset device="iPhone X" zoom="0.9" portrait>
                                        <div id="content">
                                          <img id="phoneScreenImg" src={filingoMain} alt="Sample" />
                                        </div>
                                      </DeviceFrameset>
                                    </div>
                                    <div id="deviceContainer">
                                      <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                          <img id="phoneScreenImg" src={filingoTest2} alt="Sample" />
                                        </div>
                                      </DeviceFrameset>
                                    </div>
                                  </div>
                                  <div id="deviceItems">
                                    <div id="deviceContainer">
                                      <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                          <img id="phoneScreenImg" src={filingoTest4} alt="Sample" />
                                        </div>
                                      </DeviceFrameset>
                                    </div>
                                    <div id="deviceContainer">
                                      <DeviceFrameset device="iPhone X" zoom="0.9" portrait>
                                        <div id="content">
                                          <img id="phoneScreenImg" src={filingoGrammar} alt="Sample" />
                                        </div>
                                      </DeviceFrameset>
                                    </div>
                                    <div id="deviceContainer">
                                      <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                          <img id="phoneScreenImg" src={filingoTest1} alt="Sample" />
                                        </div>
                                      </DeviceFrameset>
                                    </div>
                                  </div>
                                </Slider>


                                <div className="flex justify-center ccc">

                                  <img src={Illustration} className="w20rem ml-10" />

                                  <div className=" airbnbIntroHold">
                                    <p className=" capitalize airbnbIntro">

                                      Filingo: Learn English Language" is the ultimate app for anyone looking to
                                      improve their English language skills. Whether you're a beginner or an
                                      advanced learner, our app has something for everyone..<ExternalLink href="https://github.com/IlliaMel" className=" uppercase text-yellow-400 hover:text-yellow-500"> See more on my github </ExternalLink> "

                                    </p>
                                  </div>


                                </div>


                                <div className="flex relative speechHold">
                                  <img src={speechBubble} className="bubble" />
                                </div>

                                <ReactTooltip
                                    anchorId="github"
                                    place="bottom"
                                    content="github" />

                                <ReactTooltip
                                    anchorId="live"
                                    place="bottom"
                                    content="live project" />

                                <div className="flex gap-6 relative bubbleContentHold">
                                  <ExternalLink href="">
                                    <BsGithub className=" inline-block white text-3xl" id="github" />
                                  </ExternalLink>
                                  <ExternalLink href="">
                                    <BsGlobe className=" white text-3xl inline-block" id="live" />
                                  </ExternalLink>
                                </div>

                              </div>
                            </Row>
                          </Tab.Pane>
                        </Tab.Content>
                        <Tab.Content >
                          <Tab.Pane eventKey="third">
                            <Row>
                              <div>
                                <Slider {...settings}>
                                  <div id="deviceItems">
                                    <div id="deviceContainer">
                                      <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                          <img id="phoneScreenImg" src={weatherApp1} alt="Sample" />
                                        </div>
                                      </DeviceFrameset>
                                    </div>
                                    <div id="deviceContainer">
                                      <DeviceFrameset device="iPhone X" zoom="0.9" portrait>
                                        <div id="content">
                                          <img id="phoneScreenImg" src={weatherApp2} alt="Sample" />
                                        </div>
                                      </DeviceFrameset>
                                    </div>
                                    <div id="deviceContainer">
                                      <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                          <img id="phoneScreenImg" src={weatherApp3} alt="Sample" />
                                        </div>
                                      </DeviceFrameset>
                                    </div>
                                  </div>
                                </Slider>
                                <div className="flex justify-center ccc">

                                  <img src={Illustration} className="w20rem ml-10" />

                                  <div className=" airbnbIntroHold">
                                    <p className=" capitalize airbnbIntro">

                                      WeatherApp: Your Daily Weather Companion" is the must-have app for anyone who wants to stay on top of
                                      the latest weather conditions. With accurate and reliable forecasts, you'll always know what to
                                      expect before you step out the door.<ExternalLink href="https://github.com/IlliaMel" className=" uppercase text-yellow-400 hover:text-yellow-500"> See more on my github </ExternalLink> "

                                    </p>
                                  </div>


                                </div>


                                <div className="flex relative speechHold">
                                  <img src={speechBubble} className="bubble" />
                                </div>

                                <ReactTooltip
                                    anchorId="github"
                                    place="bottom"
                                    content="github" />

                                <ReactTooltip
                                    anchorId="live"
                                    place="bottom"
                                    content="live project" />

                                <div className="flex gap-6 relative bubbleContentHold">
                                  <ExternalLink href="">
                                    <BsGithub className=" inline-block white text-3xl" id="github" />
                                  </ExternalLink>
                                  <ExternalLink href="">
                                    <BsGlobe className=" white text-3xl inline-block" id="live" />
                                  </ExternalLink>
                                </div>

                              </div>
                            </Row>
                          </Tab.Pane>
                        </Tab.Content>

                        <Tab.Content >
                          <Tab.Pane eventKey="fourth">
                            <Row>
                              <div>
                                <Slider {...settings}>
                                  <div id="deviceItems">
                                    <div id="deviceContainer">
                                      <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content" style={{background:"white"}}>
                                          <img src={memoryGame1} alt="Sample" />
                                        </div>
                                      </DeviceFrameset>
                                    </div>
                                    <div id="deviceContainer">
                                      <DeviceFrameset device="iPhone X" zoom="0.9" portrait>
                                        <div id="content">
                                          <img id="phoneScreenImg" src={datingApp1} alt="Sample" />
                                        </div>
                                      </DeviceFrameset>
                                    </div>
                                    <div id="deviceContainer">
                                      <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                          <img id="phoneScreenImg" src={clickerApp1} alt="Sample" />
                                        </div>
                                      </DeviceFrameset>
                                    </div>
                                  </div>
                                </Slider>
                                <div className="flex justify-center ccc">

                                  <img src={Illustration} className="w20rem ml-10" />

                                  <div className=" airbnbIntroHold">
                                    <p className=" capitalize airbnbIntro">

                                      Simple apps <ExternalLink href="https://github.com/IlliaMel" className=" uppercase text-yellow-400 hover:text-yellow-500"> See more on my github </ExternalLink> "
                                    </p>
                                  </div>
                                </div>
                                <div className="flex relative speechHold">
                                  <img src={speechBubble} className="bubble" />
                                </div>
                                <ReactTooltip
                                    anchorId="github"
                                    place="bottom"
                                    content="github" />

                                <ReactTooltip
                                    anchorId="live"
                                    place="bottom"
                                    content="live project" />

                                <div className="flex gap-6 relative bubbleContentHold">
                                  <ExternalLink href="">
                                    <BsGithub className=" inline-block white text-3xl" id="github" />
                                  </ExternalLink>
                                  <ExternalLink href="">
                                    <BsGlobe className=" white text-3xl inline-block" id="live" />
                                  </ExternalLink>
                                </div>

                              </div>
                            </Row>
                          </Tab.Pane>
                        </Tab.Content>
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

/*

{
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: airbnbSearch,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: airbnbCheckout,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: airbnbPlaceDetail,
    },

    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: airbnbPlaceDetail,
    },

    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: airbnbPlaceDetail,
    },

            */