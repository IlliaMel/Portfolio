import {Row, Tab} from "react-bootstrap";
import Slider from "react-slick";
import {DeviceFrameset} from "react-device-frameset";

import Illustration from "../../assets/img/try.png";
import {ExternalLink} from "react-external-link";
import speechBubble from "../../assets/img/image.png";
import {Tooltip as ReactTooltip} from "react-tooltip";
import {BsGithub, BsGlobe} from "react-icons/bs";
import {slider_settings} from "../settings/SliderSettings"


import chat_1 from "../../assets/img/ToolsImg/chat_1.jpg";
import chat_2 from "../../assets/img/ToolsImg/chat_2.jpg";
import chat_3 from "../../assets/img/ToolsImg/chat_3.jpg";
import chat_4 from "../../assets/img/ToolsImg/chat_4.jpg";
import crypto_1 from "../../assets/img/ToolsImg/crypto_1.png";
import crypto_2 from "../../assets/img/ToolsImg/crypto_2.png";
import crypto_3 from "../../assets/img/ToolsImg/crypto_3.png";


export const Tooles = () => {

    return (
        <Tab.Content>
            <Tab.Pane eventKey="second">
                <Row>
                    <div>
                        <Slider {...slider_settings}>
                            <div id="deviceItems">
                                <div id="deviceContainer">
                                    <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                            <img id="phoneScreenImg" src={chat_1} alt="Sample"/>
                                        </div>
                                    </DeviceFrameset>
                                </div>
                                <div id="deviceContainer">
                                    <DeviceFrameset device="iPhone X" zoom="0.9" portrait>
                                        <div id="content">
                                            <img id="phoneScreenImg" src={chat_2} alt="Sample"/>
                                        </div>
                                    </DeviceFrameset>
                                </div>
                                <div id="deviceContainer">
                                    <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                            <img id="phoneScreenImg" src={chat_3} alt="Sample"/>
                                        </div>
                                    </DeviceFrameset>
                                </div>
                            </div>
                            <div id="deviceItems">
                                <div id="deviceContainerCenter">
                                    <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                            <img id="phoneScreenImg" src={chat_4} alt="Sample"/>
                                        </div>
                                    </DeviceFrameset>
                                </div>
                            </div>
                            <div id="deviceItems">
                                <div id="deviceContainer">
                                    <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                            <img id="phoneScreenImg" src={crypto_1} alt="Sample"/>
                                        </div>
                                    </DeviceFrameset>
                                </div>
                                <div id="deviceContainer">
                                    <DeviceFrameset device="iPhone X" zoom="0.9" portrait>
                                        <div id="content">
                                            <img id="phoneScreenImg" src={crypto_2} alt="Sample"/>
                                        </div>
                                    </DeviceFrameset>
                                </div>
                                <div id="deviceContainer">
                                    <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                            <img id="phoneScreenImg" src={crypto_3} alt="Sample"/>
                                        </div>
                                    </DeviceFrameset>
                                </div>
                            </div>
                        </Slider>

                    </div>
                </Row>
            </Tab.Pane>
        </Tab.Content>
    );
}

