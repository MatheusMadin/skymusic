import styles from "./header.module.css"

function Header(){
    return(
        <div className="container-fluid">
        <div className={styles.App_header}>
          <img className={styles.logo} src="https://file.garden/Zrztbf_gFlhq3e_y/skymusic/SKY.png" alt="Logo"/>
          <h1 className={styles.header_nomesite}>SKY MUSIC</h1>
          <p className={styles.header_slogan}>"Onde seus sonhos vão além do céu."</p>
        </div>
      </div>
    )

}

export default Header