import style from '../styles/loading.module.css';
import icon from '../public/loading-svgrepo-com.svg';
import Image from 'next/image';
const Loading = ()=>{
    return(
        <div className={style.main}>
            <Image
            src={icon}
            alt='loading...'
            width={100}
            height={100}
            className={style.icon}
            />
        </div>
    )
};

export default Loading;