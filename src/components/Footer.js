import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";

function Footer() {
  const { darkMode } = useTheme();
  const year = new Date().getFullYear();

  const externalLinks = [
    { name: "GitHub", url: "https://github.com/yayakix" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/iyana-marquez/" },
  ];

  const siteLinks = [
    { name: "Home", to: "/" },
    { name: "Journey", to: "/journey" },
    { name: "Experience", to: "/experience" },
    { name: "Learning", to: "/learning" },
    { name: "Projects Archive", to: "/projects" },
  ];

  return (
    <footer className={`py-12 px-4 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className={`font-semibold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>
              Iyana Marquez
            </h3>
            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Software Engineer focused on agent quality, testing, and support.
            </p>
          </div>

          {/* Site Links */}
          <div>
            <h4 className={`text-sm font-semibold mb-3 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              Site
            </h4>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className={`text-sm transition-colors ${
                      darkMode
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className={`text-sm font-semibold mb-3 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              Connect
            </h4>
            <ul className="space-y-2">
              {externalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm transition-colors ${
                      darkMode
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className={`pt-6 border-t ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
          <p className={`text-sm text-center ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
            © {year} Iyana Marquez
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
