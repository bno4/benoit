/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-ctn">
        <div className="about-ctn__head">
          <div className="about-ctn__head__img"></div>
          <div className="about-ctn__head__txt">
            <h2>à</h2>
            <h2>propos</h2>
          </div>
        </div>
        <div className="about-ctn__story">
          <div className="about-ctn__story__left"></div>
          <div className="about-ctn__story__right">
            <p>
              Après quinze années très enrichissantes passées dans le secteur
              culturel, en qualité de chargé de diffusion, communication puis{" "}
              <strong>responsable de diffusion</strong> d’une structure de
              production, j’ai décidé d’opérer une reconversion professionnelle
              dans le <strong>développement web.</strong>
            </p>
            <p>
              Je suivi une formation diplômante à plein temps dès décembre 2022,
              et je suis aujourd'hui titulaire du titre RNCP développeur
              intégrateur web, orienté sur les technos du front-end :{" "}
              <strong>
                React, Sass, JavaScript, et aussi back-end avec NodeJS, Express
                et MongoDB.
              </strong>
            </p>
            <p>
              Mes expériences passées m’ont appris à gérer des projets de
              développement d’activités artistiques de A à Z, établir les
              stratégies de communication afférentes, ou participer à la
              rédaction d’un cahier des charges pour la création du site web
              d’un nouveau pôle de production et diffusion. Doté d’un grand sens
              de l’autonomie, créatif, pugnace, curieux des nouvelles
              technologies et aimant le travail en équipe, je cherche
              aujourd’hui à intégrer en tant que développeur web front-end toute
              entreprise (agence de communication ou agence de développement
              web) évoluant dans la création et le maintien de sites web.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
