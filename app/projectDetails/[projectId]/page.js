'use client';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import style from '../../../styles/projectPage/projectPage.module.css';
import { useParams } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import { getProjectById } from '@/app/features/getProjectById';
import ProjectInfo from '@/app/components/projects/projectPage/projectInfo';
import TechStackSection from '@/app/components/projects/projectPage/techStackSection';

const Projects = ()=>{
    const [projectData, setProjectData] = useState(null);
    const {projectId} = useParams();
    useEffect(()=>{
        const fetchProjectData = async()=>{
        const res = await getProjectById(projectId);
        setProjectData(res.data[0]);
        };
        fetchProjectData();
    },[projectId]);

    useEffect(()=>{
        console.log(projectData)
    },[projectData])

    return(
        <div className={style.container}>
            <Header/>
            <div className={style.main}>
                <ProjectInfo
                    data={projectData}
                />
                <TechStackSection
                    data={projectData}
                />
            <Footer/>
            </div>
        </div>
    )
}

export default Projects;