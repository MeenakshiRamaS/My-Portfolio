import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import umdProjImg1 from "../Images/ProjectsPage/umdproj_img1.jpg";
import umdProjImg2 from "../Images/ProjectsPage/umdproj_img2.webp";
import dailyImg1 from "../Images/ProjectsPage/daily_img1.png";
import dailyImg2 from "../Images/ProjectsPage/daily_img2.png";
import pantrypalImg1 from "../Images/ProjectsPage/pantrypal_img1.png";
import pantrypalImg2 from "../Images/ProjectsPage/pantrypal_img2.jpg";

const Projects = () => {
  const arr = [
    {
      projectName: "Pantry Pal",
      projectDescription:
        "Pantry Pal is a personal project developed by my team and me during Bitcamp 2025, UMD’s annual hackathon. As busy students, we noticed that we often let ingredients go to waste because we don’t know what recipes to make with them. To solve this, we created a tool that allows users to input the ingredients they have in their pantry and fridge and receive a list of recipes they can make using those ingredients. Check out our Devpost to learn more!",
      techStack:
        "Front-End: React, Javascript, HTML/CSS & BackEnd: Firebase (Auth + Firestore), Groqcloud API, Pexel API",
      imagesArr: [
        {
          imgName: "technica_img1",
          imgUrl: pantrypalImg1,
          caption: "Technica 2025 Spons Team!",
        },
        {
          imgName: "technica_img2",
          imgUrl: pantrypalImg2,
          caption: "Me and my friend @Technica 2024",
        },
      ],
      links: [
        {
          icon: "bx  bx-globe-alt",
          url: "https://devpost.com/software/pantry-pal-w3dgin",
          iconName: "Devpost",
        },
        {
          icon: "bx bxl-github",
          url: "https://github.com/MeenakshiRamaS/Pantry-Pal",
          iconName: "GitHub",
        },
      ],
    },
    {
      projectName: "UMD Projects",
      projectDescription:
        "I have completed numerous projects for every computer science course I have taken at UMD. These projects range from basic object-oriented programming to coding Abstract Syntax Trees (ASTs). Due to UMD course policies, these projects cannot be made public. However, if you are interested in my work, please feel free to reach out!",
      techStack: "Java, C, AVR Assembly, OCaml, Rust, Python",
      imagesArr: [
        {
          imgName: "iribe_img1",
          imgUrl: umdProjImg1,
        },
        {
          imgName: "iribe_img2",
          imgUrl: umdProjImg1,
        },
      ],
      links: [],
    },
    {
      projectName: "Daily Insights",
      projectDescription:
        "Daily Insights is a dynamic website that displays various statistics for different stocks. I created this personal project as a way for me to refresh my API Integration and React Development skills. I have a growing interest in the stock market and thought this the perfect opportunity to not only practice my dynamic website development tools but also learn more about how the stock prices vary during the day! Click on the icons to see my live website or the my github repository!",
      techStack: "React, Typescript, Javascript, HTML/CSS, Vite, GitHub Pages",
      imagesArr: [
        {
          imgName: "daily_img1",
          imgUrl: dailyImg1,
        },
        {
          imgName: "daily_img2",
          imgUrl: dailyImg2,
        },
      ],
      links: [
        {
          icon: "bx bx-globe-alt",
          url: "https://meenakshiramas.github.io/Daily-Insights/",
          iconName: "Website",
        },
        {
          icon: "bx bxl-github",
          url: "https://github.com/MeenakshiRamaS/Daily-Insights",
          iconName: "GitHub",
        },
      ],
    },
    {
      projectName: "DreamJar",
      projectDescription:
        "I worked with team members as part of a Capital One Fintech Future Hackathon to build a web and mobile application, Dream Jar, for collaborative investment and budgeting. We presented project to group of over 50 people and won 2nd place!",
      techStack: "Spons 2025 Co-Director",
      imagesArr: [
        {
          imgName: "technica_img1",
          imgUrl: umdProjImg1,
          caption: "Technica 2025 Spons Team!",
        },
        {
          imgName: "technica_img2",
          imgUrl: umdProjImg2,
          caption: "Me and my friend @Technica 2024",
        },
      ],
      links: [],
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <section
      className="font-quicksand scroll-mt-20"
      id="projects"
      style={{ backgroundColor: "#110C19" }}
    >
      <h2 className="text-[#9388a2] text-3xl font-quicksand text-center py-4 mt-20">
        Projects
      </h2>
      <div className="flex flex-col items-center justify-center">
        {arr.map((project, index) => (
          <div
            key={index}
            className="grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 w-full max-w-[80vw] p-4 m-4 border-2 border-[#9388a2] shadow-lg auto-rows-auto"
          >
            <div className="ml-6">
              <h3 className="text-[#9388a2] text-[3.5vh]">
                {project.projectName}
              </h3>
              <p className="text-[#9388a2] mt-5 text-[2vh]">
                <span className="font-bold">Description: </span>
                {project.projectDescription}
              </p>
              <p className="text-[#9388a2] mt-3 text-[2vh]">
                <span className="font-bold">Tech Stack: </span>
                {project.techStack}
              </p>
              <div className="links">
                {project.links && project.links.length > 0 && (
                  <div className="flex justify-left gap-6">
                    {project.links.map(
                      (link, index) => (
                        console.log(link.url),
                        (
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#341948] to-[#9388a2] text-[40px]">
                            <a href={link.url} target={link.iconName}>
                              <i className={link.icon}></i>
                            </a>
                          </span>
                        )
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center justify-center h-full">
              {project.imagesArr.length > 0 && (
                <div className="max-w-[35vh]">
                  <Slider {...settings}>
                    {project.imagesArr.map((img, imgIndx) => (
                      <div
                        key={imgIndx}
                        className="w-[35vh] h-[35vh] relative mx-auto"
                      >
                        <img
                          src={img.imgUrl}
                          alt={img.imgName}
                          className="w-[35vh] h-[35vh] object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
