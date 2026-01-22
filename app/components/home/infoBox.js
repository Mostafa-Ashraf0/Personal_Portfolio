import style from '../../../styles/home/infoBox.module.css';
import BasicInfo from "./basicInfo";
const InfoBox = ()=>{
    return(
        <div className={style.infoBox}>
            <BasicInfo/>
        </div>
    )
};

export default InfoBox;