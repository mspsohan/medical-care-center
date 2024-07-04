import BookAppointment from "./BookAppointment/BookAppointment";
import HContact from "./HContact/HContact";
import News from "./News/News";
import OurDoctors from "./OurDoctors/OurDoctors";
import OurService from "./OurService/OurService";
import OurSpecialties from "./OurSpecialties/OurSpecialties";
import Banner from "./banner/Banner";
import Welcome from "./welcome/Welcome";

const Home = () => {
	return (
		<>
			<Banner />
			<Welcome />
			<OurService />
			<OurSpecialties />
			<BookAppointment />
			<OurDoctors />
			<News />
			<HContact />
		</>
	);
};

export default Home;
