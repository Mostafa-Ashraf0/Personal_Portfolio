"use client";
import style from '../../../styles/projects/container.module.css';
import ProjectCard from './projectCard';
import { tempData } from '@/app/features/temporary';
import { useRef } from 'react';
import Image from 'next/image';
import rightArrow from '../../../public/right-arrow.png';
import leftArrow from '../../../public/left-arrow.png';
import { getProjects } from '@/app/features/getProjects';
import { useEffect, useState } from 'react';

const Container = ()=>{

    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        const fetchProjects = async()=>{
        const res = await getProjects();
        setProjects(res.data);
        };
        fetchProjects();
    },[]);


    const containerRef = useRef(null);
    const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -340, behavior: "smooth" });
    };

    const scrollRight = () => {
        containerRef.current.scrollBy({ left: 340, behavior: "smooth" });
    };

    return(
        <div className={style.main}>
            <h1>Projects</h1>
            <div className={style.inner}>
                <button onClick={scrollLeft} className={style.leftBtn}>
                    <Image 
                    src={leftArrow}
                    alt='arr'
                    style={{width:'14px', height:'14px'}}
                    />
                    </button>
                <div className={style.container} ref={containerRef}>
                    {projects?.sort((a, b) => a.key - b.key).map((p)=>(
                        <ProjectCard 
                        key={p.id}
                        data={p}
                        />
                    ))}
                </div>
                <button onClick={scrollRight} className={style.rightBtn}>
                    <Image 
                    src={rightArrow}
                    alt='arr'
                    style={{width:'14px', height:'14px'}}
                    />
                </button>
            </div>
        </div>
    )
};

export default Container;