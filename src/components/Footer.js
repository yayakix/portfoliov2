import "../css/Footer.css";

function Footer() {
    const d = new Date()
    const year = d.getFullYear()
  return (
    <div className="footer">
      <h3 className="connect">LET'S CONNECT</h3>
      <h4>myemail@email.com</h4>
      <h4>
        <a href="https://www.linkedin.com/in/iyana-marquez/" target="_blank">
          LINKEDIN
        </a>
      </h4>
      <h4>
        <a href="https://github.com/yayakix" target="_blank">
          GITHUB
        </a>{" "}
      </h4>
      <span className="copyright">&copy; Iyana Marquez {year} </span>
    </div>
  );
}

export default Footer;
