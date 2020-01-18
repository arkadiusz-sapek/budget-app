import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap, pluck } from 'rxjs/operators'
import { of } from 'rxjs'

import { AuthService } from '../services/auth.service'
import * as AuthActions from '../actions/auth.actions'

@Injectable()
export class AuthEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly authService: AuthService
    ) {}

    signIn$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.signInRequested),
            pluck('payload'),
            switchMap(credentials =>
                this.authService.signIn(credentials).pipe(
                    map(() => AuthActions.signInSucceeded()),
                    catchError(() => of(AuthActions.signInFailed()))
                )
            )
        )
    )
}
