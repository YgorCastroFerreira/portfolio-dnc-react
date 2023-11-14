import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB'


function Presentation(){
    return(
        <div className={styles.presentation} id='Presentation'>
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou o Yusuke Uramechi</h1>
            <p>
                Sou um apaixonado por tecnologia e soluções inovadoras.Como<br></br>
                 Product Manager, eu tenho o compromisso de <br></br>
                 resolver problemas complexos e trazer resultados excepcionais para <br></br>
                 os negócios.Meus projetos já geraram milhões de reais em receita <br></br>
                 anualestou sempre em busca de novos desafios para superar.
            </p>

            <ButtonA 
                text='Conecte-se comigo'
                link=''>

            </ButtonA>
            
        </div>

    )
}

export default Presentation