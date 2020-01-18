import { Component } from '@angular/core'
import { Validators, FormBuilder } from '@angular/forms'
import { Store } from '@ngrx/store'

import { Credentials } from '../../models/auth.model'
import * as AuthActions from '../../actions/auth.actions'
import * as fromAuth from '../../reducers/auth.reducer'

@Component({
    selector: 'sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['../auth-panel-common.scss']
})
export class SignInComponent {
    constructor(
        private fb: FormBuilder,
        private readonly store: Store<fromAuth.State>
    ) {}

    public signInForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
    })

    onSubmit() {
        const { email, password } = this.signInForm.value
        this.store.dispatch(
            AuthActions.signInRequested({ payload: { email, password } })
        )
    }
}
