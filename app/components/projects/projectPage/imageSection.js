'use client';
import style from '../../../../styles/projectPage/imageSection.module.css';
import Image from 'next/image';
import { getProjectImages } from '@/app/features/getProjectImage';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
const url = process.env.NEXT_PUBLIC_API_URL;

const ImageSection = ()=>{
    const {projectId} = useParams();
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(()=>{
        if(!projectId) return
        const fetchImages = async()=>{
        const res = await getProjectImages(projectId);
        const urls = res?.data?.[0]?.projects_images?.flatMap?.(
        img => img.image?.map(file => file.url) || []
        ) || [];

        setImages(urls);
        }
        fetchImages();
    },[projectId]);

    const handeNext = ()=>{
        setCurrentIndex((prev)=>(
            prev === images.length - 1? 0 : prev + 1
        ));
    }

    const handlePrev = ()=>{
        setCurrentIndex((prev)=>(
            prev === 0 ? images.length - 1 : prev - 1
        ))
    }

    useEffect(()=>{
        if(currentIndex >= images?.length){
            setCurrentIndex(0)
        }
    },[images, currentIndex]);


    
    return(
        <div className={style.main}>
            <div className={style.img}>
                {images?.length > 0 && images[currentIndex] && (
                <Image
                    src={`${url}${images[currentIndex]}`}
                    alt={`Project image ${currentIndex + 1}`}
                    width={0}
                    height={0}
                    style={{ width: '100%', height: '100%', objectFit:'cover' }}
                    unoptimized
                />
                )}
            </div>
            <div className={style.btns}>
                <button onClick={handlePrev} disabled={!images.length}>Prev</button>
                <span>{images?.length>0?currentIndex + 1:0} of {images?.length}</span>
                <button onClick={handeNext} disabled={!images.length}>Next</button>
            </div>
        </div>
    )
}

export default ImageSection