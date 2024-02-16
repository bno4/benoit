/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-ctn">
        <div className="about-ctn__head">
          <motion.div
            className="about-ctn__head__img"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="./assets/img/photo-profil_NB_crop.png"
              alt="Photo de profil"
            />
          </motion.div>
          <div className="about-ctn__head__txt">
            <h2>à</h2>
            <h2>propos</h2>
          </div>
        </div>
        <div className="about-ctn__story">
          <div className="about-ctn__story__left"></div>
          <div className="about-ctn__story__right">
            <p>
              Après plusieurs années très enrichissantes passées dans le secteur
              culturel, en qualité de chargé de diffusion, communication puis{" "}
              <strong>responsable de diffusion</strong> d’une structure de
              production, j’ai décidé d’opérer une reconversion professionnelle
              dans un secteur auquel j'ai toujours été confronté et passionné,
              le <strong>développement web.</strong>
            </p>
            <p>
              J'ai suivi une formation diplômante à plein temps dès décembre
              2022 avec openClassrooms, et je suis aujourd'hui titulaire du
              titre RNCP développeur intégrateur web, orienté sur les
              technologies front-end : <strong>React, Sass, JavaScript </strong>
              , et aussi back-end avec{" "}
              <strong>NodeJS, Express et MongoDB.</strong>. Je continue de me
              perfectionner sur ces langages et frameworks et m'ouvrent à
              d'autres technologies comme Angular ou Redux.
            </p>
            <p>
              Mes expériences passées m’ont appris à gérer des projets de
              développement d’activités de A à Z, établir les stratégies de
              communication afférentes, ou participer à la rédaction d’un cahier
              des charges pour la création du site web d’un nouveau pôle de
              production et diffusion. Doté d’un grand sens de l’autonomie,
              créatif, pugnace, curieux des nouvelles technologies et aimant le
              travail en équipe, je cherche aujourd’hui à intégrer en tant que
              développeur web toute entreprise évoluant dans la création et le
              maintien de solutions digitales pour elle-même ou ses clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
