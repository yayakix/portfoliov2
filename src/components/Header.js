import "../css/Header.css";

function Header() {
  const headerList = [
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Projects",
      url: "#projects",
    },
    {
      name: "Skills",
      url: "#skills",
    },
    {
      name: "Contact",
      url: "#contact",
    },
  ];
  return (
    <div className="header text-center bg-white flex justify-center items-center mb-24 shadow-xl	shadow-slate-50 h-16 sticky top-0 z-10">
      <div className="sm:hidden md:block">
        <a href="#" id="hometab">
          Iyana Marquez
        </a>
      </div>
      <div className="list-none flex flex-row">
        {headerList.map((headerItem) => {
          return (
            <li className="mx-4 flex-none">
              <a href={headerItem.url}>{headerItem.name}</a>
            </li>
          );
        })}
      </div>
      {/* <div className="bottomnav">
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
        </div> */}
    </div>
  );
}

export default Header;
