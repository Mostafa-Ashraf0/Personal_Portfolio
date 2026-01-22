import style from '../../styles/header.module.css';


const Header = ()=>{
    return(
        <div className={style.header}>
            <span>M.A</span>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
            </nav>
        </div>
    )
};

export default Header;