import { useLocation } from "react-router";
import banner from "../../assets/Rectangle 3 (2).png"
import PageBanner from "../../shared/PageBanner/PageBanner";
import HContact from "../Home/HContact/HContact";
import News from "../Home/News/News";
const Contact = () => {
   const location = useLocation()
   console.log(location.pathname)
   const path = location.pathname.replace("/c", "/ C")
   return (
      <>
         <PageBanner banner={banner} path={path} value="Our Contact" />
         <div className="max-w-screen-lg mx-auto my-20">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65109.45481943296!2d89.15221715680582!3d23.165151970395385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff108d87ea6d65%3A0x627d034ef93261cf!2sJashore!5e1!3m2!1sen!2sbd!4v1704449791019!5m2!1sen!2sbd" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
         </div>
         <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2 gap-5 mb-20">
            <div className="p-2">
               <h2 className="text-2xl font-bold tracking-widest text-[#159EEC] font-sans">Get in Touch</h2>
               <h2 className="text-4xl font-bold py-2 font-yeseva">Contact</h2>
               <div className="bg-[#1f2b6c] mt-9 rounded-md">
                  <form >
                     <div className="grid grid-cols-2">
                        <div className="col-span-1">
                           <input className="bg-transparent border py-1 px-2 w-full h-12 text-white placeholder:text-white" type="text" placeholder="Full Name" />
                        </div>
                        <div className="col-span-1">
                           <input className="bg-transparent border py-1 px-2 w-full h-12 text-white placeholder:text-white" type="email" placeholder="Email" />
                        </div>
                        <div className="col-span-2">
                           <input className="bg-transparent border py-1 px-2 w-full h-12 text-white placeholder:text-white" type="text" placeholder="Subject" />
                        </div>

                        <div className="col-span-2">
                           <textarea placeholder="Message" className="bg-transparent border py-2 px-2 text-white placeholder:text-white" style={{ width: "100%" }} rows={7} />
                        </div>
                        <div className="col-span-2">
                           <input className="bg-blue-300  border p-1 w-full h-12 text-black font-semibold text-xl hover:bg-blue-800 hover:text-white placeholder:text-white cursor-pointer" type="submit" />
                        </div>
                     </div>
                  </form>
               </div>
            </div>
            <div>
               <HContact />
            </div>
         </div>
         <News />
      </>
   );
};

export default Contact;
