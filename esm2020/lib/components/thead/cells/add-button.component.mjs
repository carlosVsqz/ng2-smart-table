import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class AddButtonComponent {
    constructor(ref) {
        this.ref = ref;
        this.create = new EventEmitter();
    }
    ngAfterViewInit() {
        this.ref.nativeElement.classList.add('ng2-smart-actions-title', 'ng2-smart-actions-title-add');
    }
    ngOnChanges() {
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.addNewButtonContent = this.grid.getSetting('add.addButtonContent');
    }
    onAdd(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.create.emit({
                source: this.source,
            });
        }
        else {
            this.grid.createFormShown = true;
        }
    }
}
AddButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: AddButtonComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
AddButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: AddButtonComponent, selector: "[ng2-st-add-button]", inputs: { grid: "grid", source: "source" }, outputs: { create: "create" }, usesOnChanges: true, ngImport: i0, template: `
    <a *ngIf="isActionAdd" href="#" class="ng2-smart-action ng2-smart-action-add-add"
        [innerHTML]="addNewButtonContent" (click)="onAdd($event)"></a>
  `, isInline: true, directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: AddButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[ng2-st-add-button]',
                    template: `
    <a *ngIf="isActionAdd" href="#" class="ng2-smart-action ng2-smart-action-add-add"
        [innerHTML]="addNewButtonContent" (click)="onAdd($event)"></a>
  `,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { grid: [{
                type: Input
            }], source: [{
                type: Input
            }], create: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3RoZWFkL2NlbGxzL2FkZC1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWlCLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUU3RyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7QUFTbEUsTUFBTSxPQUFPLGtCQUFrQjtJQVM3QixZQUFvQixHQUFlO1FBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUx6QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQU0zQyxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFVO1FBQ2QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDcEIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUNsQztJQUNILENBQUM7OytHQS9CVSxrQkFBa0I7bUdBQWxCLGtCQUFrQiwySkFMbkI7OztHQUdUOzJGQUVVLGtCQUFrQjtrQkFQOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUU7OztHQUdUO2lCQUNGO2lHQUdVLElBQUk7c0JBQVosS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0ksTUFBTTtzQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9ncmlkJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tuZzItc3QtYWRkLWJ1dHRvbl0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8YSAqbmdJZj1cImlzQWN0aW9uQWRkXCIgaHJlZj1cIiNcIiBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb24gbmcyLXNtYXJ0LWFjdGlvbi1hZGQtYWRkXCJcclxuICAgICAgICBbaW5uZXJIVE1MXT1cImFkZE5ld0J1dHRvbkNvbnRlbnRcIiAoY2xpY2spPVwib25BZGQoJGV2ZW50KVwiPjwvYT5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgZ3JpZDogR3JpZDtcclxuICBASW5wdXQoKSBzb3VyY2U6IERhdGFTb3VyY2U7XHJcbiAgQE91dHB1dCgpIGNyZWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBpc0FjdGlvbkFkZDogYm9vbGVhbjtcclxuICBhZGROZXdCdXR0b25Db250ZW50OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLnJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25nMi1zbWFydC1hY3Rpb25zLXRpdGxlJywgJ25nMi1zbWFydC1hY3Rpb25zLXRpdGxlLWFkZCcpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLmlzQWN0aW9uQWRkID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2FjdGlvbnMuYWRkJyk7XHJcbiAgICB0aGlzLmFkZE5ld0J1dHRvbkNvbnRlbnQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWRkLmFkZEJ1dHRvbkNvbnRlbnQnKTtcclxuICB9XHJcblxyXG4gIG9uQWRkKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICh0aGlzLmdyaWQuZ2V0U2V0dGluZygnbW9kZScpID09PSAnZXh0ZXJuYWwnKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlLmVtaXQoe1xyXG4gICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ncmlkLmNyZWF0ZUZvcm1TaG93biA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==