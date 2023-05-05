import css from "../assets/img/css-3.png"
import html from "../assets/img/html.png"
import js from "../assets/img/js.png"
import mongo from "../assets/img/AppImgs/skills/mongo.png"

import android from "../assets/img/AppImgs/skills/android.png"
import compose from "../assets/img/AppImgs/skills/compose.png"
import data_structures from "../assets/img/AppImgs/skills/data_structures.png"
import firebase from "../assets/img/AppImgs/skills/firebase.png"
import java from "../assets/img/AppImgs/skills/java.png"
import kotlin from "../assets/img/AppImgs/skills/kotlin.jpg"
import oop from "../assets/img/AppImgs/skills/oop.png"
import restApi from "../assets/img/AppImgs/skills/rest-api.png"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"



export const Skills = () => {



  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-16">
            <div className="skill-bx  zoomIn">
              <h2>Skills</h2>
              <p className=" capitalize">Whats the most important thing after oxygen? to Be industry relevant and have the right skills <br></br> Checkout my skills</p>

              <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1100} className="owl-carousel owl-theme skill-slider cursor-pointer">


                <div className="item">
                  <img src={android} alt="Image" />
                  <h5>ANDROID</h5>
                </div>

                <div className="item">
                  <img src={compose} style={{zoom : "15%"}} alt="Image" />
                  <h5>JETPACK COMPOSE</h5>
                </div>

                <div className="item">
                  <img src={kotlin}  alt="Image" />
                  <h5>KOTLIN</h5>
                </div>

                <div className="item">
                  <img src={firebase}  alt="Image" />
                  <h5>FIREBASE</h5>
                </div>

                <div className="item">
                  <img src={java}   alt="Image" />
                  <h5>JAVA</h5>
                </div>

                <div className="item">
                  <img src={restApi} style={{zoom : "315%"}}alt="Image" />
                  <h5>REST-API</h5>
                </div>

                <div className="item">
                  <img src={oop}  alt="Image" />
                  <h5>OOP</h5>
                </div>

                <div className="item">
                  <img src={data_structures} style={{zoom : "65%"}} alt="Image" />
                  <h5>DSA</h5>
                </div>

                <div className="item">
                  <img src={html}   alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css}  alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={js}  alt="Image" />
                  <h5>JAVA SCRIPT</h5>
                </div>
                <div className="item">
                  <img src={mongo}  alt="Image" />
                  <h5>MONGO DB</h5>
                </div>

              </Carousel>


            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
