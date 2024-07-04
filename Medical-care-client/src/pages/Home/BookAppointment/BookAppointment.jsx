import { useLocation } from "react-router-dom";
import background from "../../../assets/bookAppointmentbg.png"
import AppointmentForm from "../../../shared/AppointmentForm/AppointmentForm";

const BookAppointment = () => {
   const location = useLocation()
   const path = location.pathname

   return (
      <>
         <div className="min-h-[575px]" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', marginTop: '40px', marginBottom: '40px' }}>
            <div className="h-full bg-gray-400 opacity-90 p-3">
               <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 content-center items-center py-10 lg:py-32">
                  <div className="max-w-[420px] space-y-3">
                     <h2 className="text-4xl font-bold font-serif text-[#159EEC]">Book an Appointment</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
                  </div>
                  <div>
                     <AppointmentForm path={path} />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default BookAppointment;
