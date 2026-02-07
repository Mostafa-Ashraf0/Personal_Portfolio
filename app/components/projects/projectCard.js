
"use client";

import style from '../../../styles/projects/projectCard.module.css';
import Image from 'next/image';
import img from '../../../public/background.jpg';
import { useEffect } from 'react';

const ProjectCard = ({data})=>{
    useEffect(()=>{
        console.log(data.cover.url);
    },[data])
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
                <h2>{data.project_name}</h2>
                <div className={style.skills}>
                        <span>HTML</span>
                </div>
                <span
                className={style.status}
                style={{
                    backgroundColor: statusColors[data.project_status],
                }}  
                >{data.project_status}</span>
            </div>
        </div>
    )
}

export default ProjectCard;