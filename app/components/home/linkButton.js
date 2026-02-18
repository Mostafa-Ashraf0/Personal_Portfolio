import style from '../../../styles/home/linkButton.module.css'; 
import Image from 'next/image';
const url = process.env.NEXT_PUBLIC_API_URL;
const LinkButton = ({icon, link, name})=>{
    return(
        <a 
        href={link}
        className={style.linkButton}>
            <Image 
            src={`${url}${icon}`} 
            alt=''
            width={0}
            height={0}
            />
            <span>{name}</span>
        </a>
    )
}

export default LinkButton;