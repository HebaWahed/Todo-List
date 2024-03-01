import { Add2years,addY,delY} from '../Actions/actionTypes';
const reducer1=(state ={x1:2000},action)=>{
    switch(action.type){
        case addY:
            return{...state,x1:state.x1+1}

         case delY:
            return{...state,x1:state.x1-1}
    
         case Add2years:
            return{...state,x1:state.x1+2}
        default:
            return state
    }
}
export default reducer1;


