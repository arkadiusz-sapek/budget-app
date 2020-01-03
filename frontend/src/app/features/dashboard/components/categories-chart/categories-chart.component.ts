import { Component } from '@angular/core'

@Component({
    selector: 'categories-chart',
    templateUrl: './categories-chart.component.html',
    styleUrls: ['./categories-chart.component.scss']
})
export class CategoriesChartComponent {
    public barChartOptions = {
        scaleShowVerticalLines: false,
        responsive: true,
        maintainAspectRatio: false
    }

    public barChartLabels = [
        'Bills',
        'Travel',
        'Fuel',
        'Eating off',
        'Entertainment',
        'Clothes',
        'General'
    ]
    public barChartType = 'pie'
    public barChartLegend = true
    public barChartData = [{ data: [10, 20, 30, 40, 100, 40, 3] }]
}
