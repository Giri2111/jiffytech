import Heroimg from "../asserts/Picsart_24-08-01_16-33-50-584.png"
import { AiOutlineLinkedin,AiOutlineInstagram,AiOutlineGithub} from "react-icons/ai";
export default function Hero()
{
    return <section className="bg-primary w-full h-full px-5 md:py-5 ">
        <div className="  py-20 px-2 md:px-15 md:py-40 ">
        <h1 className= "text-7xl text-white justify-center text-center title font-extrabold md:px-10 md:py-20 py-52 from-neutral-700  border-red-400">JIFFYTECH</h1>
       { /*<div className="flex py-10">
            <a href="#"><AiOutlineLinkedin size={70} className="pr-5 hover:text-white"/></a>
            <a href="#"><AiOutlineInstagram size={70} className="pr-5  hover:text-white"/></a>
            <a href="#"><AiOutlineGithub size={70} className="pr-5  hover:text-white"/></a>
        </div>*/}
        </div>
    </section>
}