import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Row } from '../../../lib/data-set/row';
import { Grid } from '../../../lib/grid';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TbodyCustomComponent {
    constructor() {
        this.custom = new EventEmitter();
    }
    onCustom(action, event) {
        event.preventDefault();
        event.stopPropagation();
        this.custom.emit({
            action: action.name,
            data: this.row.getData(),
            source: this.source
        });
    }
}
TbodyCustomComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: TbodyCustomComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TbodyCustomComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: TbodyCustomComponent, selector: "ng2-st-tbody-custom", inputs: { grid: "grid", row: "row", source: "source" }, outputs: { custom: "custom" }, ngImport: i0, template: `
      <a *ngFor="let action of grid.getSetting('actions.custom')" href="#"
         class="ng2-smart-action ng2-smart-action-custom-custom" 
         [innerHTML]="action.title"
         (click)="onCustom(action, $event)"></a>
        `, isInline: true, directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: TbodyCustomComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ng2-st-tbody-custom',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
      <a *ngFor="let action of grid.getSetting('actions.custom')" href="#"
         class="ng2-smart-action ng2-smart-action-custom-custom" 
         [innerHTML]="action.title"
         (click)="onCustom(action, $event)"></a>
        `
                }]
        }], propDecorators: { grid: [{
                type: Input
            }], row: [{
                type: Input
            }], source: [{
                type: Input
            }], custom: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvdGJvZHkvY2VsbHMvY3VzdG9tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVoRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7OztBQVl6QyxNQUFNLE9BQU8sb0JBQW9CO0lBVmpDO1FBZWMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7S0FhOUM7SUFYRyxRQUFRLENBQUMsTUFBVyxFQUFFLEtBQVU7UUFDNUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNiLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3RCLENBQUMsQ0FBQztJQUNQLENBQUM7O2lIQWhCUSxvQkFBb0I7cUdBQXBCLG9CQUFvQixrSkFQbkI7Ozs7O1NBS0w7MkZBRUksb0JBQW9CO2tCQVZoQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUU7Ozs7O1NBS0w7aUJBQ1I7OEJBR1ksSUFBSTtzQkFBWixLQUFLO2dCQUNHLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0ksTUFBTTtzQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9yb3cnO1xyXG5cclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9ncmlkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduZzItc3QtdGJvZHktY3VzdG9tJyxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgPGEgKm5nRm9yPVwibGV0IGFjdGlvbiBvZiBncmlkLmdldFNldHRpbmcoJ2FjdGlvbnMuY3VzdG9tJylcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbiBuZzItc21hcnQtYWN0aW9uLWN1c3RvbS1jdXN0b21cIiBcclxuICAgICAgICAgW2lubmVySFRNTF09XCJhY3Rpb24udGl0bGVcIlxyXG4gICAgICAgICAoY2xpY2spPVwib25DdXN0b20oYWN0aW9uLCAkZXZlbnQpXCI+PC9hPlxyXG4gICAgICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRib2R5Q3VzdG9tQ29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSBncmlkOiBHcmlkO1xyXG4gICAgQElucHV0KCkgcm93OiBSb3c7XHJcbiAgICBASW5wdXQoKSBzb3VyY2U6IGFueTtcclxuICAgIEBPdXRwdXQoKSBjdXN0b20gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgICBvbkN1c3RvbShhY3Rpb246IGFueSwgZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VzdG9tLmVtaXQoe1xyXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICBkYXRhOiB0aGlzLnJvdy5nZXREYXRhKCksXHJcbiAgICAgICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19