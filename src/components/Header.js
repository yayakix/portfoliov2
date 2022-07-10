import "../css/Header.css";

function Header() {
  return (
    <div className="header">
  
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
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#resume" id="resume">
              Resume
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Header;
