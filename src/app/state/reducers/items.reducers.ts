import { createReducer, on } from "@ngrx/store";
import { ItemModel } from "../../core/models/Item.interface"; // Importación de Interface
import { loadItems, loadedItems } from "../actions/items.actions"; // Importación de Acción
import { ItemState } from "../../core/models/items.state";

// Estado Inicial:
/*
export const initialState: {
    loading: boolean,
    items: ReadonlyArray<ItemModel>;
} = { loading: false, items: [] }
*/
export const initialState: ItemState = {  loading: false, items: [] }

// Funciones Reducers:
export const itemsReducer = createReducer (
    // Paso 1: toma el Estado Inicial
    initialState,
    
    // Paso 2: escucha las Acciones a través de 'on()'
    on(loadItems, (state) => {  // 'state' hace referencia al estado actual antes de ser modificado
        return { ...state, loading: true } // '...state' -> Crear un clon del objeto 'initialState' / pero modifica la propiedad 'loading'
    }),

    on(loadedItems, (state, {items}) => {
        return { ...state, loading: false, items }
    })

    /*
    //Ejemplo: puede haber múltiples escuchas de acciones dentro de la misma función
    on(loadItems, (state) => {
        return state;
    }),
    on(loadItems, (state) => {
        return state;
    })
    */

);