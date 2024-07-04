import CallIcon from '@mui/icons-material/Call';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import logo from '../assets/hmc.png'

const UpNavbar = () => {
    return (
        <div className="w-full container mx-auto flex justify-between px-6 py-[9px] items-center">
            <div className="uppercase hidden md:flex lg:text-3xl text-xl font-semibold items-center gap-2">
                <img src={logo} alt="Health Aid Medical Center" className='h-[3rem]' />
                <span className="text-[#159EEC]">HMC</span></div>

            <div className="flex text-[10px] md:text-base flex-wrap lg:gap-8 gap-3 w-full lg:w-max justify-center">
                <div className="flex gap-1 items-center">
                    <CallIcon sx={{ fontSize: { xs: '16px', sm: '35px' } }}></CallIcon>
                    <div>
                        <p>Emergency</p>
                        <p className="text-[#159EEC]">(237) 681-812-255</p>
                    </div>
                </div>
                <div className="flex gap-1 items-center">
                    <AccessTimeIcon sx={{ fontSize: { xs: '16px', sm: '35px' } }}></AccessTimeIcon>
                    <div>
                        <p>Time</p>
                        <p className="text-[#159EEC]">8 am - 8 pm</p>
                    </div>
                </div>
                <div className="flex gap-1 items-center">
                    <LocationOnIcon sx={{ fontSize: { xs: '16px', sm: '35px' } }}></LocationOnIcon>
                    <div>
                        <p>Location</p>
                        <p className="text-[#159EEC]">
                            Chuadanga
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpNavbar;