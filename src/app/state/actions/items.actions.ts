import { createAction, props } from "@ngrx/store";
import { ItemModel } from "../../core/models/Item.interface";

export const loadItems = createAction(
    '[Item List] Load Items', //'type' - Esta propiedad es obligatoria
);

export const loadedItems = createAction(
    '[Item List] Load Items: success',
    props<{ items: ItemModel[] }>() // Propiedad: se espera recibir datos cuyo tipado coincida con el formato de la interfaz ItemModel y que sea un array
);
