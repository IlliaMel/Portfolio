import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Typewriter } from 'react-simple-typewriter'

export const Banner = () => {

  
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "An Android Developer", "A Software Engineer"];
  const period = 100;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 10);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(250);  // CONTROL SPEED THE MORE IT IS THE SLOWER THE ANIMATION
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              <div>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hey! I'm Illia`} <span className="txt-rotate" dataPeriod="50" data-rotate='[ "An Android Developer", "A Software Engineer"]'><span className="wrap">{text}</span></span></h1>
                  <p className=" capitalize">Hello 👋 I am an enthusiastic and dedicated Android Developer. I am always eager to embrace
                    new technologies and stay up-to-date with the latest trends in the Android ecosystem.Feel free to reach out
                    if you'd like to discuss your next Android project or simply want to connect with a fellow developer! </p>
              </div>
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              <div>
                <img id="header_img" src={headerImg} alt="Header Img"/>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
