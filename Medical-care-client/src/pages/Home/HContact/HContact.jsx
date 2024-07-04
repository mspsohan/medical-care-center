import { LuPhoneCall } from "react-icons/lu";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import { IoLocationOutline, IoMailOutline, IoTimeOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const HContact = () => {
   const location = useLocation()

   return (
      <>
         {location.pathname === '/contact' ? "" : <SectionTitle title="Get in Touch" description="Contact" />}
         <div className={`${location?.pathname === "/" ? "container" : "max-w-screen-lg"} mx-auto ${location.pathname === "/contact" ? "" : "my-20"}`}>
            <div className={`grid grid-cols-2 ${location.pathname === '/contact' ? "md:grid-cols-2" : "md:grid-cols-4"} gap-5 w-full p-2 xl:p-0`}>
               <div className="bg-[#bfd2f8] hover:bg-[#1f2b6c] text-[#1f2b6c] hover:text-[#bfd2f8] flex flex-col justify-center pl-4 gap-4 h-56 items-start rounded">
                  <LuPhoneCall className="text-4xl" />
                  <div className="flex flex-col gap-2 font-['Work_Sans'] items-start">
                     <div className="text-lg font-bold uppercase">
                        Emergency
                     </div>
                     <div className="flex flex-col gap-1 w-full items-start">
                        <div className="leading-[22.4px]">
                           (+880) 1789-123456
                        </div>
                        <div className="leading-[22.4px]">
                           (+880) 1456-123456
                        </div>
                     </div>
                  </div>
               </div>

               <div className="bg-[#bfd2f8] hover:bg-[#1f2b6c] text-[#1f2b6c] hover:text-[#bfd2f8] flex flex-col justify-center pl-4 gap-4 h-56 items-start rounded">
                  <IoLocationOutline className="text-4xl" />
                  <div className="flex flex-col gap-2 font-['Work_Sans'] items-start">
                     <div className="text-lg font-bold uppercase  ">
                        Location
                     </div>
                     <div className="flex flex-col gap-1 w-full items-start">
                        <div className="leading-[22.4px] ">123 Jhenaidah</div>
                        <div className="leading-[22.4px] ">
                           789 Jessore
                        </div>
                     </div>
                  </div>
               </div>
               <div className="bg-[#bfd2f8] hover:bg-[#1f2b6c] text-[#1f2b6c] hover:text-[#bfd2f8] flex flex-col justify-center pl-5 gap-5 h-56 items-start rounded">
                  <IoMailOutline className="text-4xl" />
                  <div className="flex flex-col gap-2 font-['Work_Sans'] items-start">
                     <div className="text-lg font-bold uppercase">Email</div>
                     <div className="flex flex-col gap-1 w-full items-start">
                        <div className="leading-[22.4px]">
                           mspsohan@gmail.com
                        </div>
                        <div className="text-sm">mahbub01304@gmail.com</div>
                     </div>
                  </div>
               </div>
               <div className="bg-[#bfd2f8] hover:bg-[#1f2b6c] text-[#1f2b6c] hover:text-[#bfd2f8] flex flex-col justify-center pl-4 gap-5 h-56 items-start rounded">
                  <IoTimeOutline className="text-4xl" />
                  <div className="flex flex-col gap-2 font-['Work_Sans'] items-start">
                     <div className="text-lg font-bold uppercase">
                        Working Hours
                     </div>
                     <div className="flex flex-col gap-1 w-full items-start">
                        <div className="leading-[22.4px]">
                           Mon-Sat 09:00-20:00
                        </div>
                        <div className="leading-[22.4px]">
                           Sunday Emergency only
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HContact;