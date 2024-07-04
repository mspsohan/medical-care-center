import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import sepcial from '../../../assets/OurSpecialties.png'

const OurSpecialties = () => {
   const specialties = [
      { name: "Neurology" },
      { name: "Bones" },
      { name: "Oncology" },
      { name: "Otorhinolaryngology" },
      { name: "Ophthalmology" },
      { name: "Cardiovascular" },
      { name: "Pulmonology" },
      { name: "Renal Medicine" },
      { name: "Gastroenterology" },
      { name: "Urology" },
      { name: "Dermatology" },
      { name: "Gynaecology" },
   ]

   return (
      <>
         <SectionTitle title="Always Caring" description="Our Specialties" />
         <div className="container mx-auto p-3">
            <div className="grid grid-cols-2 lg:grid-cols-4">
               {
                  specialties.map(item =>
                     <div key={item.name} className="w-full border min-h-[200px] max-h-[200px]">
                        <div className="hover:bg-[#1F2B6C] hover:text-white h-full  text-center flex flex-col justify-center itece">
                           <img src={sepcial} alt="medical1" className="w-12 mx-auto" />
                           {item.name}
                        </div>
                     </div>
                  )
               }
            </div>
         </div>
      </>
   );
};

export default OurSpecialties;