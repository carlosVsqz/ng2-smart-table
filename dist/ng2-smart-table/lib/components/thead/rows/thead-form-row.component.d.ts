import { EventEmitter, OnChanges } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
import { Cell } from '../../../lib/data-set/cell';
import * as i0 from "@angular/core";
export declare class TheadFormRowComponent implements OnChanges {
    grid: Grid;
    row: Row;
    createConfirm: EventEmitter<any>;
    create: EventEmitter<any>;
    isMultiSelectVisible: boolean;
    showActionColumnLeft: boolean;
    showActionColumnRight: boolean;
    addInputClass: string;
    onCreate(event: any): void;
    ngOnChanges(): void;
    getVisibleCells(cells: Array<Cell>): Array<Cell>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TheadFormRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TheadFormRowComponent, "[ng2-st-thead-form-row]", never, { "grid": "grid"; "row": "row"; "createConfirm": "createConfirm"; }, { "create": "create"; }, never, never>;
}
