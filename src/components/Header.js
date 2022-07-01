import "../css/Header.css";

function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <a class="active" href="#home">
            IM
          </a>
        </li>
        <div className="bottomnav">
          <li>
            <a href="#news">Projects</a>
          </li>
          <li>
            <a href="#contact">About</a>
          </li>
          <li>
            <a href="#about">Resume</a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Header;
