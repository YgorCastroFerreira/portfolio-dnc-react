import styles from './Skills.module.css'

import javascript from '../../images/skills/javascript.svg'
import html from '../../images/skills/html.svg'
import css from '../../images/skills/css.svg'
import react from '../../images/skills/react.svg'
import typescript from '../../images/skills/typescript.svg'


function Skills(){
    return(
        <div className = {styles.skill} id='Skills'>
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas habilidades e meus conhecimentos</p>
            <div>
                <img src={javascript}></img>
                <img src={html}></img>
                <img src={css}></img>
                <img src={react}></img>
                <img src={typescript}></img>
            </div>
        </div>
        
    )
}

export default Skills