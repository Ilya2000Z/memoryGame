import { connect } from 'react-redux';
import classes from "../../App.css"
function Buttonres(props){
    return(<div>
       <button className={classes.button} onClick={props.restart}>Играть заново</button>
    </div>)
}
function mapStateToProps(state){  
    const {Tiles} = state; 
     return {
         counter: Tiles.counter
     }
 }
    function mapDisparchToProps(dispatch){
    return{
        restart: () => {
            const action = { type: 'RESTART' };
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDisparchToProps)(Buttonres)