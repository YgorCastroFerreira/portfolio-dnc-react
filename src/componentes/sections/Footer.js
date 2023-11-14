import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css"

function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href=''><FaInstagram size={30}/></a></li>
                <li><a href=''><FaGithub size={30}/></a></li>
                <li><a href=''><FaLinkedin size={30}/></a></li>
            </ul>
            <p>yusuke.hakusho@gmail.com</p>
        </div>

    )
}

export default Footer