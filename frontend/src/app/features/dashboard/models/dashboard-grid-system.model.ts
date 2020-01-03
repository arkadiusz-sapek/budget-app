import { DisplayGrid, GridType } from 'angular-gridster2'

export const gridSystemOptions = {
    gridType: GridType.Fit,
    displayGrid: DisplayGrid.None,
    pushItems: true,
    draggable: {
        enabled: true
    },
    resizable: {
        enabled: true
    },
    minCols: 2,
    maxCols: 2,
    minRows: 3,
    maxRows: 3,
    maxItemRows: 1,
    minItemRows: 1
}
