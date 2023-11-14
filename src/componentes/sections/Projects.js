import ButtonB from '../elements/ButtonB'
import Cards from '../elements/Cards'

import styles from './Projects.module.css'

import lpdnc from '../../images/projects/lpdnc.svg'
import portfolio from '../../images/projects/portfolio.svg'



function Projects(){
    return(
        <div className={styles.projects} id='Projects'>
                <h1>Projetos</h1>
                <p>Cards</p>
                <ButtonB text = 'Acesse o meu repositório' link = '' />
                <Cards
                    img = {lpdnc}
                    title = " LP - DNC"
                    tech = "HTML, CSS e JS"
                    description = "Desenvolvimento de uma landing page para o lançamento
                                   da formação em Tecnologia"
                    repo = "https://WWW.GITHUB.COM.BR"
                    site = "https://www.com.br"
                />

                <Cards
                    img = {portfolio}
                    title = "Portfolio"
                    tech = "HTML, CSS e JS"
                    description = "Desenvolvimento do meu Portfólio"
                    repo = "https://WWW.GITHUB.COM.BR"
                    site = "https://www.com.br"
                />
          
        </div>

    )
}

export default Projects