'use client';
import style from '../../../styles/home/basicInfo.module.css';
import { tempData } from "@/app/features/temporary";
import locIcon from '../../../public/locationIcon.png';
import Image from 'next/image';
import LinkButton from './linkButton';
import img from '../../../public/personal.png';
import { getLinks } from '@/app/features/getLinks';
import { useState, useEffect } from 'react';
const BasicInfo = ()=>{
    const [links, setLinks] = useState([]);
    useEffect(()=>{
        const fetchLinks = async()=>{
        const res = await getLinks();
        setLinks(res.data);
        };
        fetchLinks();
    },[]);

    useEffect(()=>{
        console.log(links);
    },[links])

    return(
        <div className={style.basicInfo}>
            <div className={style.mainInfo}>
                <Image src={img} alt='img' className={style.pImage}/>
                <div className={style.info}>
                    <h1 className={style.name}>Mostafa Ashraf</h1>
                    <h2 className={style.job}>Junior Software Engineer </h2>
                    <div className={style.locBox}>
                        <Image src={locIcon} alt=""/>
                        <h3 className={style.location}>Cairo, Egypt</h3>
                    </div>
                    <p>Software engineer | Frontend developer | React.js | Vue.js | Building Modern, Responsive & High-Performance Web Applications</p>
                </div>
            </div>
            <div className={style.btns}>
                {links?.sort((a, b) => a.key - b.key).map(l=>(
                    <LinkButton
                    key={l.id}
                    link={l.url}
                    name={l.name}
                    icon={l.icon.url}
                    />
                ))}

            </div>
            <div className={style.summaryBox}>
                <p>{tempData.summary}</p>
            </div>
        </div>
    )
}

export default BasicInfo;