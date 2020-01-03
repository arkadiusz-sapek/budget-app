import { Component } from '@angular/core'

@Component({
    selector: 'categories-chart',
    templateUrl: './categories-chart.component.html',
    styleUrls: ['./categories-chart.component.scss']
})
export class CategoriesChartComponent {
    public pieChartOptions = {
        scaleShowVerticalLines: false,
        responsive: true,
        maintainAspectRatio: false
    }

    public pieChartLabels = [
        'Bills',
        'Travel',
        'Fuel',
        'Eating off',
        'Entertainment',
        'Clothes',
        'General'
    ]
    public pieChartType = 'pie'
    public pieChartLegend = true
    public pieChartData = [{ data: [10, 20, 30, 40, 100, 40, 3] }]
}
