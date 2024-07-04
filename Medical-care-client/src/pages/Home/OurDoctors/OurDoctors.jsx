import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import doctor1 from "../../../assets/doctor1.png"
import doctor2 from "../../../assets/doctor2.png"
import doctor3 from "../../../assets/doctor3.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const OurDoctors = () => {
   const location = useLocation()
   return (
      <>
         <SectionTitle title="Trusted Care" description="Our Doctors" />
         <div className={`${location?.pathname === "/" ? "container" : "max-w-screen-lg"} mx-auto grid md:grid-cols-3 gap-5 mb-5 p-3`}>
            {/* 1st Card */}
            <div>
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
            </div>
            {/* 2nd Card */}
            <div>
               <img src={doctor2} alt="Doctor1" className="w-full" />
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
            </div>
            {/* 3rd Card */}
            <div>
               <img src={doctor3} alt="Doctor1" className="w-full" />
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
            </div>
         </div>
         <div className="container w-full mx-auto flex justify-center mb-10">
            <Link to="/" className="text-xl font-semibold flex items-center gap-2 hover:text-[#1F2B6C]">See All
               <FaArrowRightLong className="" /></Link>
         </div>
      </>
   );
};

export default OurDoctors;