import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms'
import { FormError } from 'src/app/shared/models/errors-msg.model'

export function PasswordsMatchValidator(
    control: FormGroup
): ValidationErrors | null {
    const password = control.get('password')
    const passwordConfirm = control.get('passwordConfirm')

    if (password.value === passwordConfirm.value) {
        return null
    }

    return { [FormError.PasswordNotMatch]: true }
}

export function PasswordStrengthValidator(
    control: AbstractControl
): ValidationErrors | null {
    const passwordPattern = new RegExp(
        '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
    )

    if (passwordPattern.test(control.value)) {
        return null
    }

    return { [FormError.PasswordStrength]: true }
}
