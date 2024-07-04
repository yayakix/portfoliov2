import React from "react";
import Projects from "./Projects";
import Technologies from "./Technologies";
import Footer from "./Footer";
import Experience from "./Experience";

const DisplaySection = () => {
  return (
    <div className="mt-10">
      <div class="relative">
        <div class="">
          <div class="">
            {/* section */}
            <article aria-labelledby="episode-1-title" class="">
              <div class="lg:px-8">
                <div class="lg:max-w-4xl">
                  <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                    <div class="flex flex-col items-start ">
                      <Experience />
                    </div>
                  </div>
                </div>
              </div>
            </article>
            {/* section */}
            <article aria-labelledby="episode-1-title" class="py-2 sm:py-6 ">
              <div class="lg:px-8">
                <div class="lg:max-w-4xl">
                  <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                    <div class="flex flex-col items-start ">
                      <Projects />
                    </div>
                  </div>
                </div>
              </div>
            </article>
            {/* section */}
            <article aria-labelledby="episode-1-title" class="sm:py-6">
              <div class="lg:px-8">
                <div class="lg:max-w-4xl">
                  <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                    <div class="flex flex-col items-start">
                      <Technologies />
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article aria-labelledby="episode-1-title" class="py-10 sm:py-12 ">
              <div class="lg:px-8">
                <div class="lg:max-w-4xl">
                  <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                    <div class="flex flex-col items-start">
                      <Footer />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplaySection;
