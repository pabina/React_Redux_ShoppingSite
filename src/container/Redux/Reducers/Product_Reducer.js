import { ActionsTypes } from "../Constants/Action_types.js"
const initialstate={
    products:[]
}
export const ProductReducer=(state=initialstate,{type,payload})=>{
switch(type){
    case ActionsTypes.SET_PRODUCTS:
        return {...state,products:payload};
        default:
            return state;
}
}
export const SelectProductReducer=(state={},{type,payload})=>{
switch(type){
    case ActionsTypes.SELECTED_PRODUCT:
        return{...state,...payload};
        case ActionsTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
}
}
