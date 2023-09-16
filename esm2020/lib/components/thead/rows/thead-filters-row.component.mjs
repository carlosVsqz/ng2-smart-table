import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
import * as i0 from "@angular/core";
import * as i1 from "../cells/add-button.component";
import * as i2 from "../../filter/filter.component";
import * as i3 from "@angular/common";
export class TheadFitlersRowComponent {
    constructor() {
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.filterInputClass = this.grid.getSetting('filter.inputClass');
    }
    getVisibleColumns(columns) {
        return (columns || []).filter((column) => !column.hide);
    }
}
TheadFitlersRowComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: TheadFitlersRowComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TheadFitlersRowComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: TheadFitlersRowComponent, selector: "[ng2-st-thead-filters-row]", inputs: { grid: "grid", source: "source" }, outputs: { create: "create", filter: "filter" }, usesOnChanges: true, ngImport: i0, template: `
    <th *ngIf="isMultiSelectVisible"></th>
    <th ng2-st-add-button *ngIf="showActionColumnLeft"
                          [grid]="grid"
                          (create)="create.emit($event)">
    </th>
    <th *ngFor="let column of getVisibleColumns(grid.getColumns())" class="ng2-smart-th {{ column.id }}">
      <ng2-smart-table-filter [source]="source"
                              [column]="column"
                              [inputClass]="filterInputClass"
                              (filter)="filter.emit($event)">
      </ng2-smart-table-filter>
    </th>
    <th ng2-st-add-button *ngIf="showActionColumnRight"
                          [grid]="grid"
                          [source]="source"
                          (create)="create.emit($event)">
    </th>
  `, isInline: true, components: [{ type: i1.AddButtonComponent, selector: "[ng2-st-add-button]", inputs: ["grid", "source"], outputs: ["create"] }, { type: i2.FilterComponent, selector: "ng2-smart-table-filter" }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: TheadFitlersRowComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[ng2-st-thead-filters-row]',
                    template: `
    <th *ngIf="isMultiSelectVisible"></th>
    <th ng2-st-add-button *ngIf="showActionColumnLeft"
                          [grid]="grid"
                          (create)="create.emit($event)">
    </th>
    <th *ngFor="let column of getVisibleColumns(grid.getColumns())" class="ng2-smart-th {{ column.id }}">
      <ng2-smart-table-filter [source]="source"
                              [column]="column"
                              [inputClass]="filterInputClass"
                              (filter)="filter.emit($event)">
      </ng2-smart-table-filter>
    </th>
    <th ng2-st-add-button *ngIf="showActionColumnRight"
                          [grid]="grid"
                          [source]="source"
                          (create)="create.emit($event)">
    </th>
  `,
                }]
        }], propDecorators: { grid: [{
                type: Input
            }], source: [{
                type: Input
            }], create: [{
                type: Output
            }], filter: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtZmlsdGVycy1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy90aGVhZC9yb3dzL3RoZWFkLWZpbHRlcnMtcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRWhGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7O0FBeUJsRSxNQUFNLE9BQU8sd0JBQXdCO0lBdEJyQztRQTJCWSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQWlCNUM7SUFWQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsaUJBQWlCLENBQUMsT0FBc0I7UUFDdEMsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7O3FIQXRCVSx3QkFBd0I7eUdBQXhCLHdCQUF3QixvTEFwQnpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQlQ7MkZBRVUsd0JBQXdCO2tCQXRCcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCVDtpQkFDRjs4QkFHVSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUVJLE1BQU07c0JBQWYsTUFBTTtnQkFDRyxNQUFNO3NCQUFmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9ncmlkJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XHJcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGF0YS1zZXQvY29sdW1uXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tuZzItc3QtdGhlYWQtZmlsdGVycy1yb3ddJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHRoICpuZ0lmPVwiaXNNdWx0aVNlbGVjdFZpc2libGVcIj48L3RoPlxyXG4gICAgPHRoIG5nMi1zdC1hZGQtYnV0dG9uICpuZ0lmPVwic2hvd0FjdGlvbkNvbHVtbkxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtncmlkXT1cImdyaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChjcmVhdGUpPVwiY3JlYXRlLmVtaXQoJGV2ZW50KVwiPlxyXG4gICAgPC90aD5cclxuICAgIDx0aCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGdldFZpc2libGVDb2x1bW5zKGdyaWQuZ2V0Q29sdW1ucygpKVwiIGNsYXNzPVwibmcyLXNtYXJ0LXRoIHt7IGNvbHVtbi5pZCB9fVwiPlxyXG4gICAgICA8bmcyLXNtYXJ0LXRhYmxlLWZpbHRlciBbc291cmNlXT1cInNvdXJjZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW5dPVwiY29sdW1uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0Q2xhc3NdPVwiZmlsdGVySW5wdXRDbGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmaWx0ZXIpPVwiZmlsdGVyLmVtaXQoJGV2ZW50KVwiPlxyXG4gICAgICA8L25nMi1zbWFydC10YWJsZS1maWx0ZXI+XHJcbiAgICA8L3RoPlxyXG4gICAgPHRoIG5nMi1zdC1hZGQtYnV0dG9uICpuZ0lmPVwic2hvd0FjdGlvbkNvbHVtblJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbZ3JpZF09XCJncmlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGNyZWF0ZSk9XCJjcmVhdGUuZW1pdCgkZXZlbnQpXCI+XHJcbiAgICA8L3RoPlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaGVhZEZpdGxlcnNSb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBncmlkOiBHcmlkO1xyXG4gIEBJbnB1dCgpIHNvdXJjZTogRGF0YVNvdXJjZTtcclxuXHJcbiAgQE91dHB1dCgpIGNyZWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBmaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgaXNNdWx0aVNlbGVjdFZpc2libGU6IGJvb2xlYW47XHJcbiAgc2hvd0FjdGlvbkNvbHVtbkxlZnQ6IGJvb2xlYW47XHJcbiAgc2hvd0FjdGlvbkNvbHVtblJpZ2h0OiBib29sZWFuO1xyXG4gIGZpbHRlcklucHV0Q2xhc3M6IHN0cmluZztcclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLmlzTXVsdGlTZWxlY3RWaXNpYmxlID0gdGhpcy5ncmlkLmlzTXVsdGlTZWxlY3RWaXNpYmxlKCk7XHJcbiAgICB0aGlzLnNob3dBY3Rpb25Db2x1bW5MZWZ0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ2xlZnQnKTtcclxuICAgIHRoaXMuc2hvd0FjdGlvbkNvbHVtblJpZ2h0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ3JpZ2h0Jyk7XHJcbiAgICB0aGlzLmZpbHRlcklucHV0Q2xhc3MgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnZmlsdGVyLmlucHV0Q2xhc3MnKTtcclxuICB9XHJcblxyXG4gIGdldFZpc2libGVDb2x1bW5zKGNvbHVtbnM6IEFycmF5PENvbHVtbj4pOiBBcnJheTxDb2x1bW4+IHtcclxuICAgIHJldHVybiAoY29sdW1ucyB8fCBbXSkuZmlsdGVyKChjb2x1bW46IENvbHVtbikgPT4gIWNvbHVtbi5oaWRlKTtcclxuICB9XHJcbn1cclxuIl19