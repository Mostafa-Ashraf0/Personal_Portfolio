import style from '../../../styles/home/linkButton.module.css'; 
import Image from 'next/image';
const LinkButton = ({icon, link, name})=>{
    return(
        <a 
        href={link}
        className={style.linkButton}>
            <Image src={icon} alt=''/>
            <span>{name}</span>
        </a>
    )
}

export default LinkButton;