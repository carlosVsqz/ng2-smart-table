import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
import * as i0 from "@angular/core";
export class DefaultEditor {
    constructor() {
        this.onStopEditing = new EventEmitter();
        this.onEdited = new EventEmitter();
        this.onClick = new EventEmitter();
    }
}
DefaultEditor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: DefaultEditor, deps: [], target: i0.ɵɵFactoryTarget.Component });
DefaultEditor.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: DefaultEditor, selector: "ng-component", inputs: { cell: "cell", inputClass: "inputClass" }, outputs: { onStopEditing: "onStopEditing", onEdited: "onEdited", onClick: "onClick" }, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: DefaultEditor, decorators: [{
            type: Component,
            args: [{
                    template: '',
                }]
        }], propDecorators: { cell: [{
                type: Input
            }], inputClass: [{
                type: Input
            }], onStopEditing: [{
                type: Output
            }], onEdited: [{
                type: Output
            }], onClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lZGl0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0b3JzL2RlZmF1bHQtZWRpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQUtsRCxNQUFNLE9BQU8sYUFBYTtJQUgxQjtRQU9ZLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNuQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQUM3Qzs7MEdBUFksYUFBYTs4RkFBYixhQUFhLCtMQUZkLEVBQUU7MkZBRUQsYUFBYTtrQkFIekIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsRUFBRTtpQkFDYjs4QkFFVSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFFSSxhQUFhO3NCQUF0QixNQUFNO2dCQUNHLFFBQVE7c0JBQWpCLE1BQU07Z0JBQ0csT0FBTztzQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NlbGwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdEVkaXRvciBpbXBsZW1lbnRzIEVkaXRvciB7XHJcbiAgQElucHV0KCkgY2VsbDogQ2VsbDtcclxuICBASW5wdXQoKSBpbnB1dENsYXNzOiBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKSBvblN0b3BFZGl0aW5nID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uRWRpdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFZGl0b3Ige1xyXG4gIGNlbGw6IENlbGw7XHJcbiAgaW5wdXRDbGFzczogc3RyaW5nO1xyXG4gIG9uU3RvcEVkaXRpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4gIG9uRWRpdGVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuICBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PjtcclxufVxyXG4iXX0=