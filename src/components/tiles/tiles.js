import { connect } from 'react-redux';
import classes from "./tiles.css";

function Tiles(props) { 
    if( props.flagfinish){
        alert("Вы победили")
    }
    var tiles = props.Tilesarr.map((item,key)=>{
        if(item.show==="none"){
            var show = ""
        } else {
            show = classes.flipped
        }
        const image = require(`../../data/img/${item.src}`)
        
        return (<div className={classes.col4} key={key}>
                    <div className={classes.flipcontainer} id={key}  onClick={e => {props.opencard(e.target.id)}}>
                        <div className={[classes.flipper,show].join(' ')}>
                            <div className={classes.front} id={key}></div>
                            <div className={classes.back} id={key}>
                            <img src={image} id={key} alt="tiles"/>
                            </div>
                        </div>
                    </div>
                </div>)
    })
   return(
    <div className={classes.row}>
          {tiles}
    </div>
   )
}
function mapStateToProps(state){  
       const {Tiles} = state; 
        return {
            counter: Tiles.counter,
            Tiles: Tiles.tiles,
            Tilesarr: Tiles.tilesarr,
            switchElement: Tiles.switchElement,
            flagfinish: Tiles.flagfinish
        }
    }
function mapDisparchToProps(dispatch){
    return{
        start: () => {
            const action = { type: 'START'};
            dispatch(action)
        },
        opencard: (index) => {
            const action = { type: 'OPENCARD' ,key: index};
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDisparchToProps)(Tiles)