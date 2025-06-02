const Other = () => {

    const arr = [
        {
            objName: "AWS Certified Cloud Practitioner",
            objDate: "August 2024",
            links: [
                {
                    icon: 'bx bxl-amazon',
                    url: 'https://www.credly.com/badges/ba3b85fd-6840-42e9-9d81-2732a59bbea5/linked_in?t=shoxqp',
                    iconName: 'Amazon'
                }
            ]
        },
        {
            objName: "CodePath",
            objDate: "June 2025",
            objDetails: "I’ve been accepted into CodePath’s Intermediate Cybersecurity (CYB102) and Intermediate Technical Interview Prep (TIP102) summer courses.",
            links: [
                {
                    icon: 'bx bx-globe-alt',
                    url: 'https://www.codepath.org/?utm_term=codepath%20courses&utm_campaign=Search_Branded_Grants_Tuff&utm_source=google_ads&utm_medium=ppc&hsa_acc=5442780199&hsa_cam=20398215960&hsa_grp=154948365569&hsa_ad=668773445731&hsa_src=g&hsa_tgt=kwd-1366990116943&hsa_kw=codepath%20courses&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=20398215960&gbraid=0AAAAABzlBhstUnlRnBAiwDwtCNMkdnaAC&gclid=CjwKCAjwl_XBBhAUEiwAWK2hzk233tUNeJAQsgWOhADczLDdGRE8YxKq-ga9ZbC-wUKv_4jNRnpCYBoC3woQAvD_BwE',
                    iconName: 'Website'
                }
            ]
        },
        {
            objName: "DLAMP",
            objDate: "2025",
            objDetails: "The Deloitte Leadership Allyship & Mentorship Program (DLAMP) is a mentorship program hosted by Deloitte to connect students and consulting leaders. I was accepted into this competitive program as a member of the 2025 Cohort!",
            links: []
        }
    ]

    return (
        <section className = "font-quicksand mx-auto flex flex-col justify-center items-center py-10" id="other">
            <h1 className = "text-[#9388a2] text-3xl font-quicksand text-center py-4 mt-20">More About Me!</h1>
            <div className="bg-[#341948] p-6 shadow-lg sm:w-[90%] md:w-[80%] lg:w-[70%] max-w-[800px] mx-5 px-5">
                <h2 className = "text-[#9388a2] text-[20px] font-bold mb-6 ml-6">Certifications & Programs</h2>
                {arr.map((item, index) => (
                    <div key={index} className="grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 bg-[#110C19] p-4 mb-3 mx-5 shadow-md">
                        <div className = "ml-5">
                        <h3 className="text-[#9388a2] text-xl">{item.objName}</h3>
                        <h4 className="text-[#9388a2]">{item.objDate}</h4>
                        <p className="text-[#9388a2] mt-3">{item.objDetails}</p>
                        </div>
                        <div className="flex justify-end items-center gap-4 mt-2 mr-10">
                            {item.links.map((link, linkIndex) => (
                                <a key={linkIndex} href={link.url} target="_blank" rel="noopener noreferrer" className="text-[#9388a2] hover:text-white">
                                    <i className={`${link.icon} text-4xl`} title={link.iconName}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
        
    );
}

export default Other;
//     <h2 className="text-[#9388a2] text-2xl mb-4">Certifications & Programs</h2>

//     {arr.map((item, index) => (
//       <div key={index} className="p-4 border-b border-gray-700 last:border-b-0">
//         <h3 className="text-[#9388a2] text-lg">{item.objName}</h3>
//         <p className="text-gray-400 text-sm">{item.objDate}</p>
//         <div className="flex gap-4 mt-2">
//           {item.links.map((link, linkIndex) => (
//             <a
//               key={linkIndex}
//               href={link.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[#9388a2] hover:text-white"
//               title={link.iconName}
//             >
//               <i className={link.icon}></i>
//             </a>
//           ))}
//         </div>
//       </div>
//     ))}
//   </div>
// </section>
