import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Grid } from './lib/grid';
import { DataSource } from './lib/data-source/data-source';
import { deepExtend, getPageForRowIndex } from './lib/helpers';
import { LocalDataSource } from './lib/data-source/local/local.data-source';
import * as i0 from "@angular/core";
import * as i1 from "./components/thead/thead.component";
import * as i2 from "./components/tbody/tbody.component";
import * as i3 from "./components/pager/pager.component";
import * as i4 from "@angular/common";
export class Ng2SmartTableComponent {
    constructor() {
        this.settings = {};
        this.rowSelect = new EventEmitter();
        this.rowDeselect = new EventEmitter();
        this.userRowSelect = new EventEmitter();
        this.delete = new EventEmitter();
        this.edit = new EventEmitter();
        this.create = new EventEmitter();
        this.custom = new EventEmitter();
        this.deleteConfirm = new EventEmitter();
        this.editConfirm = new EventEmitter();
        this.createConfirm = new EventEmitter();
        this.rowHover = new EventEmitter();
        this.defaultSettings = {
            mode: 'inline',
            selectMode: 'single',
            /**
             * Points to an element in all data
             *
             * when < 0 all lines must be deselected
             */
            selectedRowIndex: 0,
            switchPageToSelectedRowPage: false,
            hideHeader: false,
            hideSubHeader: false,
            actions: {
                columnTitle: 'Actions',
                add: true,
                edit: true,
                delete: true,
                custom: [],
                position: 'left', // left|right
            },
            filter: {
                inputClass: '',
            },
            edit: {
                inputClass: '',
                editButtonContent: 'Edit',
                saveButtonContent: 'Update',
                cancelButtonContent: 'Cancel',
                confirmSave: false,
            },
            add: {
                inputClass: '',
                addButtonContent: 'Add New',
                createButtonContent: 'Create',
                cancelButtonContent: 'Cancel',
                confirmCreate: false,
            },
            delete: {
                deleteButtonContent: 'Delete',
                confirmDelete: false,
            },
            attr: {
                id: '',
                class: '',
            },
            noDataMessage: 'No data found',
            columns: {},
            pager: {
                display: true,
                page: 1,
                perPage: 10,
            },
            rowClassFunction: () => '',
        };
        this.isAllSelected = false;
        this.destroyed$ = new Subject();
    }
    ngOnChanges(changes) {
        if (this.grid) {
            if (changes['settings']) {
                this.grid.setSettings(this.prepareSettings());
            }
            if (changes['source']) {
                this.source = this.prepareSource();
                this.grid.setSource(this.source);
            }
        }
        else {
            this.initGrid();
        }
        this.tableId = this.grid.getSetting('attr.id');
        this.tableClass = this.grid.getSetting('attr.class');
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
        this.isPagerDisplay = this.grid.getSetting('pager.display');
        this.isPagerDisplay = this.grid.getSetting('pager.display');
        this.perPageSelect = this.grid.getSetting('pager.perPageSelect');
        this.rowClassFunction = this.grid.getSetting('rowClassFunction');
    }
    ngOnDestroy() {
        this.destroyed$.next();
    }
    selectRow(index, switchPageToSelectedRowPage = this.grid.getSetting('switchPageToSelectedRowPage')) {
        if (!this.grid) {
            return;
        }
        this.grid.settings.selectedRowIndex = index;
        if (this.isIndexOutOfRange(index)) {
            // we need to deselect all rows if we got an incorrect index
            this.deselectAllRows();
            return;
        }
        if (switchPageToSelectedRowPage) {
            const source = this.source;
            const paging = source.getPaging();
            const page = getPageForRowIndex(index, paging.perPage);
            index = index % paging.perPage;
            this.grid.settings.selectedRowIndex = index;
            if (page !== paging.page) {
                source.setPage(page);
                return;
            }
        }
        const row = this.grid.getRows()[index];
        if (row) {
            this.onSelectRow(row);
        }
        else {
            // we need to deselect all rows if we got an incorrect index
            this.deselectAllRows();
        }
    }
    deselectAllRows() {
        this.grid.dataSet.deselectAll();
        this.emitDeselectRow(null);
    }
    editRowSelect(row) {
        if (this.grid.getSetting('selectMode') === 'multi') {
            this.onMultipleSelectRow(row);
        }
        else {
            this.onSelectRow(row);
        }
    }
    onUserSelectRow(row) {
        if (this.grid.getSetting('selectMode') !== 'multi') {
            this.grid.selectRow(row);
            this.emitUserSelectRow(row);
            this.emitSelectRow(row);
        }
    }
    onRowHover(row) {
        this.rowHover.emit(row);
    }
    multipleSelectRow(row) {
        this.grid.multipleSelectRow(row);
        this.emitUserSelectRow(row);
        this.emitSelectRow(row);
    }
    onSelectAllRows($event) {
        this.isAllSelected = !this.isAllSelected;
        this.grid.selectAllRows(this.isAllSelected);
        this.emitUserSelectRow(null);
        this.emitSelectRow(null);
    }
    onSelectRow(row) {
        this.grid.selectRow(row);
        this.emitSelectRow(row);
    }
    onMultipleSelectRow(row) {
        this.emitSelectRow(row);
    }
    initGrid() {
        this.source = this.prepareSource();
        this.grid = new Grid(this.source, this.prepareSettings());
        this.subscribeToOnSelectRow();
        this.subscribeToOnDeselectRow();
    }
    prepareSource() {
        if (this.source instanceof DataSource) {
            return this.source;
        }
        else if (this.source instanceof Array) {
            return new LocalDataSource(this.source);
        }
        return new LocalDataSource();
    }
    prepareSettings() {
        return deepExtend({}, this.defaultSettings, this.settings);
    }
    changePage($event) {
        this.resetAllSelector();
    }
    sort($event) {
        this.resetAllSelector();
    }
    filter($event) {
        this.resetAllSelector();
    }
    resetAllSelector() {
        this.isAllSelected = false;
    }
    emitUserSelectRow(row) {
        const selectedRows = this.grid.getSelectedRows();
        this.userRowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
            selected: selectedRows && selectedRows.length ? selectedRows.map((r) => r.getData()) : [],
        });
    }
    emitSelectRow(row) {
        const data = {
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
        };
        this.rowSelect.emit(data);
        if (!row?.isSelected) {
            this.rowDeselect.emit(data);
        }
    }
    emitDeselectRow(row) {
        this.rowDeselect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
        });
    }
    isIndexOutOfRange(index) {
        const dataAmount = this.source?.count();
        return index < 0 || (typeof dataAmount === 'number' && index >= dataAmount);
    }
    subscribeToOnSelectRow() {
        if (this.onSelectRowSubscription) {
            this.onSelectRowSubscription.unsubscribe();
        }
        this.onSelectRowSubscription = this.grid.onSelectRow()
            .pipe(takeUntil(this.destroyed$))
            .subscribe((row) => {
            this.emitSelectRow(row);
        });
    }
    subscribeToOnDeselectRow() {
        if (this.onDeselectRowSubscription) {
            this.onDeselectRowSubscription.unsubscribe();
        }
        this.onDeselectRowSubscription = this.grid.onDeselectRow()
            .pipe(takeUntil(this.destroyed$))
            .subscribe((row) => {
            this.emitDeselectRow(row);
        });
    }
}
Ng2SmartTableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: Ng2SmartTableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
Ng2SmartTableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: Ng2SmartTableComponent, selector: "ng2-smart-table", inputs: { source: "source", settings: "settings" }, outputs: { rowSelect: "rowSelect", rowDeselect: "rowDeselect", userRowSelect: "userRowSelect", delete: "delete", edit: "edit", create: "create", custom: "custom", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm", createConfirm: "createConfirm", rowHover: "rowHover" }, usesOnChanges: true, ngImport: i0, template: "<table [id]=\"tableId\" [ngClass]=\"tableClass\">\r\n\r\n  <thead ng2-st-thead *ngIf=\"!isHideHeader || !isHideSubHeader\"\r\n                      [grid]=\"grid\"\r\n                      [isAllSelected]=\"isAllSelected\"\r\n                      [source]=\"source\"\r\n                      [createConfirm]=\"createConfirm\"\r\n                      (create)=\"create.emit($event)\"\r\n                      (selectAllRows)=\"onSelectAllRows($event)\"\r\n                      (sort)=\"sort($event)\"\r\n                      (filter)=\"filter($event)\">\r\n  </thead>\r\n\r\n  <tbody ng2-st-tbody [grid]=\"grid\"\r\n                      [source]=\"source\"\r\n                      [deleteConfirm]=\"deleteConfirm\"\r\n                      [editConfirm]=\"editConfirm\"\r\n                      [rowClassFunction]=\"rowClassFunction\"\r\n                      (edit)=\"edit.emit($event)\"\r\n                      (delete)=\"delete.emit($event)\"\r\n                      (custom)=\"custom.emit($event)\"\r\n                      (userSelectRow)=\"onUserSelectRow($event)\"\r\n                      (editRowSelect)=\"editRowSelect($event)\"\r\n                      (multipleSelectRow)=\"multipleSelectRow($event)\"\r\n                      (rowHover)=\"onRowHover($event)\">\r\n  </tbody>\r\n\r\n</table>\r\n\r\n<ng2-smart-table-pager *ngIf=\"isPagerDisplay\"\r\n                        [source]=\"source\"\r\n                        [perPageSelect]=\"perPageSelect\"\r\n                        (changePage)=\"changePage($event)\">\r\n</ng2-smart-table-pager>\r\n", styles: [":host{font-size:1rem}:host ::ng-deep *{box-sizing:border-box}:host ::ng-deep button,:host ::ng-deep input,:host ::ng-deep optgroup,:host ::ng-deep select,:host ::ng-deep textarea{color:inherit;font:inherit;margin:0}:host ::ng-deep table{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;width:100%;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all}:host ::ng-deep table tr th{font-weight:700}:host ::ng-deep table tr section{font-size:.75em;font-weight:700}:host ::ng-deep table tr td,:host ::ng-deep table tr th{font-size:.875em;margin:0;padding:.5em 1em}:host ::ng-deep a{color:#1e6bb8;text-decoration:none}:host ::ng-deep a:hover{text-decoration:underline}\n"], components: [{ type: i1.Ng2SmartTableTheadComponent, selector: "[ng2-st-thead]", inputs: ["grid", "source", "isAllSelected", "createConfirm"], outputs: ["sort", "selectAllRows", "create", "filter"] }, { type: i2.Ng2SmartTableTbodyComponent, selector: "[ng2-st-tbody]", inputs: ["grid", "source", "deleteConfirm", "editConfirm", "rowClassFunction"], outputs: ["save", "cancel", "edit", "delete", "custom", "edited", "userSelectRow", "editRowSelect", "multipleSelectRow", "rowHover"] }, { type: i3.PagerComponent, selector: "ng2-smart-table-pager", inputs: ["source", "perPageSelect"], outputs: ["changePage"] }], directives: [{ type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: Ng2SmartTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ng2-smart-table', template: "<table [id]=\"tableId\" [ngClass]=\"tableClass\">\r\n\r\n  <thead ng2-st-thead *ngIf=\"!isHideHeader || !isHideSubHeader\"\r\n                      [grid]=\"grid\"\r\n                      [isAllSelected]=\"isAllSelected\"\r\n                      [source]=\"source\"\r\n                      [createConfirm]=\"createConfirm\"\r\n                      (create)=\"create.emit($event)\"\r\n                      (selectAllRows)=\"onSelectAllRows($event)\"\r\n                      (sort)=\"sort($event)\"\r\n                      (filter)=\"filter($event)\">\r\n  </thead>\r\n\r\n  <tbody ng2-st-tbody [grid]=\"grid\"\r\n                      [source]=\"source\"\r\n                      [deleteConfirm]=\"deleteConfirm\"\r\n                      [editConfirm]=\"editConfirm\"\r\n                      [rowClassFunction]=\"rowClassFunction\"\r\n                      (edit)=\"edit.emit($event)\"\r\n                      (delete)=\"delete.emit($event)\"\r\n                      (custom)=\"custom.emit($event)\"\r\n                      (userSelectRow)=\"onUserSelectRow($event)\"\r\n                      (editRowSelect)=\"editRowSelect($event)\"\r\n                      (multipleSelectRow)=\"multipleSelectRow($event)\"\r\n                      (rowHover)=\"onRowHover($event)\">\r\n  </tbody>\r\n\r\n</table>\r\n\r\n<ng2-smart-table-pager *ngIf=\"isPagerDisplay\"\r\n                        [source]=\"source\"\r\n                        [perPageSelect]=\"perPageSelect\"\r\n                        (changePage)=\"changePage($event)\">\r\n</ng2-smart-table-pager>\r\n", styles: [":host{font-size:1rem}:host ::ng-deep *{box-sizing:border-box}:host ::ng-deep button,:host ::ng-deep input,:host ::ng-deep optgroup,:host ::ng-deep select,:host ::ng-deep textarea{color:inherit;font:inherit;margin:0}:host ::ng-deep table{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;width:100%;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all}:host ::ng-deep table tr th{font-weight:700}:host ::ng-deep table tr section{font-size:.75em;font-weight:700}:host ::ng-deep table tr td,:host ::ng-deep table tr th{font-size:.875em;margin:0;padding:.5em 1em}:host ::ng-deep a{color:#1e6bb8;text-decoration:none}:host ::ng-deep a:hover{text-decoration:underline}\n"] }]
        }], propDecorators: { source: [{
                type: Input
            }], settings: [{
                type: Input
            }], rowSelect: [{
                type: Output
            }], rowDeselect: [{
                type: Output
            }], userRowSelect: [{
                type: Output
            }], delete: [{
                type: Output
            }], edit: [{
                type: Output
            }], create: [{
                type: Output
            }], custom: [{
                type: Output
            }], deleteConfirm: [{
                type: Output
            }], editConfirm: [{
                type: Output
            }], createConfirm: [{
                type: Output
            }], rowHover: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNtYXJ0LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvbGliL25nMi1zbWFydC10YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9uZzItc21hcnQtdGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFnQixZQUFZLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBQzNHLE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7O0FBTzVFLE1BQU0sT0FBTyxzQkFBc0I7SUFMbkM7UUFRVyxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBRXJCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN0QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDL0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFP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LElBQUk7c0JBQWIsTUFBTTtnQkFDRyxNQUFNO3NCQUFmLE1BQU07Z0JBQ0csTUFBTTtzQkFBZixNQUFNO2dCQUNHLGFBQWE7c0JBQXRCLE1BQU07Z0JBQ0csV0FBVztzQkFBcEIsTUFBTTtnQkFDRyxhQUFhO3NCQUF0QixNQUFNO2dCQUNHLFFBQVE7c0JBQWpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZSwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vbGliL2dyaWQnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xyXG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuL2xpYi9kYXRhLXNldC9yb3cnO1xyXG5pbXBvcnQgeyBkZWVwRXh0ZW5kLCBnZXRQYWdlRm9yUm93SW5kZXggfSBmcm9tICcuL2xpYi9oZWxwZXJzJztcclxuaW1wb3J0IHsgTG9jYWxEYXRhU291cmNlIH0gZnJvbSAnLi9saWIvZGF0YS1zb3VyY2UvbG9jYWwvbG9jYWwuZGF0YS1zb3VyY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZzItc21hcnQtdGFibGUnLFxyXG4gIHN0eWxlVXJsczogWycuL25nMi1zbWFydC10YWJsZS5jb21wb25lbnQuc2NzcyddLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uZzItc21hcnQtdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmcyU21hcnRUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcbiAgQElucHV0KCkgc291cmNlOiBhbnk7XHJcbiAgQElucHV0KCkgc2V0dGluZ3M6IE9iamVjdCA9IHt9O1xyXG5cclxuICBAT3V0cHV0KCkgcm93U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHJvd0Rlc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHVzZXJSb3dTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgY3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGN1c3RvbSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBkZWxldGVDb25maXJtID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGVkaXRDb25maXJtID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGNyZWF0ZUNvbmZpcm0gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgcm93SG92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHRhYmxlQ2xhc3M6IHN0cmluZztcclxuICB0YWJsZUlkOiBzdHJpbmc7XHJcbiAgcGVyUGFnZVNlbGVjdDogYW55O1xyXG4gIGlzSGlkZUhlYWRlcjogYm9vbGVhbjtcclxuICBpc0hpZGVTdWJIZWFkZXI6IGJvb2xlYW47XHJcbiAgaXNQYWdlckRpc3BsYXk6IGJvb2xlYW47XHJcbiAgcm93Q2xhc3NGdW5jdGlvbjogRnVuY3Rpb247XHJcblxyXG4gIGdyaWQ6IEdyaWQ7XHJcbiAgZGVmYXVsdFNldHRpbmdzOiBPYmplY3QgPSB7XHJcbiAgICBtb2RlOiAnaW5saW5lJywgLy8gaW5saW5lfGV4dGVybmFsfGNsaWNrLXRvLWVkaXRcclxuICAgIHNlbGVjdE1vZGU6ICdzaW5nbGUnLCAvLyBzaW5nbGV8bXVsdGlcclxuICAgIC8qKlxyXG4gICAgICogUG9pbnRzIHRvIGFuIGVsZW1lbnQgaW4gYWxsIGRhdGFcclxuICAgICAqXHJcbiAgICAgKiB3aGVuIDwgMCBhbGwgbGluZXMgbXVzdCBiZSBkZXNlbGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHNlbGVjdGVkUm93SW5kZXg6IDAsXHJcbiAgICBzd2l0Y2hQYWdlVG9TZWxlY3RlZFJvd1BhZ2U6IGZhbHNlLFxyXG4gICAgaGlkZUhlYWRlcjogZmFsc2UsXHJcbiAgICBoaWRlU3ViSGVhZGVyOiBmYWxzZSxcclxuICAgIGFjdGlvbnM6IHtcclxuICAgICAgY29sdW1uVGl0bGU6ICdBY3Rpb25zJyxcclxuICAgICAgYWRkOiB0cnVlLFxyXG4gICAgICBlZGl0OiB0cnVlLFxyXG4gICAgICBkZWxldGU6IHRydWUsXHJcbiAgICAgIGN1c3RvbTogW10sXHJcbiAgICAgIHBvc2l0aW9uOiAnbGVmdCcsIC8vIGxlZnR8cmlnaHRcclxuICAgIH0sXHJcbiAgICBmaWx0ZXI6IHtcclxuICAgICAgaW5wdXRDbGFzczogJycsXHJcbiAgICB9LFxyXG4gICAgZWRpdDoge1xyXG4gICAgICBpbnB1dENsYXNzOiAnJyxcclxuICAgICAgZWRpdEJ1dHRvbkNvbnRlbnQ6ICdFZGl0JyxcclxuICAgICAgc2F2ZUJ1dHRvbkNvbnRlbnQ6ICdVcGRhdGUnLFxyXG4gICAgICBjYW5jZWxCdXR0b25Db250ZW50OiAnQ2FuY2VsJyxcclxuICAgICAgY29uZmlybVNhdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIGFkZDoge1xyXG4gICAgICBpbnB1dENsYXNzOiAnJyxcclxuICAgICAgYWRkQnV0dG9uQ29udGVudDogJ0FkZCBOZXcnLFxyXG4gICAgICBjcmVhdGVCdXR0b25Db250ZW50OiAnQ3JlYXRlJyxcclxuICAgICAgY2FuY2VsQnV0dG9uQ29udGVudDogJ0NhbmNlbCcsXHJcbiAgICAgIGNvbmZpcm1DcmVhdGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIGRlbGV0ZToge1xyXG4gICAgICBkZWxldGVCdXR0b25Db250ZW50OiAnRGVsZXRlJyxcclxuICAgICAgY29uZmlybURlbGV0ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgYXR0cjoge1xyXG4gICAgICBpZDogJycsXHJcbiAgICAgIGNsYXNzOiAnJyxcclxuICAgIH0sXHJcbiAgICBub0RhdGFNZXNzYWdlOiAnTm8gZGF0YSBmb3VuZCcsXHJcbiAgICBjb2x1bW5zOiB7fSxcclxuICAgIHBhZ2VyOiB7XHJcbiAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgIHBhZ2U6IDEsXHJcbiAgICAgIHBlclBhZ2U6IDEwLFxyXG4gICAgfSxcclxuICAgIHJvd0NsYXNzRnVuY3Rpb246ICgpID0+ICcnLFxyXG4gIH07XHJcblxyXG4gIGlzQWxsU2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBvblNlbGVjdFJvd1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgb25EZXNlbGVjdFJvd1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcclxuICAgIGlmICh0aGlzLmdyaWQpIHtcclxuICAgICAgaWYgKGNoYW5nZXNbJ3NldHRpbmdzJ10pIHtcclxuICAgICAgICB0aGlzLmdyaWQuc2V0U2V0dGluZ3ModGhpcy5wcmVwYXJlU2V0dGluZ3MoKSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNoYW5nZXNbJ3NvdXJjZSddKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSB0aGlzLnByZXBhcmVTb3VyY2UoKTtcclxuICAgICAgICB0aGlzLmdyaWQuc2V0U291cmNlKHRoaXMuc291cmNlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbml0R3JpZCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy50YWJsZUlkID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2F0dHIuaWQnKTtcclxuICAgIHRoaXMudGFibGVDbGFzcyA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhdHRyLmNsYXNzJyk7XHJcbiAgICB0aGlzLmlzSGlkZUhlYWRlciA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdoaWRlSGVhZGVyJyk7XHJcbiAgICB0aGlzLmlzSGlkZVN1YkhlYWRlciA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdoaWRlU3ViSGVhZGVyJyk7XHJcbiAgICB0aGlzLmlzUGFnZXJEaXNwbGF5ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ3BhZ2VyLmRpc3BsYXknKTtcclxuICAgIHRoaXMuaXNQYWdlckRpc3BsYXkgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygncGFnZXIuZGlzcGxheScpO1xyXG4gICAgdGhpcy5wZXJQYWdlU2VsZWN0ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ3BhZ2VyLnBlclBhZ2VTZWxlY3QnKTtcclxuICAgIHRoaXMucm93Q2xhc3NGdW5jdGlvbiA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdyb3dDbGFzc0Z1bmN0aW9uJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RSb3coaW5kZXg6IG51bWJlciwgc3dpdGNoUGFnZVRvU2VsZWN0ZWRSb3dQYWdlOiBib29sZWFuID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ3N3aXRjaFBhZ2VUb1NlbGVjdGVkUm93UGFnZScpKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZ3JpZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmdyaWQuc2V0dGluZ3Muc2VsZWN0ZWRSb3dJbmRleCA9IGluZGV4O1xyXG4gICAgaWYgKHRoaXMuaXNJbmRleE91dE9mUmFuZ2UoaW5kZXgpKSB7XHJcbiAgICAgIC8vIHdlIG5lZWQgdG8gZGVzZWxlY3QgYWxsIHJvd3MgaWYgd2UgZ290IGFuIGluY29ycmVjdCBpbmRleFxyXG4gICAgICB0aGlzLmRlc2VsZWN0QWxsUm93cygpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN3aXRjaFBhZ2VUb1NlbGVjdGVkUm93UGFnZSkge1xyXG4gICAgICBjb25zdCBzb3VyY2U6IERhdGFTb3VyY2UgPSB0aGlzLnNvdXJjZTtcclxuICAgICAgY29uc3QgcGFnaW5nOiB7IHBhZ2U6IG51bWJlciwgcGVyUGFnZTogbnVtYmVyIH0gPSBzb3VyY2UuZ2V0UGFnaW5nKCk7XHJcbiAgICAgIGNvbnN0IHBhZ2U6IG51bWJlciA9IGdldFBhZ2VGb3JSb3dJbmRleChpbmRleCwgcGFnaW5nLnBlclBhZ2UpO1xyXG4gICAgICBpbmRleCA9IGluZGV4ICUgcGFnaW5nLnBlclBhZ2U7XHJcbiAgICAgIHRoaXMuZ3JpZC5zZXR0aW5ncy5zZWxlY3RlZFJvd0luZGV4ID0gaW5kZXg7XHJcblxyXG4gICAgICBpZiAocGFnZSAhPT0gcGFnaW5nLnBhZ2UpIHtcclxuICAgICAgICBzb3VyY2Uuc2V0UGFnZShwYWdlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgcm93OiBSb3cgPSB0aGlzLmdyaWQuZ2V0Um93cygpW2luZGV4XTtcclxuICAgIGlmIChyb3cpIHtcclxuICAgICAgdGhpcy5vblNlbGVjdFJvdyhyb3cpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gd2UgbmVlZCB0byBkZXNlbGVjdCBhbGwgcm93cyBpZiB3ZSBnb3QgYW4gaW5jb3JyZWN0IGluZGV4XHJcbiAgICAgIHRoaXMuZGVzZWxlY3RBbGxSb3dzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlc2VsZWN0QWxsUm93cygpOiB2b2lkIHtcclxuICAgIHRoaXMuZ3JpZC5kYXRhU2V0LmRlc2VsZWN0QWxsKCk7XHJcbiAgICB0aGlzLmVtaXREZXNlbGVjdFJvdyhudWxsKTtcclxuICB9XHJcblxyXG4gIGVkaXRSb3dTZWxlY3Qocm93OiBSb3cpIHtcclxuICAgIGlmICh0aGlzLmdyaWQuZ2V0U2V0dGluZygnc2VsZWN0TW9kZScpID09PSAnbXVsdGknKSB7XHJcbiAgICAgIHRoaXMub25NdWx0aXBsZVNlbGVjdFJvdyhyb3cpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vblNlbGVjdFJvdyhyb3cpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Vc2VyU2VsZWN0Um93KHJvdzogUm93KSB7XHJcbiAgICBpZiAodGhpcy5ncmlkLmdldFNldHRpbmcoJ3NlbGVjdE1vZGUnKSAhPT0gJ211bHRpJykge1xyXG4gICAgICB0aGlzLmdyaWQuc2VsZWN0Um93KHJvdyk7XHJcbiAgICAgIHRoaXMuZW1pdFVzZXJTZWxlY3RSb3cocm93KTtcclxuICAgICAgdGhpcy5lbWl0U2VsZWN0Um93KHJvdyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblJvd0hvdmVyKHJvdzogUm93KSB7XHJcbiAgICB0aGlzLnJvd0hvdmVyLmVtaXQocm93KTtcclxuICB9XHJcblxyXG4gIG11bHRpcGxlU2VsZWN0Um93KHJvdzogUm93KSB7XHJcbiAgICB0aGlzLmdyaWQubXVsdGlwbGVTZWxlY3RSb3cocm93KTtcclxuICAgIHRoaXMuZW1pdFVzZXJTZWxlY3RSb3cocm93KTtcclxuICAgIHRoaXMuZW1pdFNlbGVjdFJvdyhyb3cpO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RBbGxSb3dzKCRldmVudDogYW55KSB7XHJcbiAgICB0aGlzLmlzQWxsU2VsZWN0ZWQgPSAhdGhpcy5pc0FsbFNlbGVjdGVkO1xyXG4gICAgdGhpcy5ncmlkLnNlbGVjdEFsbFJvd3ModGhpcy5pc0FsbFNlbGVjdGVkKTtcclxuXHJcbiAgICB0aGlzLmVtaXRVc2VyU2VsZWN0Um93KG51bGwpO1xyXG4gICAgdGhpcy5lbWl0U2VsZWN0Um93KG51bGwpO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RSb3cocm93OiBSb3cpIHtcclxuICAgIHRoaXMuZ3JpZC5zZWxlY3RSb3cocm93KTtcclxuICAgIHRoaXMuZW1pdFNlbGVjdFJvdyhyb3cpO1xyXG4gIH1cclxuXHJcbiAgb25NdWx0aXBsZVNlbGVjdFJvdyhyb3c6IFJvdykge1xyXG4gICAgdGhpcy5lbWl0U2VsZWN0Um93KHJvdyk7XHJcbiAgfVxyXG5cclxuICBpbml0R3JpZCgpIHtcclxuICAgIHRoaXMuc291cmNlID0gdGhpcy5wcmVwYXJlU291cmNlKCk7XHJcbiAgICB0aGlzLmdyaWQgPSBuZXcgR3JpZCh0aGlzLnNvdXJjZSwgdGhpcy5wcmVwYXJlU2V0dGluZ3MoKSk7XHJcblxyXG4gICAgdGhpcy5zdWJzY3JpYmVUb09uU2VsZWN0Um93KCk7XHJcbiAgICB0aGlzLnN1YnNjcmliZVRvT25EZXNlbGVjdFJvdygpO1xyXG4gIH1cclxuXHJcbiAgcHJlcGFyZVNvdXJjZSgpOiBEYXRhU291cmNlIHtcclxuICAgIGlmICh0aGlzLnNvdXJjZSBpbnN0YW5jZW9mIERhdGFTb3VyY2UpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc291cmNlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgIHJldHVybiBuZXcgTG9jYWxEYXRhU291cmNlKHRoaXMuc291cmNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IExvY2FsRGF0YVNvdXJjZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJlcGFyZVNldHRpbmdzKCk6IE9iamVjdCB7XHJcbiAgICByZXR1cm4gZGVlcEV4dGVuZCh7fSwgdGhpcy5kZWZhdWx0U2V0dGluZ3MsIHRoaXMuc2V0dGluZ3MpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlUGFnZSgkZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5yZXNldEFsbFNlbGVjdG9yKCk7XHJcbiAgfVxyXG5cclxuICBzb3J0KCRldmVudDogYW55KSB7XHJcbiAgICB0aGlzLnJlc2V0QWxsU2VsZWN0b3IoKTtcclxuICB9XHJcblxyXG4gIGZpbHRlcigkZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5yZXNldEFsbFNlbGVjdG9yKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0QWxsU2VsZWN0b3IoKSB7XHJcbiAgICB0aGlzLmlzQWxsU2VsZWN0ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW1pdFVzZXJTZWxlY3RSb3cocm93OiBSb3cpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkUm93cyA9IHRoaXMuZ3JpZC5nZXRTZWxlY3RlZFJvd3MoKTtcclxuXHJcbiAgICB0aGlzLnVzZXJSb3dTZWxlY3QuZW1pdCh7XHJcbiAgICAgIGRhdGE6IHJvdyA/IHJvdy5nZXREYXRhKCkgOiBudWxsLFxyXG4gICAgICBpc1NlbGVjdGVkOiByb3cgPyByb3cuZ2V0SXNTZWxlY3RlZCgpIDogbnVsbCxcclxuICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkUm93cyAmJiBzZWxlY3RlZFJvd3MubGVuZ3RoID8gc2VsZWN0ZWRSb3dzLm1hcCgocjogUm93KSA9PiByLmdldERhdGEoKSkgOiBbXSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbWl0U2VsZWN0Um93KHJvdzogUm93KSB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhOiByb3cgPyByb3cuZ2V0RGF0YSgpIDogbnVsbCxcclxuICAgICAgaXNTZWxlY3RlZDogcm93ID8gcm93LmdldElzU2VsZWN0ZWQoKSA6IG51bGwsXHJcbiAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yb3dTZWxlY3QuZW1pdChkYXRhKTtcclxuICAgIGlmICghcm93Py5pc1NlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMucm93RGVzZWxlY3QuZW1pdChkYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW1pdERlc2VsZWN0Um93KHJvdzogUm93KTogdm9pZCB7XHJcbiAgICB0aGlzLnJvd0Rlc2VsZWN0LmVtaXQoe1xyXG4gICAgICBkYXRhOiByb3cgPyByb3cuZ2V0RGF0YSgpIDogbnVsbCxcclxuICAgICAgaXNTZWxlY3RlZDogcm93ID8gcm93LmdldElzU2VsZWN0ZWQoKSA6IG51bGwsXHJcbiAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNJbmRleE91dE9mUmFuZ2UoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgZGF0YUFtb3VudDogbnVtYmVyID0gdGhpcy5zb3VyY2U/LmNvdW50KCk7XHJcbiAgICByZXR1cm4gaW5kZXggPCAwIHx8ICh0eXBlb2YgZGF0YUFtb3VudCA9PT0gJ251bWJlcicgJiYgaW5kZXggPj0gZGF0YUFtb3VudCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN1YnNjcmliZVRvT25TZWxlY3RSb3coKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vblNlbGVjdFJvd1N1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLm9uU2VsZWN0Um93U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uU2VsZWN0Um93U3Vic2NyaXB0aW9uID0gdGhpcy5ncmlkLm9uU2VsZWN0Um93KClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJvdykgPT4ge1xyXG4gICAgICAgIHRoaXMuZW1pdFNlbGVjdFJvdyhyb3cpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaWJlVG9PbkRlc2VsZWN0Um93KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub25EZXNlbGVjdFJvd1N1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLm9uRGVzZWxlY3RSb3dTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIHRoaXMub25EZXNlbGVjdFJvd1N1YnNjcmlwdGlvbiA9IHRoaXMuZ3JpZC5vbkRlc2VsZWN0Um93KClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJvdykgPT4ge1xyXG4gICAgICAgIHRoaXMuZW1pdERlc2VsZWN0Um93KHJvdyk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPHRhYmxlIFtpZF09XCJ0YWJsZUlkXCIgW25nQ2xhc3NdPVwidGFibGVDbGFzc1wiPlxyXG5cclxuICA8dGhlYWQgbmcyLXN0LXRoZWFkICpuZ0lmPVwiIWlzSGlkZUhlYWRlciB8fCAhaXNIaWRlU3ViSGVhZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtncmlkXT1cImdyaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2lzQWxsU2VsZWN0ZWRdPVwiaXNBbGxTZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbY3JlYXRlQ29uZmlybV09XCJjcmVhdGVDb25maXJtXCJcclxuICAgICAgICAgICAgICAgICAgICAgIChjcmVhdGUpPVwiY3JlYXRlLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAoc2VsZWN0QWxsUm93cyk9XCJvblNlbGVjdEFsbFJvd3MoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAoc29ydCk9XCJzb3J0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKGZpbHRlcik9XCJmaWx0ZXIoJGV2ZW50KVwiPlxyXG4gIDwvdGhlYWQ+XHJcblxyXG4gIDx0Ym9keSBuZzItc3QtdGJvZHkgW2dyaWRdPVwiZ3JpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbZGVsZXRlQ29uZmlybV09XCJkZWxldGVDb25maXJtXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtlZGl0Q29uZmlybV09XCJlZGl0Q29uZmlybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbcm93Q2xhc3NGdW5jdGlvbl09XCJyb3dDbGFzc0Z1bmN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIChlZGl0KT1cImVkaXQuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIChkZWxldGUpPVwiZGVsZXRlLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAoY3VzdG9tKT1cImN1c3RvbS5lbWl0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKHVzZXJTZWxlY3RSb3cpPVwib25Vc2VyU2VsZWN0Um93KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKGVkaXRSb3dTZWxlY3QpPVwiZWRpdFJvd1NlbGVjdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIChtdWx0aXBsZVNlbGVjdFJvdyk9XCJtdWx0aXBsZVNlbGVjdFJvdygkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIChyb3dIb3Zlcik9XCJvblJvd0hvdmVyKCRldmVudClcIj5cclxuICA8L3Rib2R5PlxyXG5cclxuPC90YWJsZT5cclxuXHJcbjxuZzItc21hcnQtdGFibGUtcGFnZXIgKm5nSWY9XCJpc1BhZ2VyRGlzcGxheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3BlclBhZ2VTZWxlY3RdPVwicGVyUGFnZVNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2VQYWdlKT1cImNoYW5nZVBhZ2UoJGV2ZW50KVwiPlxyXG48L25nMi1zbWFydC10YWJsZS1wYWdlcj5cclxuIl19