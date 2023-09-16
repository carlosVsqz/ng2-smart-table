import { Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { FilterDefault } from './filter-default';
import * as i0 from "@angular/core";
export class CustomFilterComponent extends FilterDefault {
    constructor(resolver) {
        super();
        this.resolver = resolver;
    }
    ngOnChanges(changes) {
        if (this.column && !this.customComponent) {
            const componentFactory = this.resolver.resolveComponentFactory(this.column.filter.component);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
            // set @Inputs and @Outputs of custom component
            this.customComponent.instance.query = this.query;
            this.customComponent.instance.column = this.column;
            this.customComponent.instance.source = this.source;
            this.customComponent.instance.inputClass = this.inputClass;
            this.customComponent.instance.filter.subscribe((event) => this.onFilter(event));
        }
        if (this.customComponent) {
            this.customComponent.instance.ngOnChanges(changes);
        }
    }
    ngOnDestroy() {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    }
}
CustomFilterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: CustomFilterComponent, deps: [{ token: i0.ComponentFactoryResolver }], target: i0.ɵɵFactoryTarget.Component });
CustomFilterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: CustomFilterComponent, selector: "custom-table-filter", inputs: { query: "query" }, viewQueries: [{ propertyName: "dynamicTarget", first: true, predicate: ["dynamicTarget"], descendants: true, read: ViewContainerRef, static: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `<ng-template #dynamicTarget></ng-template>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: CustomFilterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'custom-table-filter',
                    template: `<ng-template #dynamicTarget></ng-template>`,
                }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }]; }, propDecorators: { query: [{
                type: Input
            }], dynamicTarget: [{
                type: ViewChild,
                args: ['dynamicTarget', { read: ViewContainerRef, static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL2ZpbHRlci9jdXN0b20tZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULHdCQUF3QixFQUFFLEtBQUssRUFJL0IsU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBTWpELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxhQUFhO0lBS3RELFlBQW9CLFFBQWtDO1FBQ3BELEtBQUssRUFBRSxDQUFDO1FBRFUsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7SUFFdEQsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM3RixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFNUUsK0NBQStDO1lBQy9DLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2pELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ25ELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ25ELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQzNELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN0RjtRQUNELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7a0hBOUJVLHFCQUFxQjtzR0FBckIscUJBQXFCLGtMQUdJLGdCQUFnQix1RkFMMUMsNENBQTRDOzJGQUUzQyxxQkFBcUI7a0JBSmpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLDRDQUE0QztpQkFDdkQ7K0dBRVUsS0FBSztzQkFBYixLQUFLO2dCQUVnRSxhQUFhO3NCQUFsRixTQUFTO3VCQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEZpbHRlckRlZmF1bHQgfSBmcm9tICcuL2ZpbHRlci1kZWZhdWx0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY3VzdG9tLXRhYmxlLWZpbHRlcicsXHJcbiAgdGVtcGxhdGU6IGA8bmctdGVtcGxhdGUgI2R5bmFtaWNUYXJnZXQ+PC9uZy10ZW1wbGF0ZT5gLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tRmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgRmlsdGVyRGVmYXVsdCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBxdWVyeTogc3RyaW5nO1xyXG4gIGN1c3RvbUNvbXBvbmVudDogYW55O1xyXG4gIEBWaWV3Q2hpbGQoJ2R5bmFtaWNUYXJnZXQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KSBkeW5hbWljVGFyZ2V0OiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICh0aGlzLmNvbHVtbiAmJiAhdGhpcy5jdXN0b21Db21wb25lbnQpIHtcclxuICAgICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5jb2x1bW4uZmlsdGVyLmNvbXBvbmVudCk7XHJcbiAgICAgIHRoaXMuY3VzdG9tQ29tcG9uZW50ID0gdGhpcy5keW5hbWljVGFyZ2V0LmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcclxuXHJcbiAgICAgIC8vIHNldCBASW5wdXRzIGFuZCBAT3V0cHV0cyBvZiBjdXN0b20gY29tcG9uZW50XHJcbiAgICAgIHRoaXMuY3VzdG9tQ29tcG9uZW50Lmluc3RhbmNlLnF1ZXJ5ID0gdGhpcy5xdWVyeTtcclxuICAgICAgdGhpcy5jdXN0b21Db21wb25lbnQuaW5zdGFuY2UuY29sdW1uID0gdGhpcy5jb2x1bW47XHJcbiAgICAgIHRoaXMuY3VzdG9tQ29tcG9uZW50Lmluc3RhbmNlLnNvdXJjZSA9IHRoaXMuc291cmNlO1xyXG4gICAgICB0aGlzLmN1c3RvbUNvbXBvbmVudC5pbnN0YW5jZS5pbnB1dENsYXNzID0gdGhpcy5pbnB1dENsYXNzO1xyXG4gICAgICB0aGlzLmN1c3RvbUNvbXBvbmVudC5pbnN0YW5jZS5maWx0ZXIuc3Vic2NyaWJlKChldmVudDogYW55KSA9PiB0aGlzLm9uRmlsdGVyKGV2ZW50KSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jdXN0b21Db21wb25lbnQpIHtcclxuICAgICAgdGhpcy5jdXN0b21Db21wb25lbnQuaW5zdGFuY2UubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmN1c3RvbUNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLmN1c3RvbUNvbXBvbmVudC5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==