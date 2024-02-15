/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/Navbar";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-ctn">
        <div className="presentation">
          <p>Bienvenue sur mon site, je m'appelle Benoît </p>

          <h1>Développeur Web</h1>
          {/* <h2>Front-End</h2> */}
          <TypeAnimation
            sequence={[
              "ReactJS", // Types 'One'
              3000, // Waits 1s
              "JavaScript", // Deletes 'One' and types 'Two'
              1500, // Waits 2s
              "Sass", // Types 'Three' without deleting 'Two'
              1000,
              "NodeJS",
              1500,
              "Express",
              1500,
              "MongoDB",
              1500,
              "SEO",
              1000,

              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="h2"
            cursor={true}
            repeat={Infinity}
            style={{ display: "inline-block" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
