import style from '../../../styles/home/education.module.css';
import logo from '../../../public/university.png';
import Image from 'next/image';

const Education = ()=>{
    return(
        <div className={style.main}>
            <div className={style.head}>Education</div>
            <div className={style.content}>
                    <Image src={logo} alt='logo' className={style.logo}/>
                <div className={style.info}>
                    <span className={style.uni}>Helwan University</span>
                    <span className={style.degree}>Bachelors degree, Computer Science</span>
                    <span className={style.date}>Sep 2019 - Jan 2024</span>
                </div>
            </div>
        </div>
    )
};

export default Education;