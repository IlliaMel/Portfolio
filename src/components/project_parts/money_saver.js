import {Row, Tab} from "react-bootstrap";
import Slider from "react-slick";
import {DeviceFrameset} from "react-device-frameset";
import moneysaverTransaction from "../../assets/img/MoneySaverImg/3.jpg";
import moneysaverMain from "../../assets/img/MoneySaverImg/2.jpg";
import moneysaverCategory from "../../assets/img/MoneySaverImg/1.jpg";
import moneysaverMenu from "../../assets/img/MoneySaverImg/10.jpg";
import moneysaverMakeTransaction from "../../assets/img/MoneySaverImg/5.jpg";
import moneysaverAddAccount from "../../assets/img/MoneySaverImg/16.jpg";
import moneysaverSecurity from "../../assets/img/MoneySaverImg/14.jpg";
import moneysaverAddCategory from "../../assets/img/MoneySaverImg/9.jpg";
import moneysaverChangeColor from "../../assets/img/MoneySaverImg/8.jpg";
import Illustration from "../../assets/img/try.png";
import {ExternalLink} from "react-external-link";
import speechBubble from "../../assets/img/image.png";
import {Tooltip as ReactTooltip} from "react-tooltip";
import {BsGithub, BsGlobe} from "react-icons/bs";
import {slider_settings} from "../settings/SliderSettings"

export const MoneySaver = () => {

    return (
        <Tab.Content>
            <Tab.Pane eventKey="first">
                <Row>
                    <div>
                        <Slider {...slider_settings}>
                            <div id="deviceItems">
                                <div id="deviceContainer">
                                    <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                            <img id="phoneScreenImg" src={moneysaverTransaction} alt="Sample"/>
                                        </div>
                                    </DeviceFrameset>
                                </div>
                                <div id="deviceContainer">
                                    <DeviceFrameset device="iPhone X" zoom="0.9" portrait>
                                        <div id="content">
                                            <img id="phoneScreenImg" src={moneysaverMain} alt="Sample"/>
                                        </div>
                                    </DeviceFrameset>
                                </div>
                                <div id="deviceContainer">
                                    <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                            <img id="phoneScreenImg" src={moneysaverCategory} alt="Sample"/>
                                        </div>
                                    </DeviceFrameset>
                                </div>
                            </div>
                            <div id="deviceItems">
                                <div id="deviceContainer">
                                    <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                            <img id="phoneScreenImg" src={moneysaverMenu} alt="Sample"/>
                                        </div>
                                    </DeviceFrameset>
                                </div>
                                <div id="deviceContainer">
                                    <DeviceFrameset device="iPhone X" zoom="0.9" portrait>
                                        <div id="content">
                                            <img id="phoneScreenImg" src={moneysaverMakeTransaction} alt="Sample"/>
                                        </div>
                                    </DeviceFrameset>
                                </div>
                                <div id="deviceContainer">
                                    <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                            <img id="phoneScreenImg" src={moneysaverAddAccount} alt="Sample"/>
                                        </div>
                                    </DeviceFrameset>
                                </div>
                            </div>
                            <div id="deviceItems">
                                <div id="deviceContainer">
                                    <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                            <img id="phoneScreenImg" src={moneysaverSecurity} alt="Sample"/>
                                        </div>
                                    </DeviceFrameset>
                                </div>
                                <div id="deviceContainer">
                                    <DeviceFrameset device="iPhone X" zoom="0.9" portrait>
                                        <div id="content">
                                            <img id="phoneScreenImg" src={moneysaverAddCategory} alt="Sample"/>
                                        </div>
                                    </DeviceFrameset>
                                </div>
                                <div id="deviceContainer">
                                    <DeviceFrameset device="iPhone X" zoom="0.85" portrait>
                                        <div id="content">
                                            <img id="phoneScreenImg" src={moneysaverChangeColor} alt="Sample"/>
                                        </div>
                                    </DeviceFrameset>
                                </div>
                            </div>
                        </Slider>


                        <div className="flex justify-center ccc">

                            <img src={Illustration} className="w20rem ml-10"/>

                            <div className=" airbnbIntroHold">
                                <p className=" capitalize airbnbIntro">

                                    Our financial monitoring app offers a user-friendly experience, making it easy
                                    for you to track your expenses and income. With a sleek and modern design, you can
                                    switch between light and dark themes, ensuring optimal viewing at any time of day.
                                    Plus, your data is always safe and secure with password protection. The app also
                                    provides detailed charts and analysis, giving you a comprehensive view of your
                                    financial situation. With all these features and more, our app is the perfect tool
                                    to help you achieve your financial goals.<ExternalLink
                                    href="https://github.com/IlliaMel/MoneySaver"
                                    className=" uppercase text-yellow-400 hover:text-yellow-500"> See more on my
                                    github </ExternalLink> "

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
                            <ExternalLink href="https://github.com/IlliaMel/MoneySaver">
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
    );
}

