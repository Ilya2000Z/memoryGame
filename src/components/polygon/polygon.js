// import react from "react"
import classes from "./polygon.css"
import Tiles from "../tiles/tiles.js"
import Counter from "../counter/counter"
import Buttonres from "../button/button"

function Polygon(){
    return(
        <div className={classes.background}>
            <div className={classes.center}>
                <Counter className={classes.counter}></Counter>
                <div className={classes.col4}>
                    <Tiles></Tiles>
                </div>
                <Buttonres></Buttonres>
            </div>
        </div>
    )
}
export default Polygon