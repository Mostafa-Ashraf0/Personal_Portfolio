"use client";
import style from '../../../styles/projects/projectBigCard.module.css';
import Image from 'next/image';
import img from '../../../public/background.jpg';
import rightArrow from '../../../public/right-arrow-white.png';
import { useRouter } from 'next/navigation';

const ProjectBigCard = ({data})=>{
    const router = useRouter();
    const handleClick =()=>{
        router.push(`/projectDetails/${data.id}`);
    }
    const statusColors = {
    Completed: "#17753a",
    InProgress: "#3B82F6",
    scheduled: "#F59E0B",
    };
    return(
        <div className={style.card}>
            <Image
            alt='img'
            src={`http://localhost:1337${data.cover.url}`}
            className={style.img}
            width={340}
            height={120}
            unoptimized={true}
            />
            <div className={style.info}>
                <div className={style.text}>
                    <h2>{data.project_name}</h2>
                    <p>{data.project_description && data.project_description}</p>
                </div>
                <div className={style.buttom}>
                    <div className={style.staBtn}>
                        <span
                        className={style.status}
                        style={{
                            backgroundColor: statusColors[data.project_status],
                        }}  
                        >{data.project_status}</span>
                        <div className={style.Btns}>
                            <span className={style.case} onClick={handleClick}>View Details</span>
                            <a className={style.live} href={data.live}>
                                <span></span>
                                Live
                                <Image 
                                src={rightArrow}
                                alt='arr'
                                style={{width:'12px', height:'12px', marginLeft:'10px'}}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectBigCard;