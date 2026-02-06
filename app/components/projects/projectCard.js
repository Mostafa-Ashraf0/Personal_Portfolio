import style from '../../../styles/projects/projectCard.module.css';
import Image from 'next/image';
import img from '../../../public/background.jpg';

const ProjectCard = ({title, image, skills})=>{
    return(
        <div className={style.card}>
            <Image src={img} alt='img' className={style.img}/>
            <div className={style.info}>
                <h2>{title}</h2>
                <div className={style.skills}>
                    {skills.map((s,index)=>(
                        <span key={index}>{s}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;