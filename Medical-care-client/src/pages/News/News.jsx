import { useLocation } from "react-router";
import banner from "../../assets/Rectangle 3 (4).png"
import PageBanner from "../../shared/PageBanner/PageBanner";
import { IoSearch } from "react-icons/io5";
import { CalendarMonth } from "@mui/icons-material";
import { FaArrowRightLong, FaEye, FaUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import doctor1 from "../../assets/doctor1.png";
import news2 from '../../assets/news2.png'

const news = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]

const News = () => {
   const location = useLocation()
   const path = location.pathname.replace("/n", "/ N")

   return (
      <>
         <PageBanner banner={banner} path={path} value="Blog Post" />
         <div className="max-w-screen-lg mx-auto px-4 flex flex-col md:flex-row my-10">
            <div className="w-full md:w-8/12 px-4">
               {
                  news.slice(0, 4).map(item => <div key={item.id} className="pb-7">
                     <img src={news2} alt="Blog Featured Image" className="" />
                     <div className="flex items-center gap-5 mb-3 pt-5">
                        <p className="flex items-center gap-2"><CalendarMonth />Monday 5, Septembor 2021</p>
                        <p className="flex items-center gap-2"><FaUser /> By Author</p>
                        <p className="flex items-center gap-2"><FaEye /> 68</p>
                        <p className="flex items-center gap-2"><FaRegHeart /> 86</p>
                     </div>
                     <div className="prose max-w-none">
                        <h2 className="text-[32px] font-medium mb-2 font-yeseva text-[#1F2B6C]">A passion for putting patients first</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....</p>
                        <button>
                           <Link to={`/news/${item.id}`} className="flex gap-3 items-center px-5 py-2 rounded-full bg-[#BFD2F8] mt-5">Read More <FaArrowRightLong /></Link>
                        </button>
                     </div>
                  </div>)
               }
            </div>

            {/* Right Sidebar */}
            <div className="w-full md:w-4/12 px-3">
               <div className="relative">
                  <input type="text" placeholder="Search" className="w-full py-1 px-3 text-xl h-12 bg-[#1F2B6C] text-white" />
                  <button><IoSearch className="absolute text-6xl p-3 right-0 -top-[6px] text-white hover:bg-white hover:text-black" /></button>
               </div>
               <div className="bg-gray-100 p-4 mt-5">
                  <h2 className="text-[32px] font-yeseva font-bold text-gray-800 mb-4">Recent Posts</h2>
                  <ul className="list-none">
                     <li className="mb-2">
                        <Link to="#" className="text-gray-700 hover:text-gray-900 flex gap-3 items-center group">
                           <img src={doctor1} alt="Recent Post" className="max-w-[60px] max-h-[60px] rounded-md" />
                           <div>
                              <p className="text-[12px] text-[#159EEC]">Monday 05, September 2021</p>
                              <h4 className="text-[14px] font-medium leading-4 pt-[3px] group-hover:text-[#1F2B6C] group-hover:font-[600] group-hover:-tracking-[0.020em]">This Article’s Title goes Here,
                                 but not too long.</h4>
                           </div>
                        </Link>
                     </li>
                     <li className="mb-2">
                        <Link to="#" className="text-gray-700 hover:text-gray-900 flex gap-3 items-center group">
                           <img src={doctor1} alt="Recent Post" className="max-w-[60px] max-h-[60px] rounded-md" />
                           <div>
                              <p className="text-[12px] text-[#159EEC]">Monday 05, September 2021</p>
                              <h4 className="text-[14px] font-medium leading-4 pt-[3px] group-hover:text-[#1F2B6C] group-hover:font-[600] group-hover:-tracking-[0.020em]">This Article’s Title goes Here,
                                 but not too long.</h4>
                           </div>
                        </Link>
                     </li>
                     <li className="mb-2">
                        <Link to="#" className="text-gray-700 hover:text-gray-900 flex gap-3 items-center group">
                           <img src={doctor1} alt="Recent Post" className="max-w-[60px] max-h-[60px] rounded-md" />
                           <div>
                              <p className="text-[12px] text-[#159EEC]">Monday 05, September 2021</p>
                              <h4 className="text-[14px] font-medium leading-4 pt-[3px] group-hover:text-[#1F2B6C] group-hover:font-[600] group-hover:-tracking-[0.020em]">This Article’s Title goes Here,
                                 but not too long.</h4>
                           </div>
                        </Link>
                     </li>
                     <li className="mb-2">
                        <Link to="#" className="text-gray-700 hover:text-gray-900 flex gap-3 items-center group">
                           <img src={doctor1} alt="Recent Post" className="max-w-[60px] max-h-[60px] rounded-md" />
                           <div>
                              <p className="text-[12px] text-[#159EEC]">Monday 05, September 2021</p>
                              <h4 className="text-[14px] font-medium leading-4 pt-[3px] group-hover:text-[#1F2B6C] group-hover:font-[600] group-hover:-tracking-[0.020em]">This Article’s Title goes Here,
                                 but not too long.</h4>
                           </div>
                        </Link>
                     </li>
                     <li className="mb-2">
                        <Link to="#" className="text-gray-700 hover:text-gray-900 flex gap-3 items-center group">
                           <img src={doctor1} alt="Recent Post" className="max-w-[60px] max-h-[60px] rounded-md" />
                           <div>
                              <p className="text-[12px] text-[#159EEC]">Monday 05, September 2021</p>
                              <h4 className="text-[14px] font-medium leading-4 pt-[3px] group-hover:text-[#1F2B6C] group-hover:font-[600] group-hover:-tracking-[0.020em]">This Article’s Title goes Here,
                                 but not too long.</h4>
                           </div>
                        </Link>
                     </li>
                     <li className="mb-2">
                        <Link to="#" className="text-gray-700 hover:text-gray-900 flex gap-3 items-center group">
                           <img src={doctor1} alt="Recent Post" className="max-w-[60px] max-h-[60px] rounded-md" />
                           <div>
                              <p className="text-[12px] text-[#159EEC]">Monday 05, September 2021</p>
                              <h4 className="text-[14px] font-medium leading-4 pt-[3px] group-hover:text-[#1F2B6C] group-hover:font-[600] group-hover:-tracking-[0.020em]">This Article’s Title goes Here,
                                 but not too long.</h4>
                           </div>
                        </Link>
                     </li>
                  </ul>
               </div>
               <div className="bg-gray-100 p-4 mt-4">
                  <h2 className="text-[32px] font-yeseva font-bold text-gray-800 mb-4">Categories</h2>
                  <ul className="list-none">
                     <li className="mb-2">
                        <a href="#" className="text-gray-700 hover:font-semibold flex justify-between px-5 items-center hover:text-[#1F2B6C]">Surgery <span className="px-2 py-1 rounded-full bg-[#BFD2F8]">10</span></a>
                     </li>
                     <li className="mb-2">
                        <a href="#" className="text-gray-700 hover:font-semibold flex justify-between px-5 items-center hover:text-[#1F2B6C]">Health Care <span className="px-2 py-1 rounded-full bg-[#BFD2F8]">10</span></a>
                     </li>
                     <li className="mb-2">
                        <a href="#" className="text-gray-700 hover:font-semibold flex justify-between px-5 items-center hover:text-[#1F2B6C]">Medical <span className="px-2 py-1  rounded-full bg-[#BFD2F8]">10</span></a>
                     </li>
                     <li className="mb-2">
                        <a href="#" className="text-gray-700 hover:font-semibold flex justify-between px-5 items-center hover:text-[#1F2B6C]">Professional <span className="px-2 py-1  rounded-full bg-[#BFD2F8]">10</span></a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   );
};

export default News; 