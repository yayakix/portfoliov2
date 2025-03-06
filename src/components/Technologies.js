import "../css/Tech.css";
import { useSpring, animated } from "@react-spring/web";
import { motion, useTime, useTransform } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../ThemeContext";

function Technologies() {
  const { darkMode } = useTheme();
  const [hovered, setHovered] = useState(false);
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  const iconList = [
    { id: 0, icon: "devicon-react-original-wordmark" },
    { id: 1, icon: "devicon-javascript-plain" },
    { id: 2, icon: "devicon-html5-plain-wordmark" },
    { id: 3, icon: "devicon-css3-plain-wordmark" },
    { id: 4, icon: "devicon-python-plain-wordmark" },
    { id: 5, icon: "devicon-django-plain-wordmark colored" },
    { id: 6, icon: "devicon-express-original-wordmark colored" },
    { id: 7, icon: "devicon-mongodb-plain-wordmark" },
    { id: 8, icon: "devicon-nodejs-plain-wordmark" },
    { id: 9, icon: "devicon-npm-original-wordmark" },
    { id: 10, icon: "devicon-jquery-plain-wordmark" },
    { id: 11, icon: "devicon-firebase-plain-wordmark" },
    { id: 12, icon: "devicon-materialui-plain" },
    { id: 13, icon: "devicon-sass-original" },
    { id: 14, icon: "devicon-postgresql-plain" },
    { id: 15, icon: "devicon-heroku-original-wordmark" },
    { id: 16, icon: "devicon-git-plain-wordmark" },
    { id: 17, icon: "devicon-figma-plain" },
    { id: 18, icon: "devicon-canva-original" },
    { id: 19, icon: "devicon-typescript-plain" },
  ];

  return (
    <div
      className={`py-16 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
      id="skills"
    >
      <div className="flex flex-col items-center mb-12">
        <h2
          className={`text-4xl font-bold mb-4 ${
            darkMode ? "text-pink-400" : "text-pink-500"
          }`}
        >
          Technical Skills
        </h2>
        <div className="w-24 h-1 bg-pink-500 rounded"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {iconList.map((icon) => (
            <div key={icon.id} className="flex justify-center">
              <div
                className={`p-6 rounded-lg transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-800/30 hover:shadow-lg hover:shadow-pink-500/20"
                    : "bg-white hover:shadow-lg hover:shadow-pink-500/20"
                }`}
              >
                <motion.div
                  style={hovered ? { rotate } : {}}
                  className={`text-4xl sm:text-5xl flex justify-center ${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  <i
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className={`${icon.icon} hover:text-pink-500 transition-colors duration-300`}
                  ></i>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
