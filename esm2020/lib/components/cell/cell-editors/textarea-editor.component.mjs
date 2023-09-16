import { Component } from '@angular/core';
import { DefaultEditor } from './default-editor';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
export class TextareaEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
}
TextareaEditorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: TextareaEditorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TextareaEditorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: TextareaEditorComponent, selector: "textarea-editor", usesInheritance: true, ngImport: i0, template: `
    <textarea [ngClass]="inputClass"
              class="form-control"
              [(ngModel)]="cell.newValue"
              [name]="cell.getId()"
              [disabled]="!cell.isEditable()"
              [placeholder]="cell.getTitle()"
              (click)="onClick.emit($event)"
              (keydown.enter)="onEdited.emit($event)"
              (keydown.esc)="onStopEditing.emit()">
    </textarea>
    `, isInline: true, styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}\n"], directives: [{ type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: TextareaEditorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'textarea-editor', template: `
    <textarea [ngClass]="inputClass"
              class="form-control"
              [(ngModel)]="cell.newValue"
              [name]="cell.getId()"
              [disabled]="!cell.isEditable()"
              [placeholder]="cell.getTitle()"
              (click)="onClick.emit($event)"
              (keydown.enter)="onEdited.emit($event)"
              (keydown.esc)="onStopEditing.emit()">
    </textarea>
    `, styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}\n"] }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvY2VsbC9jZWxsLWVkaXRvcnMvdGV4dGFyZWEtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQWtCakQsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGFBQWE7SUFFeEQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7O29IQUpVLHVCQUF1Qjt3R0FBdkIsdUJBQXVCLDhFQWJ4Qjs7Ozs7Ozs7Ozs7S0FXUDsyRkFFUSx1QkFBdUI7a0JBaEJuQyxTQUFTOytCQUNFLGlCQUFpQixZQUVqQjs7Ozs7Ozs7Ozs7S0FXUCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGVmYXVsdEVkaXRvciB9IGZyb20gJy4vZGVmYXVsdC1lZGl0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0ZXh0YXJlYS1lZGl0b3InLFxyXG4gIHN0eWxlVXJsczogWycuL2VkaXRvci5jb21wb25lbnQuc2NzcyddLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8dGV4dGFyZWEgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiY2VsbC5uZXdWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgW25hbWVdPVwiY2VsbC5nZXRJZCgpXCJcclxuICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWNlbGwuaXNFZGl0YWJsZSgpXCJcclxuICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY2VsbC5nZXRUaXRsZSgpXCJcclxuICAgICAgICAgICAgICAoY2xpY2spPVwib25DbGljay5lbWl0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgIChrZXlkb3duLmVudGVyKT1cIm9uRWRpdGVkLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgKGtleWRvd24uZXNjKT1cIm9uU3RvcEVkaXRpbmcuZW1pdCgpXCI+XHJcbiAgICA8L3RleHRhcmVhPlxyXG4gICAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRleHRhcmVhRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgRGVmYXVsdEVkaXRvciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcbn1cclxuIl19