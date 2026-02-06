import style from '../../../styles/home/infoBox.module.css';
import BasicInfo from "./basicInfo";
import Education from './education';
import Skills from './skills';
const InfoBox = ()=>{
    return(
        <div className={style.infoBox}>
            <BasicInfo/>
            <div className={style.eduSkills}>
                <Education/>
                <Skills/>
            </div>
        </div>
    )
};

export default InfoBox;