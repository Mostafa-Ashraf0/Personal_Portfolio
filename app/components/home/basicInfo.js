import style from '../../../styles/home/basicInfo.module.css';
import { tempData } from "@/app/features/temporary";
import locIcon from '../../../public/locationIcon.png';
import Image from 'next/image';
import LinkButton from './linkButton';
import { linkBtns } from '@/app/features/linkBtns';
import img from '../../../public/personal.png';
const BasicInfo = ()=>{
    return(
        <div className={style.basicInfo}>
            <div className={style.mainInfo}>
                <Image src={img} alt='img' className={style.pImage}/>
                <div className={style.info}>
                    <h1 className={style.name}>Mostafa Ashraf</h1>
                    <h2 className={style.job}>Junior Software Engineer </h2>
                    <div className={style.locBox}>
                        <Image src={locIcon} alt=""/>
                        <h3 className={style.location}>Cairo, Egypt</h3>
                    </div>
                    <p>Software engineer | Frontend developer | React.js | Vue.js | Building Modern, Responsive & High-Performance Web Applications</p>
                </div>
            </div>
            <div className={style.btns}>
                <LinkButton
                icon={linkBtns.cv.icon}
                link={linkBtns.cv.link}
                name={linkBtns.cv.name}/>
                <LinkButton
                icon={linkBtns.github.icon}
                link={linkBtns.github.link}
                name={linkBtns.github.name}/>
                <LinkButton
                icon={linkBtns.linkedin.icon}
                link={linkBtns.linkedin.link}
                name={linkBtns.linkedin.name}/>
            </div>
            <div className={style.summaryBox}>
                <p>{tempData.summary}</p>
            </div>
        </div>
    )
}

export default BasicInfo;