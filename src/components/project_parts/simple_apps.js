import {Row, Tab} from "react-bootstrap";
import Slider from "react-slick";
import {DeviceFrameset} from "react-device-frameset";
import Illustration from "../../assets/img/try.png";
import {ExternalLink} from "react-external-link";
import speechBubble from "../../assets/img/image.png";
import {Tooltip as ReactTooltip} from "react-tooltip";
import {BsGithub, BsGlobe} from "react-icons/bs";
import {slider_settings} from "../settings/SliderSettings"
import simple_game_1 from "../../assets/img/SimpleAppsImg/simple_game_1.jpg";
import simple_game_2 from "../../assets/img/SimpleAppsImg/simple_game_2.png";
import simple_game_3_1 from "../../assets/img/SimpleAppsImg/simple_game_3_1.jpg";
import simple_game_3_2 from "../../assets/img/SimpleAppsImg/simple_game_3_2.jpg";
import simple_game_3_3 from "../../assets/img/SimpleAppsImg/simple_game_3_3.jpg";
import dating from "../../assets/img/SimpleAppsImg/dating.jpg";

export const SimpleApps = () => {

    return (
        <Tab.Content>
            <Tab.Pane eventKey="sixth">
                <Row>
                    <div>
                        <Slider {...slider_settings}>
                            <div id="deviceItems">
                                <div id="deviceContainer">
                                    <DeviceFrameset device="iPhone X" zoom="0.9" portrait>
                                        <div id="content">
                                            <img id="phoneScreenImg" src={simple_game_1} alt="Sample"/>
                                        </div>
                                    </DeviceFrameset>
                                </div>
                                <div id="deviceContainer">
                                    <DeviceFrameset device="iPhone X" zoom="0.9" portrait>
                                        <div id="content">
                                            <img id="phoneScreenImg" src={dating} alt="Sample"/>
                                        </div>
                                    </DeviceFrameset>
                                </div>
                                <div id="deviceContainer">
                                    <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                            <img id="phoneScreenImg" src={simple_game_2} alt="Sample"/>
                                        </div>
                                    </DeviceFrameset>
                                </div>
                            </div>
                            <div id="deviceItems">
                                <div id="deviceContainer">
                                    <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                            <img id="phoneScreenImg" src={simple_game_3_3} alt="Sample"/>
                                        </div>
                                    </DeviceFrameset>
                                </div>

                                <div id="deviceContainer">
                                    <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                            <img id="phoneScreenImg" src={simple_game_3_2} alt="Sample"/>
                                        </div>
                                    </DeviceFrameset>
                                </div>
                                <div id="deviceContainer">
                                    <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                            <img id="phoneScreenImg" src={simple_game_3_1} alt="Sample"/>
                                        </div>
                                    </DeviceFrameset>
                                </div>
                            </div>
                        </Slider>
                        <div className="flex justify-center ccc">

                            <img src={Illustration} className="w20rem ml-10"/>

                            <div className=" airbnbIntroHold">
                                <p className=" capitalize airbnbIntro">
                                </p>
                            </div>
                        </div>
                        <div className="flex relative speechHold">
                            <img src={speechBubble} className="bubble"/>
                        </div>
                        <ReactTooltip
                            anchorId="github"
                            place="bottom"
                            content="github"/>

                        <ReactTooltip
                            anchorId="live"
                            place="bottom"
                            content="live project"/>

                        <div className="flex gap-6 relative bubbleContentHold">
                            <ExternalLink href="https://github.com/IlliaMel">
                                <BsGithub className=" inline-block white text-3xl" id="github"/>
                            </ExternalLink>
                            <ExternalLink href="">
                                <BsGlobe className=" white text-3xl inline-block" id="live"/>
                            </ExternalLink>
                        </div>

                    </div>
                </Row>
            </Tab.Pane>
        </Tab.Content>
    )
        ;
}

