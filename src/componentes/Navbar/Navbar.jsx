import React from 'react';
import styles from './Navbar.module.css';
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import Nav from 'react-bootstrap/Nav'



const Navbar = () => { 
  return (
    <div className={styles.navbar}>
    <ul>
        <h2><Nav.Link href='#Projects'>Projetos</Nav.Link></h2>
        <h2><Nav.Link href='#Presentation'>Tecnologias</Nav.Link></h2>
        <h2><Nav.Link href='#AboutMe'>Sobre Mim</Nav.Link></h2>
    </ul>
    <ul>
        <li><a href='https://github.com/CabrQW'><FaGithub size={30}/></a></li>
        <li><a href='https://www.linkedin.com/in/carlos-eduardo-a971501a5/'><FaLinkedin size={30}/></a></li>
    </ul>
   </div>

  )
}

export default Navbar