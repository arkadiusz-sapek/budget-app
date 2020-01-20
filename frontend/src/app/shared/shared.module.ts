import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { MaterialModule } from './material.module'
import { ErrorMsgComponent } from './components/error-msg.component'

@NgModule({
    declarations: [ErrorMsgComponent],
    imports: [CommonModule, MaterialModule],
    exports: [MaterialModule, RouterModule, ErrorMsgComponent]
})
export class SharedModule {}
