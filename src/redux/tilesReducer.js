import { START,OPENCARD,RESTART } from "./type"
const initianalState = {
    tiles:8,
    tilesarr:[],
    switchElement:null,
    counter:0,
    countertofinish:[],
    flagfinish: false
}
var newtilesArr = []
function createArr(){
  var numPoolfirst = [ 6, 1, 7, 5, 4, 0, 3, 2 ];
  var numPoolsecond = [ 3, 1, 0, 4, 7, 2, 6, 5 ];
function shuffle(numPool) {
for(var j, x, i = numPool.length; i; j = parseInt(Math.random() * i), x = numPool[--i], numPool[i] = numPool[j], numPool[j] = x);
return numPool;
}; 
var randomResultfirst = shuffle(numPoolfirst);
var randomResultsecond = shuffle(numPoolsecond);
for(var i = 0; i < initianalState.tiles; i++){
    newtilesArr.push({
        id: randomResultfirst[i],
        src: `memory${randomResultfirst[i]}.jpeg`,
        show: "none"
    },
    {
        id: randomResultsecond[i],
        src: `memory${randomResultsecond[i]}.jpeg`,
        show: "none"
    }
    )
    } 
}
createArr()

export const TilesReducer = (state = initianalState ,action) => {
        switch(action.type){
        case START:
            return{
                ...state,
                tilesarr: newtilesArr
            }
        case OPENCARD:
            if(state.countertofinish.length > 7){
                state.flagfinish = true
            } else {
                state.flagfinish = false
            }
            let copy = newtilesArr[action.key]
            copy.show = "show"
            newtilesArr.splice(action.key, 1, copy); 
            state.counter = state.counter+1
            if(state.switchElement!=null){
               if(newtilesArr[state.switchElement].id !== newtilesArr[action.key].id){
                setTimeout(()=>{
                newtilesArr[action.key].show = "none"},300)
                newtilesArr[state.switchElement].show = "none"
                state.switchElement = null
               } else {
                newtilesArr[action.key].show = "show"
                newtilesArr[state.switchElement].show = "show"
                state.countertofinish.push(action.key)
                state.switchElement = null
               }
            } else{
                state.switchElement = action.key
            }
            return{
                ...state,
                tilesarr: newtilesArr,
                flagfinish: state.flagfinish
            }
            case RESTART:
                initianalState.switchElement = null
                newtilesArr.length = 0
                createArr()
                initianalState.tilesarr = newtilesArr
            return{
                ...state,
                tilesarr: newtilesArr,
                counter: state.counter=0
            }
        default: return {
            ...state,
                tilesarr: newtilesArr
            }    
        }
}
