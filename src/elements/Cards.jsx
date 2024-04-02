import styles from './Cards.module.css'
import ButtaonA from '../elements/ButtaonA'




function Cards({img, title, description, repo, site}){


    return(
        <div className={styles.card} id='Card' >

            
                <section>
                    <a href={site}>
                        <img src={img} alt = "erro"/>
                    </a>

                    <h3>{title}</h3>

                    <p>{description}</p>

                    <ButtaonA text='Acesse o repositório' link={repo}/>
                </section>
            
        </div>

    )
}

export default Cards