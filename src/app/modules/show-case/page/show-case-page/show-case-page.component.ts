import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadItems } from '../../../../state/actions/items.actions';
import { Observable } from 'rxjs';
import { selectLoading } from '../../../../state/selectors/items.selectors';
//import { ShowCaseService } from '../../services/show-case.service'; // El servicio será manejado mediante EFFECTS
//import { ItemModel } from '../../../../core/models/Item.interface';
//import { loadedItems } from '../../../../state/actions/items.actions';

@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.css'],
})
export class ShowCasePageComponent implements OnInit {

  // Escuchar valor: Selector de NgRx
  // Selector Paso 1: declaramos un Observable
  loading$: Observable<boolean> = new Observable()
  
  constructor(
    private store: Store<any>,
    // private showCaseService: ShowCaseService // El servicio será manejado mediante EFFECTS
    ) {}

  ngOnInit(): void {
  // Selector Paso 2: usamos el método 'select' para llamar al Selector correspondiente, previamente declarado en su archivo selector
    this.loading$ = this.store.select(selectLoading); // Suscripción al Selector, usamos el valor en el template

    this.store.dispatch(loadItems()); // Disparamos Acción loadItems

    /* // El servicio será manejado mediante EFFECTS:
    this.showCaseService.getDataApi()
      .subscribe((response: ItemModel[])  => {

        this.store.dispatch(loadedItems({items: response}));  // Disparamos Acción loadedItems usando como parámetro la data que llega desde el servicio

      });
    */
  }
}
