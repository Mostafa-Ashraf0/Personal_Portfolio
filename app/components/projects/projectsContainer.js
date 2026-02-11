 "use client";
import { getProjects } from "@/app/features/getProjects";
import ProjectBigCard from "./projectBigCard";
import style from '../../../styles/projects/projectsContainer.module.css';
import { useState,useEffect } from "react";

const ProjectsContainer = ()=>{
    const [projects, setProjects] = useState([]);
        useEffect(()=>{
            const fetchProjects = async()=>{
            const res = await getProjects();
            setProjects(res.data);
            };
            fetchProjects();
        },[]);
        useEffect(()=>{
            console.log(projects)
        },[projects])
    return(
        <div className={style.projectCards}>
            {projects?.sort((a, b) => a.key - b.key).map(p=>(
                <ProjectBigCard
                    key={p.id}
                    data={p}
                />
            ))}
        </div>
    )
}


export default ProjectsContainer;