import { Component } from '@angular/core';
import { DefaultEditor } from './default-editor';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class CheckboxEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
    onChange(event) {
        const trueVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().true) || true;
        const falseVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().false) || false;
        this.cell.newValue = event.target.checked ? trueVal : falseVal;
    }
}
CheckboxEditorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: CheckboxEditorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CheckboxEditorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: CheckboxEditorComponent, selector: "checkbox-editor", usesInheritance: true, ngImport: i0, template: `
    <input [ngClass]="inputClass"
           type="checkbox"
           class="form-control"
           [name]="cell.getId()"
           [disabled]="!cell.isEditable()"
           [checked]="cell.getValue() == (cell.getColumn().getConfig()?.true || true)"
           (click)="onClick.emit($event)"
           (change)="onChange($event)">
    `, isInline: true, styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: CheckboxEditorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-editor', template: `
    <input [ngClass]="inputClass"
           type="checkbox"
           class="form-control"
           [name]="cell.getId()"
           [disabled]="!cell.isEditable()"
           [checked]="cell.getValue() == (cell.getColumn().getConfig()?.true || true)"
           (click)="onClick.emit($event)"
           (change)="onChange($event)">
    `, styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}\n"] }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvY2VsbC9jZWxsLWVkaXRvcnMvY2hlY2tib3gtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBZ0JqRCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsYUFBYTtJQUV4RDtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFVO1FBQ2pCLE1BQU0sT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQztRQUN0RyxNQUFNLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUM7UUFDekcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ2pFLENBQUM7O29IQVZVLHVCQUF1Qjt3R0FBdkIsdUJBQXVCLDhFQVh4Qjs7Ozs7Ozs7O0tBU1A7MkZBRVEsdUJBQXVCO2tCQWRuQyxTQUFTOytCQUNFLGlCQUFpQixZQUVqQjs7Ozs7Ozs7O0tBU1AiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IERlZmF1bHRFZGl0b3IgfSBmcm9tICcuL2RlZmF1bHQtZWRpdG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2hlY2tib3gtZWRpdG9yJyxcclxuICBzdHlsZVVybHM6IFsnLi9lZGl0b3IuY29tcG9uZW50LnNjc3MnXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGlucHV0IFtuZ0NsYXNzXT1cImlucHV0Q2xhc3NcIlxyXG4gICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgIFtuYW1lXT1cImNlbGwuZ2V0SWQoKVwiXHJcbiAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFjZWxsLmlzRWRpdGFibGUoKVwiXHJcbiAgICAgICAgICAgW2NoZWNrZWRdPVwiY2VsbC5nZXRWYWx1ZSgpID09IChjZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpPy50cnVlIHx8IHRydWUpXCJcclxuICAgICAgICAgICAoY2xpY2spPVwib25DbGljay5lbWl0KCRldmVudClcIlxyXG4gICAgICAgICAgIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIENoZWNrYm94RWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgRGVmYXVsdEVkaXRvciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IHRydWVWYWwgPSAodGhpcy5jZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpICYmIHRoaXMuY2VsbC5nZXRDb2x1bW4oKS5nZXRDb25maWcoKS50cnVlKSB8fCB0cnVlO1xyXG4gICAgY29uc3QgZmFsc2VWYWwgPSAodGhpcy5jZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpICYmIHRoaXMuY2VsbC5nZXRDb2x1bW4oKS5nZXRDb25maWcoKS5mYWxzZSkgfHwgZmFsc2U7XHJcbiAgICB0aGlzLmNlbGwubmV3VmFsdWUgPSBldmVudC50YXJnZXQuY2hlY2tlZCA/IHRydWVWYWwgOiBmYWxzZVZhbDtcclxuICB9XHJcbn1cclxuIl19