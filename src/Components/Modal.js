import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Modal ({closeModal, org}) {
 if (!org) return console.log("error"); 
    
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
    <div className="font-quicksand fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4 sm:px-6 lg:px-8">
        <div
        className="bg-[#341948] p-8 shadow-lg w-full max-w-6xl overflow-y-auto"
        style={{ height: '80vh' }}
        >
            <div className="flex justify-end">
            <button
                onClick={() => closeModal(false)
                }
                className="text-[#9388A2] text-xl font-bold"
            >
                X
            </button>
            </div>

            <div className="text-[#9388A2]">
                <h1 className="text-3xl text-center font-semibold">{org.orgName}</h1>
                <h2 className="text-xl text-center font-medium mt-3">{org.orgRole}</h2>
                <div className="grid grid-cols-2 gap-8 mt-8">
                    <div className = "flex flex-col items-start ml-10">
                        <p className = "mb-5"><span className = "font-bold">Description: </span>{org.orgDescription}</p>
                        <p><span className = "font-bold">My Journey: </span>{org.orgRoleDetails}</p>
                        {org.links && org.links.length > 0 && (
                        <div className="flex justify-center gap-6 mt-6">
                            {org.links.map((link, index) => (
                            console.log(link.url),
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#341948] to-[#9388a2] text-[40px]"><a href = {link.url} target = {link.iconName}><i className={link.icon}></i></a></span>
                            ))}
                        </div>
                        )}

                    </div>
                    <div className = "flex justify-center">
                        {org.imagesArr.length > 0 && (
                        <div className = "w-[350px]">
                        <Slider {...settings} >
                            {org.imagesArr.map((img, imgIndx) => (
                                <div key={imgIndx} className="w-[350px] h-[350px] relative mx-auto">                                
                                <img
                                    src={img.imgUrl}
                                    alt={img.imgName}
                                    className="w-[350px] h-[350px] object-cover"
                                />
                                <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-sm text-center px-4 py-2">
                                    {img.caption}
                                </p>
                                </div>
                            ))}
                        </Slider>
                        </div>
                    )}
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  );

}

export default Modal;