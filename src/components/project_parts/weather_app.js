import {Row, Tab} from "react-bootstrap";
import Slider from "react-slick";
import {DeviceFrameset} from "react-device-frameset";
import Illustration from "../../assets/img/try.png";
import {ExternalLink} from "react-external-link";
import speechBubble from "../../assets/img/image.png";
import {Tooltip as ReactTooltip} from "react-tooltip";
import {BsGithub, BsGlobe} from "react-icons/bs";
import { slider_settings }  from "../settings/SliderSettings"
import weatherApp1 from "../../assets/img/WeatherAppImg/1.jpg";
import weatherApp2 from "../../assets/img/WeatherAppImg/2.jpg";
import weatherApp3 from "../../assets/img/WeatherAppImg/3.jpg";

export const WeatherApp = () => {

    return (
        <Tab.Content >
            <Tab.Pane eventKey="fourth">
                <Row>
                    <div>
                        <Slider {...slider_settings}>
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
                                    expect before you step out the door.<ExternalLink href="https://github.com/IlliaMel/WeatherApp" className=" uppercase text-yellow-400 hover:text-yellow-500"> See more on my github </ExternalLink> "

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
                            <ExternalLink href="https://github.com/IlliaMel/WeatherApp">
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

    );
}

