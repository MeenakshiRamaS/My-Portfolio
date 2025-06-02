import React from 'react';
import ramenImg from '../Images/AboutPage/ramen.jpg';
import cherryImg from '../Images/AboutPage/cherry.JPG';
import skatingImg from '../Images/AboutPage/skating.JPG';
import terpsImg from '../Images/AboutPage/terps.jpg';
import mckImg from '../Images/AboutPage/mckeldin.jpg';
import pickleballImg from '../Images/AboutPage/pickleball.jpg';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {

    const arr = [
        {
            imgName: "ramen",
            imgUrl: ramenImg,
            caption: "I love ramen!",
        },
        {
            imgName: "cherry",
            imgUrl: cherryImg,
            caption: "I love the cherry blossoms in DC!",
        },
        {
            imgName: "skating",
            imgUrl: skatingImg,
            caption: "I fear im not the best skater!",
        },
        {
            imgName: "mckledin",
            imgUrl: mckImg,
            caption: "Live Love Laugh Mckeldin Library!",
        },
        {
            imgName: "pickleball",
            imgUrl: pickleballImg,
            caption: "I'm the best pickleball player there is:)",
        },
        {
            imgName: "terps",
            imgUrl: terpsImg,
            caption: "#terpforlife!!",
        }
    ]

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
            {
      breakpoint: 640, // < 640px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    }
    ]
  };

    return (
<section className="scroll-mt-16" id="about" style={{ backgroundColor: '#110C19', position: 'relative', top: '-120px', paddingTop: '190px' }}>
  <h2 className="text-[#9388a2] text-3xl font-quicksand text-center py-4">About</h2>
  <div className="w-full sm:w-[600px] mx-auto px-4 mx-auto">
    <Slider {...settings}>
      {arr.map((i) => (
        <div key={i.imgName} className="bg-[#9388a2] overflow-hidden shadow-md w-[90%] sm:w-[200px] h-[200px] mx-auto flex flex-col">
            <img
              src={i.imgUrl}
              alt={i.imgName}
              className="w-full h-[150px] object-cover"
            />
            <div className="h-[50px] p-1 flex items-center justify-center">
              <p className="text-[#341948] text-[12px] font-medium text-center">
                {i.caption}
              </p>
            </div>
        </div>
      ))}
    </Slider>
  </div>
  <p className = "text-[#9388a2] text-lg font-quicksand text-center px-4 py-6 max-w-2xl mx-auto">Welcome to my portfolio — I’m Meena!</p>
  <p className = "text-[#9388a2] text-lg font-quicksand text-center px-4 max-w-2xl mx-auto">
    I’m currently studying <span className="font-bold">Computer Science and
    Computational Finance</span> at the University of Maryland,
    College Park. My passion lies in programming with
    purpose, which is why I’m actively involved in
    student organizations that focus on technology
    for social good (keep scrolling to learn more!).
    I’m always looking to grow my technical skills
    and dive into new opportunities — whether it’s
    building an app for a startup or attending
    conferences on the latest innovations. I aspire
    to work at the intersection of technology, finance,
    and business to create meaningful impact. While
    my LinkedIn, GitHub, and resume cover the professional
    side, this website is meant to give you a portal
    into me — who I am beyond the bullet points, what I
    enjoy, and some not so funny facts.
  </p>
</section>



    )
}

export default About;