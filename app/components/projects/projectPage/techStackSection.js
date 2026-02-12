import style from '../../../../styles/projectPage/techStackSection.module.css';

const TechStackSection = ({data})=>{
    return(
        <div className={style.main}>
            <h2>Tech Stack</h2>
            <div className={style.content}>
                {data?.project_skills.map((d)=>(
                    <span className={style.skill} key={d.id}>{d.skill}</span>
                ))}
            </div>
        </div>
    )
}

export default TechStackSection;