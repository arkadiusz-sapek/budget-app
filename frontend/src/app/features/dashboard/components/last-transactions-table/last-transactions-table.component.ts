import { Component } from '@angular/core'

@Component({
    selector: 'last-transactions-table',
    templateUrl: './last-transactions-table.component.html',
    styleUrls: ['./last-transactions-table.component.scss']
})
export class LastTransactionsTableComponent {
    public lastTransactionsData = [
        { id: 1, name: 'T-short', category: 'clothes', cost: 11 },
        { id: 2, name: 'T-short', category: 'clothes', cost: 11 },
        { id: 3, name: 'T-short', category: 'clothes', cost: 11 },
        { id: 4, name: 'T-short', category: 'clothes', cost: 11 },
        { id: 5, name: 'T-short', category: 'clothes', cost: 11 }
    ]

    public lastTransactionsLabels = ['position', 'name', 'category', 'cost']
}
