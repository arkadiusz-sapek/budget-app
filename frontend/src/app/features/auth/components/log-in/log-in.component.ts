import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'

@Component({
    selector: 'log-in',
    templateUrl: './log-in.component.html',
    styleUrls: ['../auth-panel-common.scss']
})
export class LogInComponent {
    constructor(private fb: FormBuilder) {}

    public loginForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    })
}
