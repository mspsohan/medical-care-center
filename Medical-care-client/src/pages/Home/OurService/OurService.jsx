import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import servivce1 from '../../../assets/service1.png'
import servivce2 from '../../../assets/service2.png'
import medical1 from '../../../assets/medical1.png'
import medical2 from '../../../assets/medical2.png'
import medical3 from '../../../assets/medical3.png'
import medical4 from '../../../assets/medical4.png'
import { Link } from "react-router-dom";
import { CircleRounded } from "@mui/icons-material";
const OurService = () => {
   return (
      <>
         <SectionTitle title="Care you Can Believe in" description="Our Services" />
         <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 mt-20 px-3 lg:px-0">
            <div className="lg:col-span-2 w-full border grid grid-cols-2">
               <div className="hover:bg-[#1F2B6C] lg:col-span-2 hover:text-white h-[105px] text-center flex flex-col justify-center itece">
                  <img src={medical1} alt="medical1" className="w-12 mx-auto" />
                  Free Checkup</div>
               <div className="hover:bg-[#1F2B6C] lg:col-span-2 hover:text-white h-[105px] text-center flex flex-col justify-center itece">
                  <img src={medical2} alt="medical2" className="w-12 mx-auto" />
                  Cardiogram</div>
               <div className="hover:bg-[#1F2B6C] lg:col-span-2 hover:text-white h-[105px] text-center flex flex-col justify-center itece">
                  <img src={medical3} alt="medical3" className="w-12 mx-auto" />
                  Dna Testing</div>
               <div className="hover:bg-[#1F2B6C] lg:col-span-2 hover:text-white h-[105px] text-center flex flex-col justify-center itece">
                  <img src={medical4} alt="medical4" className="w-12 mx-auto" />
                  Blood Bank</div>
               <div className="bg-[#1F2B6C] col-span-2 text-white w-full h-16 flex justify-center items-center">
                  <Link className="text-xl">View All</Link>
               </div>
            </div>
            <div className="lg:col-span-7 p-3">
               <h3 className="text-3xl mt-5">A passion for putting patrients first.</h3>
               <div className="flex justify-between items-center p-5 ">
                  <ul className="space-y-3">
                     <li><CircleRounded sx={{ color: '#1F2B6C', fontSize: "16px" }} /> A Passion for healing</li>
                     <li><CircleRounded sx={{ color: '#1F2B6C', fontSize: "16px" }} /> All out best</li>
                     <li><CircleRounded sx={{ color: '#1F2B6C', fontSize: "16px" }} /> A legacy of Excellence</li>
                  </ul>
                  <ul className="space-y-3">
                     <li> <CircleRounded sx={{ color: '#1F2B6C', fontSize: "16px" }} /> 5-star care</li>
                     <li> <CircleRounded sx={{ color: '#1F2B6C', fontSize: "16px" }} /> Believe in us</li>
                     <li><CircleRounded sx={{ color: '#1F2B6C', fontSize: "16px" }} /> Allways caring</li>
                  </ul>
               </div>
               <p className="text-base ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
               <p className="text-base  mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.</p>
            </div>
            <div className="lg:col-span-3 space-y-5">
               <img src={servivce1} alt="service 1" className="w-full max-h-[230px] " />
               <img src={servivce2} alt="service 2" className="w-full max-h-[230px] " />
            </div>
         </div>
      </>
   );
};

export default OurService;