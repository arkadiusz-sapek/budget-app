import {
    Component,
    Input,
    ChangeDetectionStrategy,
    OnDestroy,
    OnInit
} from '@angular/core'
import { FormControl } from '@angular/forms'
import { Subscription, Subject } from 'rxjs'

import { getErrorMsg } from '../helpers/get-form-error-msg.helper'

@Component({
    selector: 'error-msg',
    templateUrl: './error-msg-component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorMsgComponent implements OnInit, OnDestroy {
    @Input() control: FormControl
    @Input() fieldName: string

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
                this.errorMsg.next(firstErrorMsg)
            } else {
                this.errorMsg.next('')
            }
        })
    }
}
