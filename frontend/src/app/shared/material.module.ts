import { NgModule } from '@angular/core'

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { MatButtonModule } from '@angular/material/button'
import { MatTableModule } from '@angular/material/table'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material'

@NgModule({
    exports: [
        MatSidenavModule,
        MatCardModule,
        MatDividerModule,
        MatButtonModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class MaterialModule {}
