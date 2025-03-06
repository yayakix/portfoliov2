import React from "react";
import Projects from "./Projects";
import Technologies from "./Technologies";
import Footer from "./Footer";
import Experience from "./Experience";

const DisplaySection = () => {
  return (
    <div class="relative">
      {/* section */}
      <article aria-labelledby="episode-1-title" class="">
        <div class="flex flex-col items-start ">
          <Experience />
        </div>
      </article>
      {/* section */}
      <article aria-labelledby="episode-1-title">
        <div class="flex flex-col items-start ">
          <Projects />
        </div>
      </article>
      {/* section */}
      <article aria-labelledby="episode-1-title">
        <Technologies />
      </article>
      <article aria-labelledby="episode-1-title">
        <Footer />
      </article>
    </div>
  );
};

export default DisplaySection;
