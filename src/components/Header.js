import "../css/Header.css";

function Header() {
  return (
    <div className="header text-center">
      <ul>
        <li>
          <a class="active" href="#" id="hometab">
            Iyana Marquez
          </a>
        </li>
        <div className="bottomnav">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/10DHq4Xq6HKmtkbnLC8-JJA_4nqbkPZ-RNV2bcQ6QnhQ/edit?usp=sharing"
              id="resume"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Header;
