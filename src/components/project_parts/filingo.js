import {Row, Tab} from "react-bootstrap";
import Slider from "react-slick";
import {DeviceFrameset} from "react-device-frameset";
import Illustration from "../../assets/img/try.png";
import {ExternalLink} from "react-external-link";
import speechBubble from "../../assets/img/image.png";
import {Tooltip as ReactTooltip} from "react-tooltip";
import {BsGithub, BsGlobe} from "react-icons/bs";
import { slider_settings }  from "../settings/SliderSettings"
import filingoTest3 from "../../assets/img/FilingoImg/5.jpg";
import filingoMain from "../../assets/img/FilingoImg/1.jpg";
import filingoTest2 from "../../assets/img/FilingoImg/4.jpg";
import filingoTest4 from "../../assets/img/FilingoImg/6.jpg";
import filingoGrammar from "../../assets/img/FilingoImg/8.jpg";
import filingoTest1 from "../../assets/img/FilingoImg/2.jpg";

export const Filingo = () => {

    return (

        <Tab.Content>
            <Tab.Pane eventKey="third">
                <Row>
                    <div>
                        <Slider {...slider_settings}>
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
                                    advanced learner, our app has something for everyone..<ExternalLink href="https://github.com/DIAorganization/Filingo" className=" uppercase text-yellow-400 hover:text-yellow-500"> See more on my github </ExternalLink> "

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
                            <ExternalLink href="https://github.com/DIAorganization/Filingo">
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

