const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__ctn">
        <div className="credits">© Benoît Duchemin - 2024</div>
        <div className="coordonnees">
          <p>
            <i className="fa-solid fa-phone"></i> +33 (0)6 30 53 32 89
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i> bnduchemin@gmail.com
          </p>
          <p>
            <i className="fa-solid fa-location-dot"></i> Lyon
          </p>
        </div>
        <div className="social">
          <p>
            <a
              href="https://www.linkedin.com/in/beno%C3%AEt-duchemin-817584141/"
              target="blank"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </p>
          <p>
            <a href="https://github.com/bno4" target="blank">
              {" "}
              <i className="fa-brands fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
