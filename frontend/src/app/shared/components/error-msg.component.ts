import {
    Component,
    Input,
    ChangeDetectionStrategy,
    OnDestroy,
    OnInit
} from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Subscription, Subject } from 'rxjs'

import { getErrorMsg } from '../helpers/get-form-error-msg.helper'

@Component({
    selector: 'error-msg',
    templateUrl: './error-msg-component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorMsgComponent implements OnInit, OnDestroy {
    @Input() control: FormControl | FormGroup
    @Input() formGroup: FormGroup
    @Input() fieldName: string
    @Input() specificErrorName: string

    controlSubscription: Subscription
    errorMsg = new Subject()

    ngOnInit() {
        this.setUpErrorChecking()
    }

    ngOnDestroy() {
        this.controlSubscription.unsubscribe()
    }

    setUpErrorChecking() {
        this.controlSubscription = this.control.valueChanges.subscribe(() => {
            if (this.control.errors) {
                const firstErrorKey = Object.keys(this.control.errors)[0]
                const firstErrorMsg = getErrorMsg(firstErrorKey, this.fieldName)

                return this.errorMsg.next(firstErrorMsg)
            }

            const specificError =
                this.formGroup &&
                this.formGroup.errors &&
                this.formGroup.errors[this.specificErrorName]

            if (specificError) {
                const specificErrorMsg = getErrorMsg(this.specificErrorName)

                return this.errorMsg.next(specificErrorMsg)
            }

            this.errorMsg.next('')
        })
    }
}
