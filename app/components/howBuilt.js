import style from '../../styles/howBuilt.module.css';
import closeIcon from '../../public/close-square-svgrepo-com.svg';
import Image from 'next/image';

const HowProjectBuiltCard = ({visability, setVisability})=>{
    const handleClick = ()=>{
        setVisability(false);
    }
    return(
        <div className={style.main} style={visability?{display:'flex'}:{display:'none'}}>
            <div className={style.head}>
                <h1>How This Portfolio Was Built</h1>
                <Image
                onClick={handleClick}
                src={closeIcon}
                alt=''
                />
            </div>
            <p>
                This portfolio was crafted from scratch using Next.js, JavaScript, and pure CSS without relying on external UI libraries or frameworks. The goal was to keep the project clean, lightweight, and fully custom-built to showcase strong fundamentals rather than pre-made solutions.
                It uses file-based routing for smooth navigation between pages and is connected to Strapi CMS, which allows all project content to be managed dynamically. This means projects, images, and details can be updated easily without modifying the frontend code.
                The overall approach focused on simplicity, performance, and clean code architecture — proving that powerful, modern interfaces can be built with core technologies alone.
            </p>
        </div>
    )
}

export default HowProjectBuiltCard;