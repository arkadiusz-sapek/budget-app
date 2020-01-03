import { Component } from '@angular/core'
import { Validators, FormBuilder } from '@angular/forms'

@Component({
    selector: 'sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['../auth-panel-common.scss']
})
export class SignInComponent {
    constructor(private fb: FormBuilder) {}

    public signInForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
    })
}
