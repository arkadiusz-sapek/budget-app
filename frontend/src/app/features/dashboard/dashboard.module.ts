import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { GridsterModule } from 'angular-gridster2'
import { ChartsModule } from 'ng2-charts'

import { SharedModule } from 'src/app/shared/shared.module'

import { DashboardComponent } from './components/dashboard/dashboard.component'
import { CategoriesChartComponent } from './components/categories-chart/categories-chart.component'

@NgModule({
    declarations: [DashboardComponent, CategoriesChartComponent],
    imports: [CommonModule, SharedModule, GridsterModule, ChartsModule]
})
export class DashboardModule {}
