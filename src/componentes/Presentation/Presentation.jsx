import React from 'react'
import styles from './Presentation.module.css'
import ButtaonA from '../../elements/ButtaonA'
import { useEffect, useState } from 'react'

function Presentation(){

    const [text, setText] = useState('');
    const toRotate = ['eu sou o Carlos Eduardo', 'Sou Desenvolvedor Fullstack!'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100)


    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
    }, delta)
        return()=> {clearInterval(ticker)}
        
    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }



  return (
       <div className={styles.presentation} id='Presentation'>

     <h1>Olá, {text}</h1>
          <p>
            Sempre sonhei em atuar na área de programação e desenvolvimento.<br/>
            Estou sempre apto a aprender novos métodos para me aprimorar e melhorar<br />
            profissionalmente,buscando oportunidades para aplicar minhas habilidades <br /> 
            interpessoais e paixão pelo aprendizado na área de tecnologia.<br/>
            Sou um profissional versátil, dedicado e focado em resultados, pronto para contribuir<br/>
            significativamente para equipes de tecnologia.<br/>
         </p>
         <ButtaonA link='https://www.linkedin.com/in/carlos-eduardo-a971501a5' text='SABER MAIS'/>
     </div>


   )
}

export default Presentation