import react from "react";
import Link from 'next/link';
import {motion} from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className="flex items-center justify-center mt-2">
            <MotionLink href="/"
                className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2x1 font-bold
                "
                whileHover={{scale:1.5}}
                >D</MotionLink></div>
    )
}

export default Logo;