import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { SharedModule } from 'src/app/shared/shared.module'

import { DashboardComponent } from './components/dashboard.component'

@NgModule({
    declarations: [DashboardComponent],
    imports: [CommonModule, SharedModule]
})
export class DashboardModule {}
