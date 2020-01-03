import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { GridsterModule } from 'angular-gridster2'
import { ChartsModule } from 'ng2-charts'

import { SharedModule } from 'src/app/shared/shared.module'

import { DashboardComponent } from './components/dashboard/dashboard.component'

@NgModule({
    declarations: [DashboardComponent],
    imports: [CommonModule, SharedModule, GridsterModule, ChartsModule]
})
export class DashboardModule {}
