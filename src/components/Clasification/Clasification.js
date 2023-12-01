
import styles from "./Clasification.module.css";
import {icons} from "../../assets/icons";
function Clasificacion(){
    return(
        <div className={styles.cuerpo}>
            <div className={styles.leaders}>
                <div className={styles.rankingMenor}>
                <img src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg" className={styles.imagen}></img>
                    <h4>usuario</h4>
                    <p>puntos</p>
                </div>
                <div className={styles.rankingUno}>
                <img src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg" className={styles.imagen}></img>
                    <h4>usuario</h4>
                    <p>puntos</p>
                </div>
                <div className={styles.rankingMenor}>
                <img src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg" className={styles.imagen}></img>
                    <h4>usuario</h4>
                    <p>puntos</p>
                </div>
            </div>
            <div className={styles.tabla}>
                <div className={styles.puntuacion}>
                    <img src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg" className={styles.imagen}></img>
                    <div className={styles.datos}>
                        <h3>usuario</h3>
                        <p>gmail</p>
                    </div>
                    <div className={styles.datosPuntuacion}>
                        <h1>1000</h1>
                        <img src={icons.estrella}></img>
                    </div>
                </div>
            </div>
        </div>
      
    )

}
export default Clasificacion;