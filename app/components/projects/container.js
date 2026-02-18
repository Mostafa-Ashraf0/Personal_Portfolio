"use client";
import style from '../../../styles/projects/container.module.css';
import ProjectCard from './projectCard';
import { tempData } from '@/app/features/temporary';
import { useRef } from 'react';
import Image from 'next/image';
import rightArrow from '../../../public/right-arrow.png';
import leftArrow from '../../../public/left-arrow.png';
import { useEffect, useState } from 'react';
import { getTools } from '@/app/features/getTools';

const Container = ()=>{
    const [tools, setTools] = useState([]);
    useEffect(()=>{
        const fetchTools = async()=>{
        const res = await getTools();
        setTools(res?.data);
        };
        fetchTools();
    },[]);


    const containerRef = useRef(null);
    const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    };

    const scrollRight = () => {
        containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    };



    return(
        <div className={style.main}>
            <h1>Tools and Tech Stack</h1>
            <div className={style.inner}>
                <button onClick={scrollLeft} className={style.leftBtn}>
                    <Image 
                    src={leftArrow}
                    alt='arr'
                    style={{width:'14px', height:'14px'}}
                    />
                    </button>
                <div className={style.container} ref={containerRef}>
                    {tools?.sort((a, b) => a.key - b.key).map((t)=>(
                        <ProjectCard 
                        key={t.id}
                        data={t}
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