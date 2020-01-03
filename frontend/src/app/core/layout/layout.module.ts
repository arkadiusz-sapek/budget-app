import { NgModule } from '@angular/core'

import { LayoutComponent } from './layout.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { RouterModule } from '@angular/router'

@NgModule({
    imports: [SharedModule, RouterModule],
    declarations: [LayoutComponent],
    exports: [LayoutComponent]
})
export class LayoutModule {}
