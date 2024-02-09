/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-ctn">
        <div className="presentation">
          <p>Bienvenue sur mon site, je m'appelle Benoît </p>

          <h1>Développeur Web</h1>
          <h2>Front-End</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
