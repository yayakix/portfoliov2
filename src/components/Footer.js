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
    <footer className="footer text-2xl " id="contact">
      <div className="flex justify-center items-center ">
        <h2
          className=" text-pink-500 flex justify-center text-3xl"
          id="projects"
        >
          Contact
        </h2>
      </div>

      <div className="group ">
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

      <span className="copyright text-sm md:text-xl self-end">
        &copy; Iyana Marquez {year}{" "}
      </span>
    </footer>
  );
}

export default Footer;
