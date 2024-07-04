import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from 'react-router-dom';

const BannerCard = () => {
    return (
        <div className='container mx-auto flex justify-center items-center gap-10'>
            <Link to="/appointment" className='py-6 px-10 bg-[#1e2b6c] text-white flex rounded-md cursor-pointer  items-center gap-2'>
                <p className='text-xl font-medium'>Book an Appointment</p>
                <div><CalendarMonthIcon sx={{ fontSize: '50px' }}></CalendarMonthIcon></div>
            </Link>
            <Link to="/appointment" className='py-6 px-10 bg-[#BFD2F8] text-black flex rounded-md cursor-pointer  items-center gap-2'>
                <p className='text-xl font-medium'>Book an Appointment</p>
                <div><CalendarMonthIcon sx={{ fontSize: '50px' }}></CalendarMonthIcon></div>
            </Link>
            <Link to="/appointment" className='py-6 px-10 bg-[#159EEC] text-white flex rounded-md cursor-pointer items-center gap-2'>
                <p className='text-xl font-medium'>Book an Appointment</p>
                <div><CalendarMonthIcon sx={{ fontSize: '50px' }}></CalendarMonthIcon></div>
            </Link>
        </div>
    );
};

export default BannerCard;