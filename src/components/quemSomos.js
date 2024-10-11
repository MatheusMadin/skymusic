import styles from './quemSomos.module.css'

function QuemSomos(){
    return(
        <div className="container-fluid">
        <div className={styles.App_header}>
          <h1 className={styles.header_nomesite}>QUEM SOMOS </h1>
          <p className={styles.quemsomos_texto}>A SKY MUSIC é uma empresa de cursos, produção musical, vendas de instrumentos e acessórios musicais. A ideia da SKY MUSIC surgiu em 2024, criado por um trabalho escolar pelos alunos e empresários José Carlos, Matheus Nascimento, Robert Mamede, Gabriel Abdi e Luiz Gustavo, com o auxilio da professora Rosemara, hoje em dia se tornando a maior empresa do ramo no Litoral Norte de São Paulo</p>
        </div>
      </div>
    )

}

export default QuemSomos