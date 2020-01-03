import { NgModule } from '@angular/core'

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
    exports: [
        MatSidenavModule,
        MatCardModule,
        MatDividerModule,
        MatButtonModule
    ]
})
export class MaterialModule {}
