import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import news1 from "../../../assets/news1.png"
import { FaArrowRightLong, FaEye, FaRegHeart } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const News = () => {
   const news = [1, 2, 3, 4]
   const location = useLocation()
   console.log(location.pathname)
   return (
      <>
         <SectionTitle title="Better information, Better health" description="News" />
         <div className={`${location?.pathname === "/" ? "container" : "max-w-screen-lg"} mx-auto grid lg:grid-cols-2 gap-5 mb-5 p-3`}>
            {
               news.map(item =>
                  <div key={item} className="flex items-center gap-5 shadow-[0px_0px_0px_.5px_#2b6cb0] hover:shadow-[0px_0px_0px_2px_#2b6cb0] rounded-md cursor-pointer">
                     <img src={news1} alt="News" />
                     <div className="space-y-4">
                        <p className="text-[14px]">Monday 05, September 2021 | By Author</p>
                        <h3 className="text-xl font-medium">This Article’s Title goes Here,
                           but not too long.</h3>
                        <div className="flex items-center gap-5">
                           <p className="flex items-center gap-2"><FaEye style={{ color: 'blue' }} /> 68</p>
                           <p className="flex items-center gap-2"><FaRegHeart style={{ color: 'red' }} />86</p>
                        </div>
                     </div>
                  </div>
               )
            }
         </div>
         <div className="container w-full mx-auto flex justify-center mb-10">
            <Link to="/" className="text-xl font-semibold flex items-center gap-2 hover:text-[#1F2B6C]">See More
               <FaArrowRightLong className="" /></Link>
         </div>
      </>
   );
};

export default News;