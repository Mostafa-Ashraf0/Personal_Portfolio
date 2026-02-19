"use client";

import style from '../../../styles/projects/projectCard.module.css';
import Image from 'next/image';
import img from '../../../public/background.jpg';
import { useEffect } from 'react';
const url = process.env.NEXT_PUBLIC_API_URL;

const ProjectCard = ({data})=>{

    return(
        <div className={style.card}>
            <Image
            alt='img'
            src={data.image_url}
            className={style.img}
            width={340}
            height={120}
            unoptimized={true}
            />
            <h2>{data.name}</h2>
        </div>
    )
}

export default ProjectCard;