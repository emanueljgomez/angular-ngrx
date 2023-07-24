import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadItems } from '../../../../state/actions/items.actions';

@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.css'],
})
export class ShowCasePageComponent implements OnInit {

  // Escuchar valor: Selector de NgRx
  
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(loadItems());
  }


}
