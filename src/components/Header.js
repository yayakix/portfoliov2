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
              href="https://drive.google.com/file/d/1jaLOPIvx7jQHdrIVUWMp1qkYHLgNCUOh/view?usp=sharing"
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
