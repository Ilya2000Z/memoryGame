import { connect } from 'react-redux';
import classes from "../../App.css"
function Counter(props){
    return(<div>
       <p className={classes.textcounter}>pressed: {props.counter}</p>
    </div>)
}
function mapStateToProps(state){  
    const {Tiles} = state; 
     return {
         counter: Tiles.counter
     }
 }
export default connect(mapStateToProps)(Counter)