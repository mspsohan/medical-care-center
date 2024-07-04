import { useLocation } from "react-router";
import banner from "../../assets/Rectangle 3 (1).png"
import PageBanner from "../../shared/PageBanner/PageBanner";
import servicec1 from '../../assets/servvices1.png'
import serviceIcon from '../../assets/medical1.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import HContact from "../Home/HContact/HContact";
const services = [1, 2, 3, 4, 5, 6]
const Services = () => {
   const location = useLocation()
   const path = location.pathname.replace("/s", "/ S")
   return (
      <>
         <PageBanner banner={banner} path={path} value="Our Services" />
         <div className="max-w-screen-lg mx-auto mt-20 grid lg:grid-cols-3 gap-5 p-3">
            {
               services.map(service => <div key={service} className="shadow-[0px_0px_0px_.5px_#2b6cb0] hover:shadow-[0px_0px_0px_2px_#2b6cb0] rounded-md group">
                  <div className="relative ">
                     <img src={servicec1} alt="" />
                     <div className="group-hover:bg-[#1924647c] duration-500 absolute w-full h-full top-0 left-0"></div>
                     <Link className="absolute -bottom-6 group-hover:bottom-[40%] right-5 group-hover:right-[40%] bg-[#1F2B6C] p-3 rounded-full duration-500">
                        <img src={serviceIcon} alt="" />
                     </Link>
                  </div>
                  <div className="pt-10 px-3 pb-3">
                     <h4 className="text-[20px] lg:text-[26px] pb-2">Free Checkup</h4>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.</p>
                     <button className="flex items-center gap-3 pt-5">Learn More <FaArrowRightLong /></button>
                  </div>
               </div>)
            }
         </div>
         <HContact />
      </>
   );
};

export default Services;