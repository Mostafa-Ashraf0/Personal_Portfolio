import Header from '../components/header';
import Footer from '../components/footer';
import ProjectsContainer from '../components/projects/projectsContainer';
import style from '../../styles/projects/projects.module.css';
import arrow from '../../public/right-arrow-backup-2-svgrepo-com.svg';
import Image from 'next/image';

const Projects = ()=>{
    
    return(
        <div className={style.container}>
            <Header/>
            <div className={style.main}>
               <div className={style.projects}>
                    <div className={style.head}>
                        <span>Home <Image src={arrow} alt=''/> Projects</span>
                        <h1>Projects</h1>
                    </div>
                    <ProjectsContainer/>
               </div>
            <Footer/>
            </div>
        </div>
    )
}

export default Projects;