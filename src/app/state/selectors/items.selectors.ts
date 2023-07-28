import { createSelector } from "@ngrx/store";
import { AppState } from '../app.state'; // Importante: importar manualmente AppState
import { ItemState } from "../../core/models/items.state";

// LISTA DE CAPTURA DE PROPIEDADES:
// 1- Capturar las propiedades de Estado deseadas para luego exportarlas a través de un Selector:
export const selectItemsFeature = (state: AppState) => state.items; // 'state.items' hace referencia a la propiedad 'items' ubicada en app.state.ts

// LISTA DE SELECTORES:
// 2- Crear el Selector propiamente dicho, en este caso este está asociado a la propiedad 'items':
export const selectListItems = createSelector(
    selectItemsFeature,
    (state: ItemState) => state.items
);

export const selectLoading = createSelector(
    selectItemsFeature,
    (state: ItemState) => state.loading
);