import { Output, EventEmitter, Input, Component } from '@angular/core';
import { Column } from '../../lib/data-set/column';
import { DataSource } from '../../lib/data-source/data-source';
import * as i0 from "@angular/core";
export class FilterDefault {
    constructor() {
        this.inputClass = '';
        this.filter = new EventEmitter();
        this.query = '';
    }
    onFilter(query) {
        this.source.addFilter({
            field: this.column.id,
            search: query,
            filter: this.column.getFilterFunction(),
        });
    }
}
FilterDefault.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: FilterDefault, deps: [], target: i0.ɵɵFactoryTarget.Component });
FilterDefault.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: FilterDefault, selector: "ng-component", inputs: { column: "column", source: "source", inputClass: "inputClass" }, outputs: { filter: "filter" }, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: FilterDefault, decorators: [{
            type: Component,
            args: [{
                    template: '',
                }]
        }], propDecorators: { column: [{
                type: Input
            }], source: [{
                type: Input
            }], inputClass: [{
                type: Input
            }], filter: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXItZGVmYXVsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBSy9ELE1BQU0sT0FBTyxhQUFhO0lBSDFCO1FBT1csZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUV2QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUUzQyxVQUFLLEdBQVcsRUFBRSxDQUFDO0tBU3BCO0lBUEMsUUFBUSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDcEIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNyQixNQUFNLEVBQUUsS0FBSztZQUNiLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFO1NBQ3hDLENBQUMsQ0FBQztJQUNMLENBQUM7OzBHQWhCVSxhQUFhOzhGQUFiLGFBQWEsNkpBRmQsRUFBRTsyRkFFRCxhQUFhO2tCQUh6QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxFQUFFO2lCQUNiOzhCQUdVLE1BQU07c0JBQWQsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFFSSxNQUFNO3NCQUFmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnLi4vLi4vbGliL2RhdGEtc2V0L2NvbHVtbic7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsdGVyRGVmYXVsdCB7XHJcblxyXG4gIEBJbnB1dCgpIGNvbHVtbjogQ29sdW1uO1xyXG4gIEBJbnB1dCgpIHNvdXJjZTogRGF0YVNvdXJjZTtcclxuICBASW5wdXQoKSBpbnB1dENsYXNzOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgQE91dHB1dCgpIGZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBxdWVyeTogc3RyaW5nID0gJyc7XHJcblxyXG4gIG9uRmlsdGVyKHF1ZXJ5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc291cmNlLmFkZEZpbHRlcih7XHJcbiAgICAgIGZpZWxkOiB0aGlzLmNvbHVtbi5pZCxcclxuICAgICAgc2VhcmNoOiBxdWVyeSxcclxuICAgICAgZmlsdGVyOiB0aGlzLmNvbHVtbi5nZXRGaWx0ZXJGdW5jdGlvbigpLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==