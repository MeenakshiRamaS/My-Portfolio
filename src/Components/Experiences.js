import { useState } from "react";
import Modal from "./Modal";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import technicaImg1 from "../Images/ExperiencesPage/technica_img1.jpg";
import technicaImg2 from "../Images/ExperiencesPage/technica_img2.jpg";
import technicaImg3 from "../Images/ExperiencesPage/technica_img3.jpg";
import technicaImg4 from "../Images/ExperiencesPage/technica_img4.jpg";

import questImg1 from "../Images/ExperiencesPage/quest_img1.JPG";
import questImg2 from "../Images/ExperiencesPage/quest_img2.JPG";
import questImg3 from "../Images/ExperiencesPage/quest_img3.JPG";
import questImg4 from "../Images/ExperiencesPage/quest_img4.jpg";
import questImg5 from "../Images/ExperiencesPage/quest_img5.jpg";

import hackImg1 from "../Images/ExperiencesPage/hack_img1.jpg";
import hackImg2 from "../Images/ExperiencesPage/hack_img2.jpg";
import hackImg3 from "../Images/ExperiencesPage/hack_img3.png";

import peratonImg1 from "../Images/ExperiencesPage/peraton_img1.png";
import peratonImg2 from "../Images/ExperiencesPage/peraton_img2.png";

import cstaImg1 from "../Images/ExperiencesPage/csta_img1.webp";
import cstaImg2 from "../Images/ExperiencesPage/csta_img2.jpg";

import awsImg1 from "../Images/ExperiencesPage/aws_img1.JPG";
import awsImg2 from "../Images/ExperiencesPage/aws_img2.jpg";
import awsImg3 from "../Images/ExperiencesPage/aws_img3.jpg";

const Experiences = () => {
  const arr = [
    {
      orgName: "Technica",
      orgDescription:
        "Technica is the world’s largest hackathon for underrepresented genders. Every fall, hackers from around the world join us—both in person and virtually—to bring their visions to life!",
      orgRole: "Spons 2025 Co-Director",
      orgRoleDetails:
        "I joined Technica as a Sponsorship Organizer in 2024 and now serve as one of the Sponsorship Co-Directors for Technica 2025. If you're interested in sponsoring our hackathon, I’d love to connect with you! Feel free to check out our website below!",
      imagesArr: [
        {
          imgName: "technica_img1",
          imgUrl: technicaImg1,
          caption: "Technica 2025 Spons Team!",
        },
        {
          imgName: "technica_img2",
          imgUrl: technicaImg2,
          caption: "Me and my friend @Technica 2024",
        },
        {
          imgName: "technica_img3",
          imgUrl: technicaImg3,
          caption: "Our Technica 2024 Spons Team!",
        },
        {
          imgName: "technica_img4",
          imgUrl: technicaImg4,
          caption: "Spons in action at Technica 2024",
        },
      ],
      links: [
        {
          icon: "bx  bx-globe-alt",
          url: "https://gotechnica.org/sponsor",
          iconName: "Website",
        },
      ],
    },
    {
      orgName: "QUEST Honors",
      orgDescription:
        "The Quality Enhancement Systems and Teams (QUEST) Honors Program is a multidisciplinary, hands-on program at the University of Maryland that brings together students from business, engineering, and computer science to solve real-world problems through team-based projects and experiential learning.",
      orgRole: "Cohort 44 + QCorp",
      orgRoleDetails:
        "I am a member of Cohort 44 and had incredible the opportunity to build my project management and design thinking skills this past semester. Click here to take a look at my team's project! I am also a member of the social organization QUEST Corporate. As part of QCorp I work to build strong relations with our corporate partners and plan events such as our Annual Fall Networking Event. If you are interested in attending as a sponsor, please feel free to reach out!",
      imagesArr: [
        {
          imgName: "quest_pres_group1",
          imgUrl: questImg1,
          caption: "My wonderful QUEST team!",
        },
        {
          imgName: "quest_pres",
          imgUrl: questImg2,
          caption: "My team's final product",
        },
        {
          imgName: "quest_pres_group2",
          imgUrl: questImg3,
          caption: "Our team and product!",
        },
        {
          imgName: "quest_cohort",
          imgUrl: questImg4,
          caption: "My incredible cohort!",
        },
        {
          imgName: "quest_camp",
          imgUrl: questImg5,
          caption: "Me and my team at QUEST Camp!",
        },
      ],
      links: [
        {
          icon: "bx bxl-linkedin-square",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7326076914945638400/",
          iconName: "LinkedIn",
        },
      ],
    },
    {
      orgName: "Hack4Impact",
      orgDescription:
        "Hack4Impact is a national, a student-run 501(c)(3) organization dedicated to building software for social impact and this is the UMD Chapter. Hack4Impact partners with nonprofits every semester to build free software solutions to help NPOs better serve their communities. Feel free to check out our website below!",
      orgRole: "Sourcing + Bootcamp",
      orgRoleDetails:
        "I joined Hack4Impact-UMD as a Sourcing Team Member in Fall 2024 and have continued my journey in the organization. I graduated from the Bootcamp in Spring 2025 and am eager to work in a project team as an engineer or PM this fall!",
      imagesArr: [
        {
          imgName: "hack_sp25_showcase",
          imgUrl: hackImg1,
          caption: "The Spring 2025 Showcase",
        },
        {
          imgName: "hack_microsoft_visit",
          imgUrl: hackImg2,
          caption: "Our visit to the Reston Microsoft Garage",
        },
        {
          imgName: "hack_bootcamp_grad",
          imgUrl: hackImg3,
          caption: "Spring 2025 Bootcamp Graduation!",
        },
      ],
      links: [
        {
          icon: "bx  bx-globe-alt",
          url: "https://umd.hack4impact.org/",
          iconName: "Website",
        },
      ],
    },
    {
      orgName: "Peraton",
      orgDescription: "Peraton is a national security and technology company.",
      orgRole: "SWE Co-Op Spring 2026",
      orgRoleDetails:
        "I will be joining Peraton as a Software Engineer in this January for a spring semester co op. I will be involved in designing and developing secure technology solutions in an Agile software development environment using, cybersecurity principles, and cloud computing tools. I will collaborate with interdisciplinary teams to engineer satellite ground systems and information management platforms while applying foundational knowledge in computer systems and cloud computing!",
      imagesArr: [
        {
          imgName: "peraton_logo1",
          imgUrl: peratonImg1,
          caption: "Excited to join the team next spring!",
        },
        {
          imgName: "peraton_logo2",
          imgUrl: peratonImg2,
          caption: "Excited to join the team next spring!",
        },
      ],
      links: [],
    },
    {
      orgName: "UMD CS Department",
      orgDescription:
        "The UMD College of Computer, Mathematical, and Natural Sciences (CMNS) employs a diverse group of teaching assistants for computer science courses. These assistants are either graduate students or computer science undergraduate students who have completed the respective courses with a final grade of A.",
      orgRole: "Teaching Assistant",
      orgRoleDetails:
        "I worked under Professor Elias Gonzalez as a Java Object-Oriented Programming (OOP) Teaching Assistant in Fall 2024. I was responsible for teaching students object oriented programming concepts in Java during office hours, helping debug coding projects and assignments, answering questions on online platform Piazza, and grading project work and assignments required for the course. I will be continuing my position this fall!",
      imagesArr: [
        {
          imgName: "csta_img1",
          imgUrl: cstaImg1,
          caption: "UMD CS Department",
        },
        {
          imgName: "csta_img1",
          imgUrl: cstaImg2,
          caption: "Brendan Iribe Center for Computer Science and Engineering",
        },
      ],
      links: [],
    },
    {
      orgName: "AWS Cloud Clubs",
      orgDescription:
        "AWS has a series of student-led Cloud Clubs across the world and this is the UMD Chapter. We host beginner friendly workshops and provide our members resources for AWS certifications!",
      orgRole: "Prev President/Cloud Captain",
      orgRoleDetails:
        "I joined this organization as a member in Fall 2023 and became the President for the 2024-2025 academic year. One of our key features was representing our club in Arlington at the Annual AWS Community Day this past fall!",
      imagesArr: [
        {
          imgName: "aws_pres1",
          imgUrl: awsImg1,
          caption: "Meet our 2024 AWS team!",
        },
        {
          imgName: "aws_pres2",
          imgUrl: awsImg2,
          caption: "Successful workshop at the DMV 2024 AWS Community Day!",
        },
        {
          imgName: "aws_pres3",
          imgUrl: awsImg3,
          caption: "This is from everyone who attended the event!",
        },
      ],
      links: [
        {
          icon: "bx bxl-linkedin-square",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7259236868150411264/",
          iconName: "LinkedIn",
        },
        {
          icon: "bx  bx-globe-alt",
          url: "https://aws.amazon.com/developer/community/students/cloudclubs/?community-captains-all.sort-by=item.additionalFields.sortPosition&community-captains-all.sort-order=asc&awsf.filter-location=*all&awsf.filter-year=*all",
          iconName: "Website",
        },
      ],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  // I used a useState for modal visibility
  const [openModal, setOpenModal] = useState(false);
  const [currOrg, setCurrOrg] = useState(null);

  const handleCloseModal = () => {
    setOpenModal(false);
    setCurrOrg(null);
  };

  return (
    <section
      className="font-quicksand scroll-mt-20"
      id="experiences"
      style={{ backgroundColor: "#110C19" }}
    >
      <h2 className="text-[#9388a2] text-3xl font-quicksand text-center py-4 mt-20 mb-2">
        Experiences
      </h2>
      <div className="px-8 max-w-6xl mx-auto">
        <p className="text-[#9388a2] text-sm font-quicksand text-left mb-2">
          *Click the experience for more information!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {arr.map((org, orgIndx) => (
            <div
              key={orgIndx}
              onClick={() => {
                setCurrOrg(org);
                setOpenModal(true);
              }}
              className="group bg-[#9388a2] relative h-64 shadow-md overflow-hidden transition duration-300 hover:scale-[1.02] relative flex items-center justify-center"
            >
              <div className="p-4 transition-opacity duration-300 justify-center items-center text-center">
                <h3 className="text-[#341948] text-xl font-semibold">
                  {org.orgName}
                </h3>
                <p className="text-[#341948] mt-1">{org.orgRole}</p>
              </div>
              {org.imagesArr.length > 0 && (
                <div className="w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Slider {...settings}>
                    {org.imagesArr.map((img, imgIndx) => (
                      <div key={imgIndx} className="w-[42vw] h-[32vh] relative">
                        <img
                          src={img.imgUrl}
                          alt={img.imgName}
                          className="absolute w-full h-full object-cover"
                        />
                        <p className="absolute bottom-1 left-0 w-full bg-black bg-opacity-50 text-white text-sm text-center flex justify-center items-center px-9 py-4">
                          {img.caption}
                        </p>
                      </div>
                    ))}
                  </Slider>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {openModal && currOrg && (
        <Modal closeModal={handleCloseModal} org={currOrg} />
      )}
    </section>
  );
};

export default Experiences;
