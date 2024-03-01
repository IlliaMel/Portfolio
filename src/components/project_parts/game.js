import {Row, Tab} from "react-bootstrap";
import Slider from "react-slick";
import {DeviceFrameset} from "react-device-frameset";

import Illustration from "../../assets/img/try.png";
import {ExternalLink} from "react-external-link";
import speechBubble from "../../assets/img/image.png";
import {Tooltip as ReactTooltip} from "react-tooltip";
import {BsGithub, BsGlobe} from "react-icons/bs";
import {slider_settings} from "../settings/SliderSettings"

import game_1 from "../../assets/img/GameImgs/game_1.jpg";
import game_2 from "../../assets/img/GameImgs/game_2.jpg";
import game_3 from "../../assets/img/GameImgs/game_3.jpg";

export const Game = () => {

    return (
        <Tab.Content>
            <Tab.Pane eventKey="fifth">
                <Row>
                    <div>
                        <Slider {...slider_settings}>
                            <div id="deviceItems">
                                <div id="deviceContainerOne">
                                    <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                            <img id="phoneScreenImg" src={game_1} alt="Sample"/>
                                        </div>
                                    </DeviceFrameset>
                                </div>
                            </div>
                            <div id="deviceItems">
                                <div id="deviceContainerOne">
                                    <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                            <img id="phoneScreenImg" src={game_2} alt="Sample"/>
                                        </div>
                                    </DeviceFrameset>
                                </div>
                            </div>
                            <div id="deviceItems">
                                <div id="deviceContainerOne">
                                    <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                            <img id="phoneScreenImg" src={game_3} alt="Sample"/>
                                        </div>
                                    </DeviceFrameset>
                                </div>
                            </div>
                        </Slider>


                        <div className="flex justify-center ccc">

                            <img src={Illustration} className="w20rem ml-10"/>

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

                        </div>

                    </div>
                </Row>
            </Tab.Pane>
        </Tab.Content>
    );
}

