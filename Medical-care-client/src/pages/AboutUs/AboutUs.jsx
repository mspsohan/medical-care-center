import { useLocation } from "react-router-dom";
import banner from "../../assets/Rectangle 3.png"
import PageBanner from "../../shared/PageBanner/PageBanner";
import about1 from "../../assets/about1.png"
import background from "../../assets/aboutbg.png"
import { CircleRounded } from "@mui/icons-material";
import { IoMdQuote } from "react-icons/io";
import OurDoctors from "../Home/OurDoctors/OurDoctors";
import News from "../Home/News/News";
import HContact from "../Home/HContact/HContact";

const AboutUs = () => {
   const location = useLocation()
   const path = location.pathname.replace("/a", "/ A")
   return (
      <>
         <PageBanner banner={banner} path={path} value="About Us" />
         <div className="max-w-screen-lg mx-auto mt-20 grid lg:grid-cols-2 gap-5 p-3">
            <div>
               <img src={about1} alt="About" />
            </div>
            <div>
               <h3 className="text-[18px] font-sans uppercase tracking-wider font-semibold">Welcome to Health Aid</h3>
               <h2 className="text-[34px] lg:text-[48px] font-yeseva ">Best Care for Your Good Health</h2>
               <div className="flex justify-between items-center p-3 ">
                  <ul className="space-y-3">
                     <li><CircleRounded sx={{ color: '#1F2B6C', fontSize: "16px" }} /> A Passion for healing</li>
                     <li><CircleRounded sx={{ color: '#1F2B6C', fontSize: "16px" }} /> All out best</li>
                     <li><CircleRounded sx={{ color: '#1F2B6C', fontSize: "16px" }} /> Allways caring</li>
                  </ul>
                  <ul className="space-y-3">
                     <li> <CircleRounded sx={{ color: '#1F2B6C', fontSize: "16px" }} /> 5-star care</li>
                     <li> <CircleRounded sx={{ color: '#1F2B6C', fontSize: "16px" }} /> Believe in us</li>
                     <li><CircleRounded sx={{ color: '#1F2B6C', fontSize: "16px" }} /> A legacy of Excellence</li>
                  </ul>
               </div>
               <p className="text-base ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
               <p className="text-base  mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.</p>
            </div>
         </div>
         <div className="min-h-[400px]" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', marginTop: '40px', marginBottom: '40px' }}>
            <div className="h-full bg-[#1F2B6C] opacity-90 p-3">
               <div className="max-w-screen-lg mx-auto  py-[68px] md:py-24">
                  <div className="max-w-[658px] mx-auto flex flex-col justify-center items-center space-y-3 text-center text-white">
                     <p className="text-7xl font-bold font-serif text-[#159EEC]"><IoMdQuote className="text-white" /></p>
                     <p className="text-[18px]  lg:text-[22px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
                     <p className="h-[2px] w-48 bg-white"></p>
                     <p>Sohan Perves</p>
                     <div className="flex justify-center items-center gap-2">
                        <CircleRounded sx={{ color: 'white', fontSize: "16px", cursor: 'pointer' }} />
                        <CircleRounded sx={{ color: 'white', fontSize: "16px", cursor: 'pointer' }} />
                        <CircleRounded sx={{ color: 'white', fontSize: "16px", cursor: 'pointer' }} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <OurDoctors />
         <News />
         <HContact />
      </>
   );
};

export default AboutUs;