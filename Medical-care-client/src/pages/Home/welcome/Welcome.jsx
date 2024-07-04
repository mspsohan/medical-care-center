import { Link } from "react-router-dom";
import image from '../../../assets/welcome.png'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";

const Welcome = () => {
    return (
        <div className="container mx-auto mt-32 text-center">
            <SectionTitle title="Welcome to Health Aid" description="A Greate Place to Receive Care" />
            <p className="max-w-[620px] mx-auto px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
            <div className="mt-10 mb-5">
                <Link to="/" >Learn More <ArrowOutwardIcon /></Link>
            </div>
            <img src={image} className="w-full h-[400px] object-cover" alt="welcome banner" />
            <div className="h-2 bg-[#BFD2F8]">
                <div className="h-2 bg-[#1F2B6C] w-[70%] mx-auto"></div>
            </div>
        </div>
    );
};

export default Welcome;