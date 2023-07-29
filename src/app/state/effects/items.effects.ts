import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { ShowCaseService } from '../../modules/show-case/services/show-case.service';

@Injectable()
export class ItemsEffects {

    loadItems$ = createEffect(() => this.actions$.pipe(
        ofType('[Item List] Load Items'),   // Con el operador 'ofType' se indica la acción que deseamos filtrar
        exhaustMap(() => this.showCaseService.getDataApi()    // Con el operador 'mergeMap' se combinan ambos observables
            .pipe(
                map(items => ({ type: '[Item List] Load Items: success', items })), // En 'type' se indica una segunda ACTION que va a dispararse al realizarse el filtrado de la primera
                catchError(() => EMPTY)
            ))
    ));

    constructor(
        private actions$: Actions,
        private showCaseService: ShowCaseService
    ) {}
}