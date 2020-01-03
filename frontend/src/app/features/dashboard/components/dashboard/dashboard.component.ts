import { Component } from '@angular/core'
import { GridsterConfig, GridsterItem } from 'angular-gridster2'

import { gridSystemOptions } from '../../models/dashboard-grid-system.model'
import { dashboardGridItems } from '../../models/dashboard-grid-items.model'

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    options: GridsterConfig
    dashboardItems

    ngOnInit() {
        this.options = gridSystemOptions

        this.dashboardItems = dashboardGridItems
    }
}
