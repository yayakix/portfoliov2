import "../css/Footer.css";

function Footer() {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <footer className="footer">
      <span className="foottitle text-center">Lets Connect.</span>

      <div className="group flex row  ">
        <a href="https://github.com/yayakix" target="_blank" rel="noreferrer">
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/iyana-marquez/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="link link-hover"
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/document/d/10DHq4Xq6HKmtkbnLC8-JJA_4nqbkPZ-RNV2bcQ6QnhQ/edit?usp=sharing"
        >
          Resume
        </a>
      </div>

      <span className="copyright ">&copy; Iyana Marquez {year} </span>
    </footer>
  );
}

export default Footer;
