import { ErrorStateMatcher } from '@angular/material'

import { FormControl, FormGroupDirective, NgForm } from '@angular/forms'
import { FormError } from 'src/app/shared/models/errors-msg.model'

export class PasswordMatchErrorMatcher implements ErrorStateMatcher {
    isErrorState(
        control: FormControl | null,
        form: FormGroupDirective | NgForm | null
    ): boolean {
        const shouldShowErrors = !!(control.dirty && control.touched)

        return (
            shouldShowErrors &&
            (form.hasError(FormError.PasswordNotMatch) || !!control.errors)
        )
    }
}
