import { NgModule } from '@angular/core'

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { MatButtonModule } from '@angular/material/button'
import { MatTableModule } from '@angular/material/table'

@NgModule({
    exports: [
        MatSidenavModule,
        MatCardModule,
        MatDividerModule,
        MatButtonModule,
        MatTableModule
    ]
})
export class MaterialModule {}
