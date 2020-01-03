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

    public barChartOptions = {
        scaleShowVerticalLines: false,
        responsive: true,
        maintainAspectRatio: false
    }

    public barChartLabels = [
        '2006',
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012'
    ]
    public barChartType = 'bar'
    public barChartLegend = true
    public barChartData = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ]

    ngOnInit() {
        this.options = gridSystemOptions

        this.dashboard = [
            { cols: 1, rows: 1, y: 0, x: 0 },
            { cols: 2, rows: 1, y: 1, x: 0 }
        ]
    }
}
