import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import Logo from './Logo';
import { TwitterIcon, GithubIcon, LinkedInIcon } from './Icons';
import {motion} from "framer-motion";

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();
    console.log(router);
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[1px] inline-block w-0 bg-dark
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </Link>
    )
}

const NavBar = () => {
    return (
        <header
        className='w-full px-32 py-8 font-medium flex items-center justify-between'
        >
            <nav>
                <CustomLink href="/" title="Home" className='mr-4'/>
                <CustomLink href="About" title="About" className='mr-4'/>
                <CustomLink href="projects" title="Projects" className='mr-4'/>
                <CustomLink href="articles" title="Articles" className='mr-4'/>
                <CustomLink href="artace" title="ArtAce" className='mr-4'/>
            </nav>
            
            <div className='absolute left-[50%] top-3 translate-x-[50%]'>
                <Logo/>
            </div>

            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a href="/" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'><TwitterIcon/></motion.a>
                <motion.a href="https://github.com/it20663872" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'><GithubIcon/></motion.a>
                <motion.a href="https://www.linkedin.com/in/dasath-y-v-a-t-8b4972217?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4BiEI5%2B%2BTYW4kFiriUX2qw%3D%3D" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 ml-3'><LinkedInIcon/></motion.a>
            </nav>
        </header>
    )
}

export default NavBar;