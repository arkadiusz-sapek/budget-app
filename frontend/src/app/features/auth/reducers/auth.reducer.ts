import { Action, createReducer, on } from '@ngrx/store'

import * as AuthActions from '../actions/auth.actions'
import { User } from '../models/auth.model'

export interface State {
    user?: User
    isFetching: boolean
}

const initialState: State = {
    isFetching: false
}

const authReducer = createReducer(
    initialState,
    on(AuthActions.signInRequested, state => ({ ...state, isFetching: true }))
)

export function reducer(state: State, actions: Action) {
    return authReducer(state, actions)
}
