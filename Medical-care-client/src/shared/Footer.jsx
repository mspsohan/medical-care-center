import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';
import { IoMdSend } from "react-icons/io";

const Footer = () => {
   return (
      <>
         <div className="bg-[#1b2661] px-5 lg:px-3 xl:px-0 text-[#BFD2F8]">
            <div className="container grid lg:grid-cols-4  justify-between gap-16 py-10 mx-auto">
               <div>
                  <h1 className="uppercase text-3xl text-[#BFD2F8] font-semibold">Medical Care</h1>
                  <p className="pt-5">Leading the Way in Medical
                     Execellence, Trusted Care.</p>
               </div>
               <div className=''>
                  <h1 className="uppercase text-[#BFD2F8] font-semibold">Important Links</h1>
                  <div className="pt-5 flex flex-col">
                     <a href='#' className='hover:text-blue-600'>Appointment</a>
                     <a href='#' className='hover:text-blue-600'>Doctors</a>
                     <a href='#' className='hover:text-blue-600'>Appointment</a>
                     <a href='#' className='hover:text-blue-600'>Doctors</a>
                  </div>
               </div>
               <div className=''>
                  <h1 className="uppercase text-[#BFD2F8] font-semibold">Contact Us</h1>
                  <div className="pt-5">
                     <p>Call: (237) 681-812-255</p>
                     <p>Email: fildineesoe@gmail.com</p>
                     <p>Address: 0123 Some place</p>
                     <p>Some country</p>
                  </div>
               </div>
               <div className='w-full'>
                  <h1 className="uppercase text-[#BFD2F8] font-semibold">Newsletter</h1>
                  <div className="mt-5  bg-[#BFD2F8] relative">
                     <input type="text" name="newsletter" id="" placeholder='Type Your Email' className='p-2 outline-none rounded w-full' />
                     <button className='text-[#1F2B6C] right-0 top-0 absolute py-2 px-5 bg-blue-700'><IoMdSend className='text-white hover:text-black text-2xl' /></button>
                  </div>
               </div>
            </div>
            <div className="container mx-auto">
               <Divider sx={{ backgroundColor: '#BFD2F8' }} />
               <div className="py-3 flex justify-between items-center">
                  <small>© 2024 Health Aid Medical Center. All Rights Reserved</small>
                  <div className='grid grid-cols-2 lg:grid-cols-4'>
                     <IconButton sx={{ color: "#BFD2F8" }} aria-label="delete">
                        <Facebook />
                     </IconButton>
                     <IconButton sx={{ color: "#BFD2F8" }} aria-label="delete">
                        <YouTube />
                     </IconButton>
                     <IconButton sx={{ color: "#BFD2F8" }} aria-label="delete">
                        <Twitter />
                     </IconButton>
                     <IconButton sx={{ color: "#BFD2F8" }} aria-label="delete">
                        <Instagram />
                     </IconButton>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Footer;
