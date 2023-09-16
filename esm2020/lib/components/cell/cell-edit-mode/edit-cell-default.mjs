import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
import * as i0 from "@angular/core";
export class EditCellDefault {
    constructor() {
        this.inputClass = '';
        this.edited = new EventEmitter();
    }
    onEdited(event) {
        this.edited.next(event);
        return false;
    }
    onStopEditing() {
        this.cell.getRow().isInEditing = false;
        return false;
    }
    onClick(event) {
        event.stopPropagation();
    }
}
EditCellDefault.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: EditCellDefault, deps: [], target: i0.ɵɵFactoryTarget.Component });
EditCellDefault.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: EditCellDefault, selector: "ng-component", inputs: { cell: "cell", inputClass: "inputClass" }, outputs: { edited: "edited" }, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: EditCellDefault, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }], propDecorators: { cell: [{
                type: Input
            }], inputClass: [{
                type: Input
            }], edited: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jZWxsLWRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0LW1vZGUvZWRpdC1jZWxsLWRlZmF1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0FBS2xELE1BQU0sT0FBTyxlQUFlO0lBSDVCO1FBTVcsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUV2QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQWU1QztJQWJDLFFBQVEsQ0FBQyxLQUFVO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDdkMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQVU7UUFDaEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7OzRHQW5CVSxlQUFlO2dHQUFmLGVBQWUsdUlBRmhCLEVBQUU7MkZBRUQsZUFBZTtrQkFIM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsRUFBRTtpQkFDYjs4QkFHVSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFFSSxNQUFNO3NCQUFmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9jZWxsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdENlbGxEZWZhdWx0IHtcclxuXHJcbiAgQElucHV0KCkgY2VsbDogQ2VsbDtcclxuICBASW5wdXQoKSBpbnB1dENsYXNzOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgQE91dHB1dCgpIGVkaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBvbkVkaXRlZChldmVudDogYW55KTogYm9vbGVhbiB7XHJcbiAgICB0aGlzLmVkaXRlZC5uZXh0KGV2ZW50KTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIG9uU3RvcEVkaXRpbmcoKTogYm9vbGVhbiB7XHJcbiAgICB0aGlzLmNlbGwuZ2V0Um93KCkuaXNJbkVkaXRpbmcgPSBmYWxzZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2soZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==