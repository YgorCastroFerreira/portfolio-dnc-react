import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB'
import {useEffect, useState} from 'react'


function Presentation(){
    const [text,setText] = useState('');
    const toRotate = ['Yusuke Uramechi', 'Desenvolvedor Front-end'];
    const [loop,setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100);
    

    
    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1):fullText.substring(0,text.length+1);

        setText(updatedText);
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
                setIsDeleting(false);
                setDelta(period);
                setLoop(loop+1);
        }
    }

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}
    },[text])

    return(
        <div className={styles.presentation} id='Presentation'>
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou {text} </h1>
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