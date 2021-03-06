import "../css/Footer.css";

function Footer() {
    const d = new Date()
    const year = d.getFullYear()
  return (
    <div className="footer" id="contact">
      <h3 className="connect">LET'S CONNECT</h3>
      <h4>Iyana Marquez</h4>
      <h4>yayakix@gmail.com</h4>
      <h4>
        <a
          href="https://drive.google.com/file/d/1jaLOPIvx7jQHdrIVUWMp1qkYHLgNCUOh/view?usp=sharing"
          target="_blank"
        >
          RESUME
        </a>
      </h4>
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
