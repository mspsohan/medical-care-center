import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

const MainLayout = () => {


	return (
		<>
			<Navbar />
			<div className='md:mt-[64px] mt-[58px]'><Outlet /></div>
			<Footer />
		</>
	);
};

export default MainLayout;
