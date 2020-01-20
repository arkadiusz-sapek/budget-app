import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap, pluck } from 'rxjs/operators'
import { of } from 'rxjs'

import { StorageService } from 'src/app/core/services/storage.service'

import { AuthService } from '../services/auth.service'
import * as AuthActions from '../actions/auth.actions'
import { routes, modules } from 'src/app/config/routes'

@Injectable()
export class AuthEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly authService: AuthService,
        private readonly storageService: StorageService,
        private router: Router
    ) {}

    signIn$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.signInRequested),
            pluck('payload'),
            switchMap(credentials =>
                this.authService.signIn(credentials).pipe(
                    map(user => {
                        this.storageService.setItem('token', user.token)

                        this.router.navigate([
                            `${modules.user}/${routes.dashboard}`
                        ])

                        return AuthActions.signInSucceeded({ payload: user })
                    }),
                    catchError(() => of(AuthActions.signInFailed()))
                )
            )
        )
    )
}
