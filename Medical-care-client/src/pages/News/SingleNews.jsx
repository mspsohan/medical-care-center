import banner from "../../assets/Rectangle 3 (5).png"
import PageBanner from "../../shared/PageBanner/PageBanner";
import news2 from '../../assets/news2.png'
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import doctor1 from '../../assets/doctor1.png'

const SingleNews = () => {

   const path = "/news"

   return (
      <>
         <PageBanner banner={banner} path={path} value="Single News" />

         <div class="max-w-screen-lg mx-auto px-4 flex flex-col md:flex-row gap-10 md:gap-0 my-32">
            <div class="w-full md:w-8/12 px-4">
               <img src={news2} alt="Blog Featured Image" class="mb-8" />
               <div class="prose max-w-none space-y-5">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed sit amet feugiat
                     eros, eget eleifend dolor. Proin maximus bibendum felis, id fermentum odio vestibulum id. Sed ac
                     ligula eget dolor consequat tincidunt. Nullam fringilla ipsum et ex lacinia, at bibendum elit
                     posuere. Aliquam eget leo nec nibh mollis consectetur.</p>
                  <p>Suspendisse potenti. Mauris euismod, magna sit amet aliquam dapibus, ex sapien porta nisl, vel
                     auctor orci velit in risus. Fusce gravida bibendum dui, id volutpat felis dignissim a. Duis
                     sagittis, arcu ac convallis bibendum, neque dolor suscipit dolor, non malesuada magna orci a
                     mauris. Proin sollicitudin diam eu enim tincidunt dapibus. Aliquam pharetra purus mauris, id
                     lacinia mi malesuada ut. Integer dignissim, urna nec scelerisque feugiat, lacus sapien tincidunt
                     sem, sed luctus enim libero vel nunc. Vivamus ornare, felis quis feugiat luctus, orci justo
                     auctor urna, et elementum orci dolor ac ante. Ut varius sapien nec fringilla sodales.
                     Suspendisse lacinia, metus eu suscipit lobortis, enim sapien commodo sapien, non facilisis urna
                     elit eget elit.</p>
                  <p>Nulla facilisi. Sed venenatis pretium ante, sed tempor turpis sagittis ac. Pellentesque habitant
                     morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer vel diam arcu.
                     Maecenas bibendum efficitur ex sit amet tristique. Nulla vel sapien euismod, bibendum velit id,
                     facilisis magna. Sed vestibulum nisi vitae justo congue, eu bibendum augue interdum. Nam quis
                     orci nec nulla posuere facilisis. Etiam feugiat ligula quis est auctor, et sagittis orci
                     elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                     Curae; Sed gravida neque vel tellus volutpat, vel laoreet lacus commodo. Vivamus quis enim leo.
                  </p>
               </div>
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

export default SingleNews;
