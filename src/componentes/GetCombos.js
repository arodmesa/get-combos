import Animation from "./Animation";
import './style/getCombos.css';
function GetCombos({hayCombo, busqueda_activa, startLooking, comboName, detenerGetInCart}){
    return(
        <div className="getCombosDiv">
            {
            (hayCombo)?
            <div className="combo_div">
                <h1 className="h1_combo">COMBO ENCONTRADO!!!! Intentando capturarlo...</h1>
                <h1 className="h1_combo">'Chequee su carrito en la web dentro de 5 min</h1>
                <h1 className="h1_combo">{comboName}</h1>
                <i className="fa fa-pause" onClick={detenerGetInCart}></i>
            </div>:
            <>
                {
                    busqueda_activa && hayCombo===false && <Animation />
                }
                <div className="div_fila">
                    <i className="fa fa-play" onClick={()=>startLooking(true)}></i>
                    <i className="fa fa-pause" onClick={()=>startLooking(false)}></i>
                </div>
            </>
            }
        </div>
    )
}

export default GetCombos;