'use client';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import style from '../../../styles/projectPage/projectPage.module.css';
import { useParams } from 'next/navigation';

const Projects = ()=>{
    const {projectId} = useParams();

    return(
        <div className={style.container}>
            <Header/>
            <div className={style.main}>
               
            <Footer/>
            </div>
        </div>
    )
}

export default Projects;