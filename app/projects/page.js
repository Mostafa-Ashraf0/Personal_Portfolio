import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';
import ProjectsContainer from '../components/projects/projectsContainer';
import style from '../../styles/projects/projects.module.css';

const Projects = ()=>{
    
    return(
        <div className={style.container}>
            <Header/>
            <div className={style.main}>
               <div className={style.projects}>
                    <div className={style.head}>
                        <span>Home - Projects</span>
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