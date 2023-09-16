import { Component, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { distinctUntilChanged, debounceTime, skip } from 'rxjs/operators';
import { DefaultFilter } from './default-filter';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
export class SelectFilterComponent extends DefaultFilter {
    constructor() {
        super();
    }
    ngOnInit() {
        this.inputControl.valueChanges
            .pipe(skip(1), distinctUntilChanged(), debounceTime(this.delay))
            .subscribe((value) => this.setFilter());
    }
}
SelectFilterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: SelectFilterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SelectFilterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: SelectFilterComponent, selector: "select-filter", viewQueries: [{ propertyName: "inputControl", first: true, predicate: ["inputControl"], descendants: true, read: NgControl, static: true }], usesInheritance: true, ngImport: i0, template: `
    <select [ngClass]="inputClass"
            class="form-control"
            #inputControl
            [(ngModel)]="query">

        <option value="">{{ column.getFilterConfig().selectText }}</option>
        <option *ngFor="let option of column.getFilterConfig().list" [value]="option.value">
          {{ option.title }}
        </option>
    </select>
  `, isInline: true, directives: [{ type: i1.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: SelectFilterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'select-filter',
                    template: `
    <select [ngClass]="inputClass"
            class="form-control"
            #inputControl
            [(ngModel)]="query">

        <option value="">{{ column.getFilterConfig().selectText }}</option>
        <option *ngFor="let option of column.getFilterConfig().list" [value]="option.value">
          {{ option.title }}
        </option>
    </select>
  `,
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { inputControl: [{
                type: ViewChild,
                args: ['inputControl', { read: NgControl, static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXItdHlwZXMvc2VsZWN0LWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBaUJqRCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsYUFBYTtJQUl0RDtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVk7YUFDM0IsSUFBSSxDQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxvQkFBb0IsRUFBRSxFQUN0QixZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUN6QjthQUNBLFNBQVMsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7a0hBaEJVLHFCQUFxQjtzR0FBckIscUJBQXFCLDhJQUVHLFNBQVMsa0VBZmxDOzs7Ozs7Ozs7OztHQVdUOzJGQUVVLHFCQUFxQjtrQkFmakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFOzs7Ozs7Ozs7OztHQVdUO2lCQUNGOzBFQUcrRCxZQUFZO3NCQUF6RSxTQUFTO3VCQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZGVib3VuY2VUaW1lLCBza2lwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgRGVmYXVsdEZpbHRlciB9IGZyb20gJy4vZGVmYXVsdC1maWx0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZWxlY3QtZmlsdGVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNlbGVjdCBbbmdDbGFzc109XCJpbnB1dENsYXNzXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAjaW5wdXRDb250cm9sXHJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwicXVlcnlcIj5cclxuXHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPnt7IGNvbHVtbi5nZXRGaWx0ZXJDb25maWcoKS5zZWxlY3RUZXh0IH19PC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbHVtbi5nZXRGaWx0ZXJDb25maWcoKS5saXN0XCIgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiPlxyXG4gICAgICAgICAge3sgb3B0aW9uLnRpdGxlIH19XHJcbiAgICAgICAgPC9vcHRpb24+XHJcbiAgICA8L3NlbGVjdD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0RmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgRGVmYXVsdEZpbHRlciBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0Q29udHJvbCcsIHsgcmVhZDogTmdDb250cm9sLCBzdGF0aWM6IHRydWUgfSkgaW5wdXRDb250cm9sOiBOZ0NvbnRyb2w7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnB1dENvbnRyb2wudmFsdWVDaGFuZ2VzXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHNraXAoMSksXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy5kZWxheSlcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB0aGlzLnNldEZpbHRlcigpKTtcclxuICB9XHJcbn1cclxuIl19