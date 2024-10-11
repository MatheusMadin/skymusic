import Card from './card'
import styles from './conteudo.module.css'
import Titulo from './titulo'

function Conteudo(){
    return(
        <div className="container-fluid">
           <Titulo
           tituloH1="NOSSOS CURSOS"
           subTexto="Muitos sonham em seguir
           no ramo musical,
           porém não sabem por onde começar,
           com os nossos Pacotes profissionalizantes,
           você irá garantir um aprendizado abrangente e
           conquistar sua própria
           independência financeira."/>
           <div className={styles.conteudo_coluna}>
           <Card
           src="https://file.garden/Zrztbf_gFlhq3e_y/skymusic/mesasom.png"
           nomepacote="PRODUTOR"
           profissaopacote="produtor(a)"/>
           <Card
            src="https://file.garden/Zrztbf_gFlhq3e_y/skymusic/instrumento.png"
           nomepacote="INSTRUMENTAL"
           profissaopacote="musicista"/>
           <Card
            src="https://file.garden/Zrztbf_gFlhq3e_y/skymusic/canto.png"
           nomepacote="CANTO"
           profissaopacote="Canto(a)"/>
           </div>
            </div>


    )
}

export default Conteudo