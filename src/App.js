import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "./index.css";
import "./App.css";

import {
  ScrollContainer,
  ScrollPage,
  Animator,
  batch,
  Fade,
  Sticky,
} from "react-scroll-motion";

import pfpImg from "./Images/pfp.jpg";

import About from "./Components/About";
import Experiences from "./Components/Experiences";
import Projects from "./Components/Projects";
import Other from "./Components/Other";

function App() {
  return (
    <BrowserRouter>
      <ScrollContainer>
        <div
          className="font-quicksand min-h-screen"
          style={{ backgroundColor: "#110C19" }}
        >
          <nav className="fixed font-quicksand top-0 left-0 w-screen backdrop-blur-md bg-gradient-to-b from-[#341948] via-[#000000] to-[#110C19] z-50">
            <div className="flex justify-center items-center p-4">
              <HashLink smooth to="#about" className="text-white px-4 py-2">
                About
              </HashLink>
              <HashLink
                smooth
                to="#experiences"
                className="text-white px-4 py-2"
              >
                Experiences
              </HashLink>
              <HashLink smooth to="#projects" className="text-white px-4 py-2">
                Project
              </HashLink>
              <HashLink smooth to="#other" className="text-white px-4 py-2">
                Other
              </HashLink>
            </div>
          </nav>
          <ScrollPage page={0}>
            <Animator animation={batch(Fade(), Sticky())}>
              <div
                className="font-quicksand font-medium flex items-center justify-center min-h-screen"
                style={{ backgroundColor: "#110C19" }}
              >
                <div className="text-center text-white space-y-4">
                  <h1 className="text-3xl text-[#9388a2]">Hi, I'm Meena!</h1>
                  <div className="p-1.5 bg-gradient-to-r from-[#341948] via-[#9388a2] to-[#341948] rounded-full inline-block">
                    <img
                      src={pfpImg}
                      alt="Meena"
                      className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full object-cover mx-auto"
                    />
                  </div>
                  <h2 className="text-2xl text-[#9388a2]">
                    Programming with Purpose
                  </h2>

                  <div className="flex justify-center gap-6 pt-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#341948] to-[#9388a2] text-[40px] hover:text-[#000000">
                      <a
                        href="https://www.linkedin.com/in/meenakshi-r-a71296243/"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin-square"></i>
                      </a>
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#341948] to-[#9388a2] text-[40px]">
                      <a
                        href="https://github.com/MeenakshiRamaS"
                        target="_blank"
                      >
                        <i className="bx bxl-github"></i>
                      </a>
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#341948] to-[#9388a2] text-[40px]">
                      <a
                        href="mailto:rsubbumeena@yahoo.com"
                        title="Send Me an Email"
                      >
                        <i className="bx bx-envelope"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage page={1}>
            <About />
          </ScrollPage>

          <Experiences />

          <Projects />
          <Other />
          <div>
            <footer className="bg-gradient-to-b from-[#110C19] to-[#000000] border-4 border-black text-white text-center py-4">
              <div className="flex justify-center gap-6 pt-2">
                <span className="text-transparent bg-clip-text bg-[#9388a2] text-[40px] hover:text-[#000000">
                  <a
                    href="https://www.linkedin.com/in/meenakshi-r-a71296243/"
                    target="_blank"
                  >
                    <i className="bx bxl-linkedin-square"></i>
                  </a>
                </span>
                <span className="text-transparent bg-clip-text bg-[#9388a2] text-[40px]">
                  <a href="https://github.com/MeenakshiRamaS" target="_blank">
                    <i className="bx bxl-github"></i>
                  </a>
                </span>
                <span className="text-transparent bg-clip-text bg-[#9388a2] text-[40px]">
                  <a
                    href="mailto:rsubbumeena@yahoo.com"
                    title="Send Me an Email"
                  >
                    <i className="bx bx-envelope"></i>
                  </a>
                </span>
              </div>
              <p className="text-sm mt-6 mb-6">
                © 2025 Meena. All rights reserved.
              </p>
              <p className="text-sm mt-6 mb-6">
                Made with React {"{"} React Router, Slider, Scroll Motion {"}"},
                JSX, Tailwind CSS, Vercel, Node.js, npm
              </p>
            </footer>
          </div>
        </div>
      </ScrollContainer>
    </BrowserRouter>
  );
}

export default App;
