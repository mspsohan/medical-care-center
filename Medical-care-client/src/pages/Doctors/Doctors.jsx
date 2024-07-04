import { useLocation } from "react-router";
import banner from "../../assets/Rectangle 3.png"
import PageBanner from "../../shared/PageBanner/PageBanner";
import doctor1 from "../../assets/doctor1.png"
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import News from "../Home/News/News";
import HContact from "../Home/HContact/HContact";
import background from "../../assets/aboutbg.png"
import { CircleRounded } from "@mui/icons-material";
import { IoMdQuote } from "react-icons/io";

const doctors = [1, 2, 3, 4, 5, 6]
const Doctors = () => {
   const location = useLocation()
   const path = location.pathname.replace("/d", "/ D")
   return (
      <>
         <PageBanner banner={banner} path={path} value="Our Doctors" />
         <div className="max-w-screen-lg mx-auto grid lg:grid-cols-3 gap-5 py-32 p-3">
            {
               doctors.map(doctor => <div key={doctor}>
                  <img src={doctor1} alt="Doctor1" className="w-full" />
                  <div className="bg-[#BFD2F8] py-10 w-full flex flex-col gap-3 justify-center items-center ">
                     <h3 className="text-2xl font-medium">Doctor's Name</h3>
                     <h4 className="text-3xl font-bold uppercase leading-8 tracking-wider">Neurology</h4>
                     <div className="space-x-5 flex items-center">
                        <Link to="https://linkedin.com" className="p-3 bg-[#1F2B6C] rounded-full">
                           <FaLinkedinIn style={{ color: 'white' }} className="text-2xl text-white" />
                        </Link>
                        <Link to="https://facebook.com" className="p-3 bg-[#1F2B6C] rounded-full">
                           <FaFacebookF style={{ color: 'white' }} className="text-2xl text-white" />
                        </Link>
                        <Link to="https://instagram.com" className="p-3 bg-[#1F2B6C] rounded-full">
                           <FaInstagram style={{ color: 'white' }} className="text-2xl text-white" />
                        </Link>
                     </div>
                  </div>
                  <button className="bg-[#1F2B6C] w-full text-white py-4 rounded-b-md text-xl flex items-center justify-center">View Profile</button>
               </div>)
            }
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
         <News />
         <HContact />
      </>
   );
};

export default Doctors;