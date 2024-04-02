import Cards from '../../elements/Cards'
import styles from './Projects.module.css'
import APIdnc from '../../images/APIdnc.jpg'
import basednc from '../../images/basednc.jpg'
import portf from '../../images/portf.jpeg'
import land from '../../images/land.jpeg'



function Projects(){
    return(
        <div className={styles.projects} id='Projects' >
            <h1>Projetos</h1>
             
           
            <section>
                <Cards
                img={APIdnc}
                title= 'Landing Page para consulta de CEP e Temperatura da região'
                description='API criada para consultar Rua, Bairro, Cidade de acordo com o CEP informado e também a temperatura do momento de acordo com a Latitude e Longitude informada'
                repo='https://github.com/CabrQW/Consumo-De-API'
                site='https://dncweather.vercel.app/'
                />
                <Cards
                img={basednc}
                title= 'Landing Page - Empresa Arquitetura'
                description='Desenvolvimento de uma Landig Page para uma empresa de arquitetura para captura de Leads utilizando HTML e CSS.'
                repo='https://github.com/CabrQW/Desafio-do-ciclo-Base-1'
                site='https://incomparable-fox-fc7026.netlify.app/'
                />
                <Cards
                img={portf}
                title= 'Portfólio feito em React'
                description='Portfólio pessoal criador para teste em React e JS'
                repo='https://github.com/CabrQW/portfolio'
                site='https://portfolio-three-omega-87.vercel.app/'
                />

                <Cards
                img={land}
                title= 'Projeto landing page'
                description='Projeto feito só com HTML, CSS, JS'
                repo='https://github.com/CabrQW/projeto-landing-page'
                site='https://peaceful-starlight-170fef.netlify.app/'
                />



            </section>

        </div>

    )
}

export default Projects