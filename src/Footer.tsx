import "./styles/footer-styles.css";

function Footer() {
  return (
    <footer>
      <div className="footerlogo">
        <img src="/logo.png" width={150} height={65} alt={"1eruo"} />
      </div>

      <ul className="footerlist">
        <li className="footer-items">HOME</li>
        <li className="footer-items">ABOUT</li>
        <li className="footer-items">INSTA</li>
        <li className="footer-items">BOOK APT</li>
      </ul>
    </footer>
  );
}

export default Footer;
