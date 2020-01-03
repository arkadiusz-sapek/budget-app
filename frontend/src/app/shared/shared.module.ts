import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { MaterialModule } from './material.module'

@NgModule({
    exports: [MaterialModule, RouterModule]
})
export class SharedModule {}
