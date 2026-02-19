'use client';
import style from '../../../../styles/projectPage/projectInfo.module.css';
import github from '../../../../public/github.png';
import live from '../../../../public/stream.png';
import Image from 'next/image';
import ImageSection from './imageSection';

const ProjectInfo = ({data})=>{
    return(
        <div className={style.main}>
            <div className={style.hero}>
                <div className={style.title}>
                    <h1>{data?.project_name}</h1>
                    <p>{data?.project_description}</p>
                    <div className={style.btns}>
                        <a className={style.live} href={data?.live}>
                            <Image 
                            src={live}
                            alt='arr'
                            style={{width:'15px', height:'15px'}}
                            />
                            Live Demo
                            </a>
                        <a className={style.github} href={data?.github}>
                            <Image 
                            src={github}
                            alt='arr'
                            style={{width:'15px', height:'15px'}}
                            />
                            GitHub
                        </a>
                    </div>
                </div>
                <ImageSection
                />
            </div>
            <h2>Key Features</h2>
            <ul>
                {data?.project_features.map(f=>(
                    <li key={f.id}>{f.feature}</li>
                ))
                }
            </ul>
        </div>
    )
}

export default ProjectInfo;