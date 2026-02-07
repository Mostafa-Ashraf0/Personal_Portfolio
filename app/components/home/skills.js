import style from '../../../styles/home/skills.module.css';
import html from '../../../public/html.png';

const Skills = ()=>{
    const skills = ['HTML','CSS','JS','React.Js','Vue.Js','Tailwind',
        'Bootstrap','TypeScirpt','Next.Js','Supabase','Firebase',
        'PostgreSQL', 'SQL', 'Git', 'Github', 'Node.js', 'Vercel'
    ]
    return(
        <div className={style.main}>
            <div className={style.head}>Skills</div>
            <div className={style.content}>
                {skills.map((s,index)=>(
                    <span className={style.skill} key={index}>{s}</span>
                ))}
            </div>
        </div>
    )
};

export default Skills;