import { Component } from '@angular/core'

@Component({
    selector: 'transactions-chart',
    templateUrl: './transactions-chart.component.html',
    styleUrls: ['./transactions-chart.component.scss']
})
export class TransactionsChartComponent {
    public lineChartOptions = {
        scaleShowVerticalLines: false,
        responsive: true,
        maintainAspectRatio: false,
        options: {
            scales: {
                xAxes: [
                    {
                        type: 'time',
                        distribution: 'linear'
                    }
                ]
            }
        }
    }

    public lineChartLabels = ['January', 'February', 'March']
    public lineChartType = 'line'
    public lineChartLegend = true
    public lineChartData = [
        {
            label: 'Expense',
            data: [
                {
                    t: 'January',
                    y: 1200
                },
                {
                    t: 'February',
                    y: 1500
                },
                {
                    t: 'March',
                    y: 3200
                }
            ]
        }
    ]
}
