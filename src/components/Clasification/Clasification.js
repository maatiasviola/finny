import styles from "./Clasification.module.css";
import {icons} from "../../assets/icons";
import React,{ useState,useEffect } from "react";
import Cookies from "universal-cookie";
function Clasificacion(){
    const cookie = new Cookies();
    const [listaRankings, setListaRankings] = useState([]);
    const [actualPuntaje, setActualPuntaje] = useState(null);
    async function fetchRanking() {
        try{
            const iduser=cookie.get("idPersona");
            await fetch(`http://localhost:8080/Persona/Ranking/${iduser}`)
            .then(r=>r.json())
            .then(d=>{
                setActualPuntaje(d.actualPuntaje);
                
                setListaRankings(d.top3);
            })
            .catch(e=>console.log(e));
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchRanking();
    },[]);

    return(
        <div className={styles.cuerpo}>

            <div className="lista-container" style={{top:90, position:"absolute"}}>
                <h1>Clasificación de Jugadores</h1><br></br><br></br>
                <ul style={{listStyle:"none", width: "30vw", height:"800px",overflowY:"auto", overflowX:"hidden"}}>
                
                {(listaRankings) ? listaRankings.map((ranking,index) => {
                    
                    return (
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-around",height:"12%"}}>
                          <li style={{backgroundColor: (0<=index && index<=2) ? "#A3C14B" :
                    (3<=index && index<=5) ? "#DADEA7" : "#EDF1D6", display:"flex",flexDirection:"row",justifyContent:"space-around",width:"490px",borderRadius:"20px",height:"80px",boxShadow:"5px 5px 10px 0px rgba(0, 0, 0, 0.3",alignItems:"center",border:"2px solid black"}}>
                        <label style={{fontSize:"22px",fontWeight:"bold",marginLeft:"60px"}}> {index+1}  º </label> 
                        <label>{ranking.nombre}</label> 
                        <label style={{fontWeight:"bold",paddingLeft:"230px",fontsize:"19px"}}> {ranking.puntos} </label>
                         <img src={icons.estrella} style={{width:"30px",height:"30px",marginRight:"20px"}}></img>
                    </li>
                    </div>
                  
                    );
                }):null}
                </ul>
            </div>

        </div>

    )

}
export default Clasificacion;