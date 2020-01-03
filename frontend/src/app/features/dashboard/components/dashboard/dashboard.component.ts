import { Component } from '@angular/core'
import { GridsterConfig, GridsterItem } from 'angular-gridster2'

import { gridSystemOptions } from '../../models/dashboard-grid-system.model'

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    options: GridsterConfig
    dashboard: Array<GridsterItem>

    ngOnInit() {
        this.options = gridSystemOptions

        this.dashboard = [
            { cols: 1, rows: 1, y: 0, x: 0 },
            { cols: 1, rows: 1, y: 0, x: 1 }
        ]
    }
}
