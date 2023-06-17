import "./styles/footer-styles.css";

function Footer() {
  return (
    <footer>
      <div className="footerlogo">
        <img src="/logo.png" width={150} height={65} alt={"1eruo"} />
      </div>

      <ul className="footerlist">
        <li>
          <a className="footer-items" href="/">
            HOME
          </a>
          <a className="footer-items" href="#about-section">
            {" "}
            ABOUT
          </a>
          <a
            className="footer-items"
            href="https://www.instagram.com/one_yuro/?hl=en"
            target="_blank"
          >
            INSTA
          </a>
          <a className="footer-items" href="#book-apt">
            BOOK APT
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
