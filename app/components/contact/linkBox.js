'use client';
import style from '../../../styles/contact/linkBox.module.css';
import { getContactLinks } from '@/app/features/getContactLinks';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const LinkBox = ()=>{
    const [links, setLinks] = useState([]);
    useEffect(()=>{
        const fetchLinks = async()=>{
        const res = await getContactLinks();
        setLinks(res.data);
        };
        fetchLinks();
    },[]);


    return(
        <div className={style.container}>
            {links?.map(l=>(
                <a 
                href={l.url}
                key={l.id}
                className={`${style.main} ${style[l.name.toLowerCase()]}`}>
                    <Image src={`http://localhost:1337${l.icon.url}`} alt='' width={20} height={20}/>
                    {l.name}
                </a>
            ))}
        </div>
    )
}

export default LinkBox;