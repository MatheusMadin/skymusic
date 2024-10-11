import styles from './card.module.css'

function Card(props){
    return(<div className={styles.card}>
        <div className={styles.card_img_container}>
        <img className={styles.card_img} src={props.src}/>
       </div>
       <div className={styles.card_texto_container}>
        <p className={styles.card_titulo}>Pacote <br/>{props.nomepacote}</p>
        <p className={styles.card_subtexto}>Curso completo para você que deseja ser {props.profissaopacote} profissional no ramo!</p>
        </div>
            <ul className={styles.card_lista}>
        <li>PRÉ-PRODUÇÃO</li>
        <li>MIXAGEM</li>
        <li>MASTERIZAÇÃO</li>
        <li>PRODUÇÃO</li>
        <li>GRAVAÇÃO</li>
       </ul>
        <div className={styles.card_button_container}>
        <button className={styles.card_button_edit}type="button">Saiba Mais</button>
        </div>
  

       </div>
       )
}

export default Card