import { ActionsTypes } from "../Constants/Action_types.js"

export const  SetProducts=(products)=>{
return{
    type:ActionsTypes.SET_PRODUCTS,
    payload:products,
}
}

export const  SelectProducts=(product)=>{
    return{
        type:ActionsTypes.SELECTED_PRODUCT,
        payload:product,
    }
    }
    export const  RemoveSelectProducts=(product)=>{
        return{
            type:ActionsTypes.REMOVE_SELECTED_PRODUCT,
           
        }
        }