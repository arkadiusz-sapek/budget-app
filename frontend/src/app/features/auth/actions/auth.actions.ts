import { createAction, props } from '@ngrx/store'

import { Credentials, User } from '../models/auth.model'

export const signInRequested = createAction(
    '[Sign In] Sign In Requested',
    props<{ payload: Credentials }>()
)
export const signInSucceeded = createAction(
    '[Sign In] Sign In Request Succeeded',
    props<{ payload: User }>()
)
export const signInFailed = createAction('[Sign In] Sign In Request Failed')
