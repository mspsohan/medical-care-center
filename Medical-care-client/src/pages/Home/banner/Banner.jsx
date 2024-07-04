import { Button } from "@mui/material";
import BannerCard from "../bannerCard/BannerCard";

const Banner = () => {
    return (
        <>
            <div className="bg-[url('https://i.ibb.co/7Qk1Jpw/Group-94-Photo-Room.png')] h-[80vh] bg-no-repeat bg-cover bg-center flex items-center">
                <div className="container mx-auto px-5">
                    <p className="text-[#159EEC] text-2xl font-semibold">Caring for Life</p>
                    <h1 className="text-[#1F2B6C] text-3xl md:text-6xl one">Leading the Way<br /> in Medical Excellence</h1>

                    <Button sx={{ borderRadius: '25px', marginTop: '40px', padding: '10px 30px', backgroundColor: '#BFD2F8', color: 'black', ":hover": { color: 'white' } }} variant="contained">Our Services</Button>
                </div>
            </div>
            <div className="absolute hidden lg:block left-0 right-0 container mx-auto bottom-[0px]">
                <BannerCard></BannerCard>
            </div>
        </>
    );
};

export default Banner;