"use client";
import style from '../../styles/footer.module.css';
import icon from '../../public/click-tap-svgrepo-com.svg';
import whiteIcon from '../../public/click-tap-svgrepo-com-white.svg';
import HowProjectBuiltCard from './howBuilt';
import Image from 'next/image';
import { useState } from 'react';

const Footer = ()=>{
    const [howBoxV, setHowBoxV] = useState(false);
    const [theme, setTheme] = useState("light");
    const handleClick = ()=>{
        setHowBoxV(!howBoxV);
    }
    return(
        <div className={style.footer}>
            <div className={style.left}>
                <span>M.A</span>
                <span className={style.me}>@ 2026 Mostafa Ashraf</span>
            </div>
            <div 
            onClick={handleClick}
            className={style.right}
            onMouseEnter={() => setTheme("dark")}
            onMouseLeave={() => setTheme("light")} 
            >
                <Image
                src={theme === "light"? icon : whiteIcon}
                alt=''
                />
                How this portfolio was built?!
            </div>
            <HowProjectBuiltCard
              visability = {howBoxV}
              setVisability = {setHowBoxV}
            />
        </div>
    )
};

export default Footer;