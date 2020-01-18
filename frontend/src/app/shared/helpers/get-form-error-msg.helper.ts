import { FormError } from '../models/errors-msg.model'

export const getErrorMsg = (errorKey: string, fieldName?: string) => {
    switch (errorKey) {
        case FormError.Required:
            return fieldName ? `${fieldName} is required` : 'Required'
        case FormError.PasswordStrength:
            return 'Password must contain at least one lower and upper case letter and number'
        case FormError.Email:
            return 'Incorrect email address'
        default:
            return 'Incorrect value'
    }
}
