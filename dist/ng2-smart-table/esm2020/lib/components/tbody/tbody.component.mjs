import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { Grid } from '../../lib/grid';
import { DataSource } from '../../lib/data-source/data-source';
import * as i0 from "@angular/core";
import * as i1 from "./cells/custom.component";
import * as i2 from "./cells/edit-delete.component";
import * as i3 from "./cells/create-cancel.component";
import * as i4 from "../cell/cell.component";
import * as i5 from "@angular/common";
import * as i6 from "@angular/forms";
export class Ng2SmartTableTbodyComponent {
    constructor() {
        this.save = new EventEmitter();
        this.cancel = new EventEmitter();
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.custom = new EventEmitter();
        this.edited = new EventEmitter();
        this.userSelectRow = new EventEmitter();
        this.editRowSelect = new EventEmitter();
        this.multipleSelectRow = new EventEmitter();
        this.rowHover = new EventEmitter();
    }
    get tableColumnsCount() {
        const actionColumns = this.isActionAdd || this.isActionEdit || this.isActionDelete ? 1 : 0;
        return this.grid.getColumns().length + actionColumns;
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.mode = this.grid.getSetting('mode');
        this.editInputClass = this.grid.getSetting('edit.inputClass');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.noDataMessage = this.grid.getSetting('noDataMessage');
    }
    getVisibleCells(cells) {
        return (cells || []).filter((cell) => !cell.getColumn().hide);
    }
}
Ng2SmartTableTbodyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: Ng2SmartTableTbodyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
Ng2SmartTableTbodyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: Ng2SmartTableTbodyComponent, selector: "[ng2-st-tbody]", inputs: { grid: "grid", source: "source", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm", rowClassFunction: "rowClassFunction" }, outputs: { save: "save", cancel: "cancel", edit: "edit", delete: "delete", custom: "custom", edited: "edited", userSelectRow: "userSelectRow", editRowSelect: "editRowSelect", multipleSelectRow: "multipleSelectRow", rowHover: "rowHover" }, usesOnChanges: true, ngImport: i0, template: "<tr *ngFor=\"let row of grid.getRows()\" (click)=\"userSelectRow.emit(row)\" (mouseover)=\"rowHover.emit(row)\" class=\"ng2-smart-row\" [className]=\"rowClassFunction(row)\" [ngClass]=\"{selected: row.isSelected}\">\r\n  <td *ngIf=\"isMultiSelectVisible\" class=\"ng2-smart-actions ng2-smart-action-multiple-select\" (click)=\"multipleSelectRow.emit(row)\">\r\n    <input type=\"checkbox\" class=\"form-control\" [ngModel]=\"row.isSelected\">\r\n  </td>\r\n  <td *ngIf=\"!row.isInEditing && showActionColumnLeft\" class=\"ng2-smart-actions\">\r\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\r\n\r\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\r\n                              [deleteConfirm]=\"deleteConfirm\"\r\n                              [editConfirm]=\"editConfirm\"\r\n                              (edit)=\"edit.emit(row)\"\r\n                              (delete)=\"delete.emit(row)\"\r\n                              (editRowSelect)=\"editRowSelect.emit($event)\"\r\n                              [row]=\"row\"\r\n                              [source]=\"source\">\r\n    </ng2-st-tbody-edit-delete>\r\n  </td>\r\n   <td *ngIf=\"row.isInEditing && showActionColumnLeft\"  class=\"ng2-smart-actions\">\r\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel>\r\n  </td>\r\n  <td *ngFor=\"let cell of getVisibleCells(row.cells)\">\r\n    <ng2-smart-table-cell [cell]=\"cell\"\r\n                          [grid]=\"grid\"\r\n                          [row]=\"row\"\r\n                          [isNew]=\"false\"\r\n                          [mode]=\"mode\"\r\n                          [editConfirm]=\"editConfirm\"\r\n                          [inputClass]=\"editInputClass\"\r\n                          [isInEditing]=\"row.isInEditing\">\r\n    </ng2-smart-table-cell>\r\n  </td>\r\n\r\n  <td *ngIf=\"row.isInEditing && showActionColumnRight\"  class=\"ng2-smart-actions\">\r\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel>\r\n  </td>\r\n\r\n  <td *ngIf=\"!row.isInEditing && showActionColumnRight\" class=\"ng2-smart-actions\">\r\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\r\n\r\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\r\n                              [deleteConfirm]=\"deleteConfirm\"\r\n                              [editConfirm]=\"editConfirm\"\r\n                              [row]=\"row\"\r\n                              [source]=\"source\"\r\n                              (edit)=\"edit.emit(row)\"\r\n                              (delete)=\"delete.emit(row)\"\r\n                              (editRowSelect)=\"editRowSelect.emit($event)\">\r\n    </ng2-st-tbody-edit-delete>\r\n  </td>\r\n</tr>\r\n\r\n<tr *ngIf=\"grid.getRows().length == 0\">\r\n  <td [attr.colspan]=\"tableColumnsCount\">\r\n    {{ noDataMessage }}\r\n  </td>\r\n</tr>\r\n", styles: [":host .ng2-smart-row.selected{background:rgba(0,0,0,.05)}:host .ng2-smart-row .ng2-smart-actions.ng2-smart-action-multiple-select{text-align:center}:host ::ng-deep ng2-st-tbody-edit-delete a:first-child,:host ::ng-deep ng2-st-tbody-create-cancel a:first-child{margin-right:.25rem}\n"], components: [{ type: i1.TbodyCustomComponent, selector: "ng2-st-tbody-custom", inputs: ["grid", "row", "source"], outputs: ["custom"] }, { type: i2.TbodyEditDeleteComponent, selector: "ng2-st-tbody-edit-delete", inputs: ["grid", "row", "source", "deleteConfirm", "editConfirm"], outputs: ["edit", "delete", "editRowSelect"] }, { type: i3.TbodyCreateCancelComponent, selector: "ng2-st-tbody-create-cancel", inputs: ["grid", "row", "editConfirm"] }, { type: i4.CellComponent, selector: "ng2-smart-table-cell", inputs: ["grid", "row", "editConfirm", "createConfirm", "isNew", "cell", "inputClass", "mode", "isInEditing"], outputs: ["edited"] }], directives: [{ type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i6.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: Ng2SmartTableTbodyComponent, decorators: [{
            type: Component,
            args: [{ selector: '[ng2-st-tbody]', template: "<tr *ngFor=\"let row of grid.getRows()\" (click)=\"userSelectRow.emit(row)\" (mouseover)=\"rowHover.emit(row)\" class=\"ng2-smart-row\" [className]=\"rowClassFunction(row)\" [ngClass]=\"{selected: row.isSelected}\">\r\n  <td *ngIf=\"isMultiSelectVisible\" class=\"ng2-smart-actions ng2-smart-action-multiple-select\" (click)=\"multipleSelectRow.emit(row)\">\r\n    <input type=\"checkbox\" class=\"form-control\" [ngModel]=\"row.isSelected\">\r\n  </td>\r\n  <td *ngIf=\"!row.isInEditing && showActionColumnLeft\" class=\"ng2-smart-actions\">\r\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\r\n\r\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\r\n                              [deleteConfirm]=\"deleteConfirm\"\r\n                              [editConfirm]=\"editConfirm\"\r\n                              (edit)=\"edit.emit(row)\"\r\n                              (delete)=\"delete.emit(row)\"\r\n                              (editRowSelect)=\"editRowSelect.emit($event)\"\r\n                              [row]=\"row\"\r\n                              [source]=\"source\">\r\n    </ng2-st-tbody-edit-delete>\r\n  </td>\r\n   <td *ngIf=\"row.isInEditing && showActionColumnLeft\"  class=\"ng2-smart-actions\">\r\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel>\r\n  </td>\r\n  <td *ngFor=\"let cell of getVisibleCells(row.cells)\">\r\n    <ng2-smart-table-cell [cell]=\"cell\"\r\n                          [grid]=\"grid\"\r\n                          [row]=\"row\"\r\n                          [isNew]=\"false\"\r\n                          [mode]=\"mode\"\r\n                          [editConfirm]=\"editConfirm\"\r\n                          [inputClass]=\"editInputClass\"\r\n                          [isInEditing]=\"row.isInEditing\">\r\n    </ng2-smart-table-cell>\r\n  </td>\r\n\r\n  <td *ngIf=\"row.isInEditing && showActionColumnRight\"  class=\"ng2-smart-actions\">\r\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel>\r\n  </td>\r\n\r\n  <td *ngIf=\"!row.isInEditing && showActionColumnRight\" class=\"ng2-smart-actions\">\r\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\r\n\r\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\r\n                              [deleteConfirm]=\"deleteConfirm\"\r\n                              [editConfirm]=\"editConfirm\"\r\n                              [row]=\"row\"\r\n                              [source]=\"source\"\r\n                              (edit)=\"edit.emit(row)\"\r\n                              (delete)=\"delete.emit(row)\"\r\n                              (editRowSelect)=\"editRowSelect.emit($event)\">\r\n    </ng2-st-tbody-edit-delete>\r\n  </td>\r\n</tr>\r\n\r\n<tr *ngIf=\"grid.getRows().length == 0\">\r\n  <td [attr.colspan]=\"tableColumnsCount\">\r\n    {{ noDataMessage }}\r\n  </td>\r\n</tr>\r\n", styles: [":host .ng2-smart-row.selected{background:rgba(0,0,0,.05)}:host .ng2-smart-row .ng2-smart-actions.ng2-smart-action-multiple-select{text-align:center}:host ::ng-deep ng2-st-tbody-edit-delete a:first-child,:host ::ng-deep ng2-st-tbody-create-cancel a:first-child{margin-right:.25rem}\n"] }]
        }], propDecorators: { grid: [{
                type: Input
            }], source: [{
                type: Input
            }], deleteConfirm: [{
                type: Input
            }], editConfirm: [{
                type: Input
            }], rowClassFunction: [{
                type: Input
            }], save: [{
                type: Output
            }], cancel: [{
                type: Output
            }], edit: [{
                type: Output
            }], delete: [{
                type: Output
            }], custom: [{
                type: Output
            }], edited: [{
                type: Output
            }], userSelectRow: [{
                type: Output
            }], editRowSelect: [{
                type: Output
            }], multipleSelectRow: [{
                type: Output
            }], rowHover: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy90Ym9keS90Ym9keS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3Rib2R5L3Rib2R5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEdBQUcsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7Ozs7QUFRL0QsTUFBTSxPQUFPLDJCQUEyQjtJQUx4QztRQWFZLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQy9CLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQy9CLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEMsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUM1QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQWdDOUM7SUFwQkMsSUFBSSxpQkFBaUI7UUFDbkIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELGVBQWUsQ0FBQyxLQUFrQjtRQUNoQyxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7d0hBaERVLDJCQUEyQjs0R0FBM0IsMkJBQTJCLHdjQ1h4QyxxaEdBd0RBOzJGRDdDYSwyQkFBMkI7a0JBTHZDLFNBQVM7K0JBQ0UsZ0JBQWdCOzhCQU1qQixJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBRUksSUFBSTtzQkFBYixNQUFNO2dCQUNHLE1BQU07c0JBQWYsTUFBTTtnQkFDRyxJQUFJO3NCQUFiLE1BQU07Z0JBQ0csTUFBTTtzQkFBZixNQUFNO2dCQUNHLE1BQU07c0JBQWYsTUFBTTtnQkFDRyxNQUFNO3NCQUFmLE1BQU07Z0JBQ0csYUFBYTtzQkFBdEIsTUFBTTtnQkFDRyxhQUFhO3NCQUF0QixNQUFNO2dCQUNHLGlCQUFpQjtzQkFBMUIsTUFBTTtnQkFDRyxRQUFRO3NCQUFqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi9saWIvZ3JpZCc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xyXG5pbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi4vLi4vbGliL2RhdGEtc2V0L2NlbGwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbbmcyLXN0LXRib2R5XScsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGJvZHkuY29tcG9uZW50LnNjc3MnXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGJvZHkuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmcyU21hcnRUYWJsZVRib2R5Q29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgZ3JpZDogR3JpZDtcclxuICBASW5wdXQoKSBzb3VyY2U6IERhdGFTb3VyY2U7XHJcbiAgQElucHV0KCkgZGVsZXRlQ29uZmlybTogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgQElucHV0KCkgZWRpdENvbmZpcm06IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4gIEBJbnB1dCgpIHJvd0NsYXNzRnVuY3Rpb246IEZ1bmN0aW9uO1xyXG5cclxuICBAT3V0cHV0KCkgc2F2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBjYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBkZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgY3VzdG9tID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGVkaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSB1c2VyU2VsZWN0Um93ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGVkaXRSb3dTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgbXVsdGlwbGVTZWxlY3RSb3cgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgcm93SG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgaXNNdWx0aVNlbGVjdFZpc2libGU6IGJvb2xlYW47XHJcbiAgc2hvd0FjdGlvbkNvbHVtbkxlZnQ6IGJvb2xlYW47XHJcbiAgc2hvd0FjdGlvbkNvbHVtblJpZ2h0OiBib29sZWFuO1xyXG4gIG1vZGU6IHN0cmluZztcclxuICBlZGl0SW5wdXRDbGFzczogc3RyaW5nO1xyXG4gIGlzQWN0aW9uQWRkOiBib29sZWFuO1xyXG4gIGlzQWN0aW9uRWRpdDogYm9vbGVhbjtcclxuICBpc0FjdGlvbkRlbGV0ZTogYm9vbGVhbjtcclxuICBub0RhdGFNZXNzYWdlOiBib29sZWFuO1xyXG5cclxuICBnZXQgdGFibGVDb2x1bW5zQ291bnQoKSB7XHJcbiAgICBjb25zdCBhY3Rpb25Db2x1bW5zID0gdGhpcy5pc0FjdGlvbkFkZCB8fCB0aGlzLmlzQWN0aW9uRWRpdCB8fCB0aGlzLmlzQWN0aW9uRGVsZXRlID8gMSA6IDA7XHJcbiAgICByZXR1cm4gdGhpcy5ncmlkLmdldENvbHVtbnMoKS5sZW5ndGggKyBhY3Rpb25Db2x1bW5zO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLmlzTXVsdGlTZWxlY3RWaXNpYmxlID0gdGhpcy5ncmlkLmlzTXVsdGlTZWxlY3RWaXNpYmxlKCk7XHJcbiAgICB0aGlzLnNob3dBY3Rpb25Db2x1bW5MZWZ0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ2xlZnQnKTtcclxuICAgIHRoaXMubW9kZSA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdtb2RlJyk7XHJcbiAgICB0aGlzLmVkaXRJbnB1dENsYXNzID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2VkaXQuaW5wdXRDbGFzcycpO1xyXG4gICAgdGhpcy5zaG93QWN0aW9uQ29sdW1uUmlnaHQgPSB0aGlzLmdyaWQuc2hvd0FjdGlvbkNvbHVtbigncmlnaHQnKTtcclxuICAgIHRoaXMuaXNBY3Rpb25BZGQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWN0aW9ucy5hZGQnKTtcclxuICAgIHRoaXMuaXNBY3Rpb25FZGl0ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2FjdGlvbnMuZWRpdCcpO1xyXG4gICAgdGhpcy5pc0FjdGlvbkRlbGV0ZSA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhY3Rpb25zLmRlbGV0ZScpO1xyXG4gICAgdGhpcy5ub0RhdGFNZXNzYWdlID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ25vRGF0YU1lc3NhZ2UnKTtcclxuICB9XHJcblxyXG4gIGdldFZpc2libGVDZWxscyhjZWxsczogQXJyYXk8Q2VsbD4pOiBBcnJheTxDZWxsPiB7XHJcbiAgICByZXR1cm4gKGNlbGxzIHx8IFtdKS5maWx0ZXIoKGNlbGw6IENlbGwpID0+ICFjZWxsLmdldENvbHVtbigpLmhpZGUpO1xyXG4gIH1cclxufVxyXG4iLCI8dHIgKm5nRm9yPVwibGV0IHJvdyBvZiBncmlkLmdldFJvd3MoKVwiIChjbGljayk9XCJ1c2VyU2VsZWN0Um93LmVtaXQocm93KVwiIChtb3VzZW92ZXIpPVwicm93SG92ZXIuZW1pdChyb3cpXCIgY2xhc3M9XCJuZzItc21hcnQtcm93XCIgW2NsYXNzTmFtZV09XCJyb3dDbGFzc0Z1bmN0aW9uKHJvdylcIiBbbmdDbGFzc109XCJ7c2VsZWN0ZWQ6IHJvdy5pc1NlbGVjdGVkfVwiPlxyXG4gIDx0ZCAqbmdJZj1cImlzTXVsdGlTZWxlY3RWaXNpYmxlXCIgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9ucyBuZzItc21hcnQtYWN0aW9uLW11bHRpcGxlLXNlbGVjdFwiIChjbGljayk9XCJtdWx0aXBsZVNlbGVjdFJvdy5lbWl0KHJvdylcIj5cclxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFtuZ01vZGVsXT1cInJvdy5pc1NlbGVjdGVkXCI+XHJcbiAgPC90ZD5cclxuICA8dGQgKm5nSWY9XCIhcm93LmlzSW5FZGl0aW5nICYmIHNob3dBY3Rpb25Db2x1bW5MZWZ0XCIgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9uc1wiPlxyXG4gICAgPG5nMi1zdC10Ym9keS1jdXN0b20gW2dyaWRdPVwiZ3JpZFwiIChjdXN0b20pPVwiY3VzdG9tLmVtaXQoJGV2ZW50KVwiIFtyb3ddPVwicm93XCIgW3NvdXJjZV09XCJzb3VyY2VcIj48L25nMi1zdC10Ym9keS1jdXN0b20+XHJcblxyXG4gICAgPG5nMi1zdC10Ym9keS1lZGl0LWRlbGV0ZSBbZ3JpZF09XCJncmlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RlbGV0ZUNvbmZpcm1dPVwiZGVsZXRlQ29uZmlybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtlZGl0Q29uZmlybV09XCJlZGl0Q29uZmlybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlZGl0KT1cImVkaXQuZW1pdChyb3cpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRlbGV0ZSk9XCJkZWxldGUuZW1pdChyb3cpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVkaXRSb3dTZWxlY3QpPVwiZWRpdFJvd1NlbGVjdC5lbWl0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93XT1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzb3VyY2VdPVwic291cmNlXCI+XHJcbiAgICA8L25nMi1zdC10Ym9keS1lZGl0LWRlbGV0ZT5cclxuICA8L3RkPlxyXG4gICA8dGQgKm5nSWY9XCJyb3cuaXNJbkVkaXRpbmcgJiYgc2hvd0FjdGlvbkNvbHVtbkxlZnRcIiAgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9uc1wiPlxyXG4gICAgPG5nMi1zdC10Ym9keS1jcmVhdGUtY2FuY2VsIFtncmlkXT1cImdyaWRcIiBbcm93XT1cInJvd1wiIFtlZGl0Q29uZmlybV09XCJlZGl0Q29uZmlybVwiPjwvbmcyLXN0LXRib2R5LWNyZWF0ZS1jYW5jZWw+XHJcbiAgPC90ZD5cclxuICA8dGQgKm5nRm9yPVwibGV0IGNlbGwgb2YgZ2V0VmlzaWJsZUNlbGxzKHJvdy5jZWxscylcIj5cclxuICAgIDxuZzItc21hcnQtdGFibGUtY2VsbCBbY2VsbF09XCJjZWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbZ3JpZF09XCJncmlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93XT1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2lzTmV3XT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbbW9kZV09XCJtb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbZWRpdENvbmZpcm1dPVwiZWRpdENvbmZpcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImVkaXRJbnB1dENsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbaXNJbkVkaXRpbmddPVwicm93LmlzSW5FZGl0aW5nXCI+XHJcbiAgICA8L25nMi1zbWFydC10YWJsZS1jZWxsPlxyXG4gIDwvdGQ+XHJcblxyXG4gIDx0ZCAqbmdJZj1cInJvdy5pc0luRWRpdGluZyAmJiBzaG93QWN0aW9uQ29sdW1uUmlnaHRcIiAgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9uc1wiPlxyXG4gICAgPG5nMi1zdC10Ym9keS1jcmVhdGUtY2FuY2VsIFtncmlkXT1cImdyaWRcIiBbcm93XT1cInJvd1wiIFtlZGl0Q29uZmlybV09XCJlZGl0Q29uZmlybVwiPjwvbmcyLXN0LXRib2R5LWNyZWF0ZS1jYW5jZWw+XHJcbiAgPC90ZD5cclxuXHJcbiAgPHRkICpuZ0lmPVwiIXJvdy5pc0luRWRpdGluZyAmJiBzaG93QWN0aW9uQ29sdW1uUmlnaHRcIiBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb25zXCI+XHJcbiAgICA8bmcyLXN0LXRib2R5LWN1c3RvbSBbZ3JpZF09XCJncmlkXCIgKGN1c3RvbSk9XCJjdXN0b20uZW1pdCgkZXZlbnQpXCIgW3Jvd109XCJyb3dcIiBbc291cmNlXT1cInNvdXJjZVwiPjwvbmcyLXN0LXRib2R5LWN1c3RvbT5cclxuXHJcbiAgICA8bmcyLXN0LXRib2R5LWVkaXQtZGVsZXRlIFtncmlkXT1cImdyaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVsZXRlQ29uZmlybV09XCJkZWxldGVDb25maXJtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2VkaXRDb25maXJtXT1cImVkaXRDb25maXJtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd109XCJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlZGl0KT1cImVkaXQuZW1pdChyb3cpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRlbGV0ZSk9XCJkZWxldGUuZW1pdChyb3cpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVkaXRSb3dTZWxlY3QpPVwiZWRpdFJvd1NlbGVjdC5lbWl0KCRldmVudClcIj5cclxuICAgIDwvbmcyLXN0LXRib2R5LWVkaXQtZGVsZXRlPlxyXG4gIDwvdGQ+XHJcbjwvdHI+XHJcblxyXG48dHIgKm5nSWY9XCJncmlkLmdldFJvd3MoKS5sZW5ndGggPT0gMFwiPlxyXG4gIDx0ZCBbYXR0ci5jb2xzcGFuXT1cInRhYmxlQ29sdW1uc0NvdW50XCI+XHJcbiAgICB7eyBub0RhdGFNZXNzYWdlIH19XHJcbiAgPC90ZD5cclxuPC90cj5cclxuIl19