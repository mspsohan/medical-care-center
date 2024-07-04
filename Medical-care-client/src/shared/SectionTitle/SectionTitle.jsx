
const SectionTitle = ({ title, description }) => {
   return (
      <div className="mt-28 mb-5 text-center">
         <h2 className="text-2xl font-bold tracking-widest text-[#159EEC] uppercase font-sans">{title}</h2>
         <h2 className="text-4xl font-bold py-2 font-serif font-yeseva">{description}</h2>
      </div>
   );
};

export default SectionTitle;