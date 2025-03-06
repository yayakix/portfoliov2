import "../css/Footer.css";

function Footer() {
  const d = new Date();
  const year = d.getFullYear();

  const linkList = [
    {
      name: "Github",
      url: "https://github.com/yayakix",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/iyana-marquez/",
    },
    {
      name: "Resume",
      url: "https://docs.google.com/document/d/1dq3Ha8nyw1BNsVoW6hVOgXVS9kiMFIexM62yVxlVyS8/edit?usp=sharing",
    },
  ];
  return (
    <footer className="footer text-2xl py-8 bg-gray-900" id="contact">
      <div className="flex flex-col items-center space-y-6">
        <h2 className="text-pink-500 text-4xl font-bold mb-4">Contact</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {linkList.map((item) => (
            <a
              key={item.name}
              className="px-6 py-2 text-white hover:text-pink-500 transition-colors duration-300 border-2 border-pink-500 rounded-full hover:bg-pink-500/10"
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              {item.name}
            </a>
          ))}
        </div>

        <span className="copyright text-sm md:text-xl text-gray-400 mt-6">
          &copy; Iyana Marquez {year}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
