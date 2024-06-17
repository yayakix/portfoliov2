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
      url: "https://docs.google.com/document/d/10DHq4Xq6HKmtkbnLC8-JJA_4nqbkPZ-RNV2bcQ6QnhQ/edit?usp=sharing",
    },
  ];
  return (
    <footer className="footer text-xl flex flex-col p-4 h-48">
      <span className="foottitle text-center">Lets Connect.</span>

      <div className="group flex">
        {linkList.map((item) => {
          return (
            <a
              className="mx-2"
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              {item.name}
            </a>
          );
        })}
      </div>

      <span className="copyright text-sm self-end">
        &copy; Iyana Marquez {year}{" "}
      </span>
    </footer>
  );
}

export default Footer;
