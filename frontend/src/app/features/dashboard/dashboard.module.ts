import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { GridsterModule } from 'angular-gridster2'
import { ChartsModule } from 'ng2-charts'

import { SharedModule } from 'src/app/shared/shared.module'

import { DashboardComponent } from './components/dashboard/dashboard.component'
import { CategoriesChartComponent } from './components/categories-chart/categories-chart.component'
import { TransactionsChartComponent } from './components/transactions-chart/transactions-chart.component'
import { AddTransactionPanelComponent } from './components/add-transaction-panel/add-transaction-panel.component'

@NgModule({
    declarations: [
        DashboardComponent,
        CategoriesChartComponent,
        TransactionsChartComponent,
        AddTransactionPanelComponent
    ],
    imports: [CommonModule, SharedModule, GridsterModule, ChartsModule]
})
export class DashboardModule {}
