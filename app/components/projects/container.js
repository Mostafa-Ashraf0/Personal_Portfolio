"use client";
import style from '../../../styles/projects/container.module.css';
import ProjectCard from './projectCard';
import { tempData } from '@/app/features/temporary';
import { useRef } from 'react';

const Container = ()=>{
    const containerRef = useRef(null);
    const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    return(
        <div className={style.main}>
            <h1>Projects</h1>
            <div className={style.inner}>
                <button onClick={scrollLeft} className={style.leftBtn}>◀</button>
                <div className={style.container} ref={containerRef}>
                    {tempData.projects.map((p,index)=>(
                        <ProjectCard 
                        key={index}
                        title={p.title}
                        image={p.img}
                        skills={p.skills}
                        />
                    ))}
                </div>
                <button onClick={scrollRight} className={style.rightBtn}>▶</button>
            </div>
        </div>
    )
};

export default Container;