import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataSource } from '../../../../lib/data-source/data-source';
import { Column } from '../../../../lib/data-set/column';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TitleComponent {
    constructor() {
        this.currentDirection = '';
        this.sort = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                const sortConf = this.source.getSort();
                if (sortConf.length > 0 && sortConf[0]['field'] === this.column.id) {
                    this.currentDirection = sortConf[0]['direction'];
                }
                else {
                    this.currentDirection = '';
                }
                sortConf.forEach((fieldConf) => {
                });
            });
        }
    }
    _sort(event) {
        event.preventDefault();
        this.changeSortDirection();
        this.source.setSort([
            {
                field: this.column.id,
                direction: this.currentDirection,
                compare: this.column.getCompareFunction(),
            },
        ]);
        this.sort.emit(null);
    }
    changeSortDirection() {
        if (this.currentDirection) {
            const newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
            this.currentDirection = newDirection;
        }
        else {
            this.currentDirection = this.column.sortDirection;
        }
        return this.currentDirection;
    }
}
TitleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: TitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TitleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: TitleComponent, selector: "ng2-smart-table-title", inputs: { column: "column", source: "source" }, outputs: { sort: "sort" }, usesOnChanges: true, ngImport: i0, template: `
    <a href="#" *ngIf="column.isSortable"
                (click)="_sort($event)"
                class="ng2-smart-sort-link sort"
                [ngClass]="currentDirection">
      {{ column.title }}
    </a>
    <span class="ng2-smart-sort" *ngIf="!column.isSortable">{{ column.title }}</span>
  `, isInline: true, styles: ["a.sort.asc,a.sort.desc{font-weight:700}a.sort.asc:after,a.sort.desc:after{content:\"\";display:inline-block;width:0;height:0;border-bottom:4px solid rgba(0,0,0,.3);border-top:4px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;margin-bottom:2px}a.sort.desc:after{transform:rotate(-180deg);margin-bottom:-2px}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: TitleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ng2-smart-table-title', template: `
    <a href="#" *ngIf="column.isSortable"
                (click)="_sort($event)"
                class="ng2-smart-sort-link sort"
                [ngClass]="currentDirection">
      {{ column.title }}
    </a>
    <span class="ng2-smart-sort" *ngIf="!column.isSortable">{{ column.title }}</span>
  `, styles: ["a.sort.asc,a.sort.desc{font-weight:700}a.sort.asc:after,a.sort.desc:after{content:\"\";display:inline-block;width:0;height:0;border-bottom:4px solid rgba(0,0,0,.3);border-top:4px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;margin-bottom:2px}a.sort.desc:after{transform:rotate(-180deg);margin-bottom:-2px}\n"] }]
        }], propDecorators: { column: [{
                type: Input
            }], source: [{
                type: Input
            }], sort: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy90aGVhZC9jZWxscy90aXRsZS90aXRsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFHakcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7O0FBZXpELE1BQU0sT0FBTyxjQUFjO0lBYjNCO1FBZUUscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBR1osU0FBSSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7S0ErQzFDO0lBM0NDLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO2dCQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ25DO1lBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUN0RSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUV2QyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtvQkFDbEUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDbEQ7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztpQkFDNUI7Z0JBRUQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQWMsRUFBRSxFQUFFO2dCQUVwQyxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQVU7UUFDZCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDbEI7Z0JBQ0UsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2hDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFO2FBQzFDO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELG1CQUFtQjtRQUNqQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUN0RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDO1NBQ3RDO2FBQU07WUFDTCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7U0FDbkQ7UUFDRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDOzsyR0FuRFUsY0FBYzsrRkFBZCxjQUFjLDZKQVZmOzs7Ozs7OztHQVFUOzJGQUVVLGNBQWM7a0JBYjFCLFNBQVM7K0JBQ0UsdUJBQXVCLFlBRXZCOzs7Ozs7OztHQVFUOzhCQUtRLE1BQU07c0JBQWQsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0ksSUFBSTtzQkFBYixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xyXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvZGF0YS1zZXQvY29sdW1uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmcyLXNtYXJ0LXRhYmxlLXRpdGxlJyxcclxuICBzdHlsZVVybHM6IFsnLi90aXRsZS5jb21wb25lbnQuc2NzcyddLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8YSBocmVmPVwiI1wiICpuZ0lmPVwiY29sdW1uLmlzU29ydGFibGVcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIl9zb3J0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJuZzItc21hcnQtc29ydC1saW5rIHNvcnRcIlxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiY3VycmVudERpcmVjdGlvblwiPlxyXG4gICAgICB7eyBjb2x1bW4udGl0bGUgfX1cclxuICAgIDwvYT5cclxuICAgIDxzcGFuIGNsYXNzPVwibmcyLXNtYXJ0LXNvcnRcIiAqbmdJZj1cIiFjb2x1bW4uaXNTb3J0YWJsZVwiPnt7IGNvbHVtbi50aXRsZSB9fTwvc3Bhbj5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG5cclxuICBjdXJyZW50RGlyZWN0aW9uID0gJyc7XHJcbiAgQElucHV0KCkgY29sdW1uOiBDb2x1bW47XHJcbiAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xyXG4gIEBPdXRwdXQoKSBzb3J0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHByb3RlY3RlZCBkYXRhQ2hhbmdlZFN1YjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5zb3VyY2UpIHtcclxuICAgICAgaWYgKCFjaGFuZ2VzLnNvdXJjZS5maXJzdENoYW5nZSkge1xyXG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZWRTdWIudW5zdWJzY3JpYmUoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRhdGFDaGFuZ2VkU3ViID0gdGhpcy5zb3VyY2Uub25DaGFuZ2VkKCkuc3Vic2NyaWJlKChkYXRhQ2hhbmdlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNvcnRDb25mID0gdGhpcy5zb3VyY2UuZ2V0U29ydCgpO1xyXG5cclxuICAgICAgICBpZiAoc29ydENvbmYubGVuZ3RoID4gMCAmJiBzb3J0Q29uZlswXVsnZmllbGQnXSA9PT0gdGhpcy5jb2x1bW4uaWQpIHtcclxuICAgICAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9IHNvcnRDb25mWzBdWydkaXJlY3Rpb24nXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzb3J0Q29uZi5mb3JFYWNoKChmaWVsZENvbmY6IGFueSkgPT4ge1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc29ydChldmVudDogYW55KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5jaGFuZ2VTb3J0RGlyZWN0aW9uKCk7XHJcbiAgICB0aGlzLnNvdXJjZS5zZXRTb3J0KFtcclxuICAgICAge1xyXG4gICAgICAgIGZpZWxkOiB0aGlzLmNvbHVtbi5pZCxcclxuICAgICAgICBkaXJlY3Rpb246IHRoaXMuY3VycmVudERpcmVjdGlvbixcclxuICAgICAgICBjb21wYXJlOiB0aGlzLmNvbHVtbi5nZXRDb21wYXJlRnVuY3Rpb24oKSxcclxuICAgICAgfSxcclxuICAgIF0pO1xyXG4gICAgdGhpcy5zb3J0LmVtaXQobnVsbCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VTb3J0RGlyZWN0aW9uKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50RGlyZWN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IG5ld0RpcmVjdGlvbiA9IHRoaXMuY3VycmVudERpcmVjdGlvbiA9PT0gJ2FzYycgPyAnZGVzYycgOiAnYXNjJztcclxuICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gbmV3RGlyZWN0aW9uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gdGhpcy5jb2x1bW4uc29ydERpcmVjdGlvbjtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmN1cnJlbnREaXJlY3Rpb247XHJcbiAgfVxyXG59XHJcbiJdfQ==