import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterModule } from '../filter/filter.module';
import { CellModule } from '../cell/cell.module';
import { Ng2SmartTableTheadComponent } from './thead.component';
import { ActionsComponent } from './cells/actions.component';
import { ActionsTitleComponent } from './cells/actions-title.component';
import { AddButtonComponent } from './cells/add-button.component';
import { CheckboxSelectAllComponent } from './cells/checkbox-select-all.component';
import { ColumnTitleComponent } from './cells/column-title.component';
import { TitleComponent } from './cells/title/title.component';
import { TheadFitlersRowComponent } from './rows/thead-filters-row.component';
import { TheadFormRowComponent } from './rows/thead-form-row.component';
import { TheadTitlesRowComponent } from './rows/thead-titles-row.component';
import * as i0 from "@angular/core";
const THEAD_COMPONENTS = [
    ActionsComponent,
    ActionsTitleComponent,
    AddButtonComponent,
    CheckboxSelectAllComponent,
    ColumnTitleComponent,
    TitleComponent,
    TheadFitlersRowComponent,
    TheadFormRowComponent,
    TheadTitlesRowComponent,
    Ng2SmartTableTheadComponent,
];
export class THeadModule {
}
THeadModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: THeadModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
THeadModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: THeadModule, declarations: [ActionsComponent,
        ActionsTitleComponent,
        AddButtonComponent,
        CheckboxSelectAllComponent,
        ColumnTitleComponent,
        TitleComponent,
        TheadFitlersRowComponent,
        TheadFormRowComponent,
        TheadTitlesRowComponent,
        Ng2SmartTableTheadComponent], imports: [CommonModule,
        FormsModule,
        FilterModule,
        CellModule], exports: [ActionsComponent,
        ActionsTitleComponent,
        AddButtonComponent,
        CheckboxSelectAllComponent,
        ColumnTitleComponent,
        TitleComponent,
        TheadFitlersRowComponent,
        TheadFormRowComponent,
        TheadTitlesRowComponent,
        Ng2SmartTableTheadComponent] });
THeadModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: THeadModule, imports: [[
            CommonModule,
            FormsModule,
            FilterModule,
            CellModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: THeadModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        FilterModule,
                        CellModule,
                    ],
                    declarations: [
                        ...THEAD_COMPONENTS,
                    ],
                    exports: [
                        ...THEAD_COMPONENTS,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy90aGVhZC90aGVhZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFakQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQy9ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQUU1RSxNQUFNLGdCQUFnQixHQUFHO0lBQ3ZCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtDQUM1QixDQUFDO0FBZ0JGLE1BQU0sT0FBTyxXQUFXOzt3R0FBWCxXQUFXO3lHQUFYLFdBQVcsaUJBMUJ0QixnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQiwwQkFBMEI7UUFDMUIsb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCx3QkFBd0I7UUFDeEIscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2QiwyQkFBMkIsYUFLekIsWUFBWTtRQUNaLFdBQVc7UUFDWCxZQUFZO1FBQ1osVUFBVSxhQWpCWixnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQiwwQkFBMEI7UUFDMUIsb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCx3QkFBd0I7UUFDeEIscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2QiwyQkFBMkI7eUdBaUJoQixXQUFXLFlBYmI7WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLFlBQVk7WUFDWixVQUFVO1NBQ1g7MkZBUVUsV0FBVztrQkFkdkIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLFlBQVk7d0JBQ1osVUFBVTtxQkFDWDtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osR0FBRyxnQkFBZ0I7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxHQUFHLGdCQUFnQjtxQkFDcEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IEZpbHRlck1vZHVsZSB9IGZyb20gJy4uL2ZpbHRlci9maWx0ZXIubW9kdWxlJztcclxuaW1wb3J0IHsgQ2VsbE1vZHVsZSB9IGZyb20gJy4uL2NlbGwvY2VsbC5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgTmcyU21hcnRUYWJsZVRoZWFkQ29tcG9uZW50IH0gZnJvbSAnLi90aGVhZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY3Rpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy9hY3Rpb25zLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFjdGlvbnNUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMvYWN0aW9ucy10aXRsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBZGRCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NlbGxzL2FkZC1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hlY2tib3hTZWxlY3RBbGxDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzL2NoZWNrYm94LXNlbGVjdC1hbGwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29sdW1uVGl0bGVDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzL2NvbHVtbi10aXRsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMvdGl0bGUvdGl0bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGhlYWRGaXRsZXJzUm93Q29tcG9uZW50IH0gZnJvbSAnLi9yb3dzL3RoZWFkLWZpbHRlcnMtcm93LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRoZWFkRm9ybVJvd0NvbXBvbmVudCB9IGZyb20gJy4vcm93cy90aGVhZC1mb3JtLXJvdy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUaGVhZFRpdGxlc1Jvd0NvbXBvbmVudCB9IGZyb20gJy4vcm93cy90aGVhZC10aXRsZXMtcm93LmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBUSEVBRF9DT01QT05FTlRTID0gW1xyXG4gIEFjdGlvbnNDb21wb25lbnQsXHJcbiAgQWN0aW9uc1RpdGxlQ29tcG9uZW50LFxyXG4gIEFkZEJ1dHRvbkNvbXBvbmVudCxcclxuICBDaGVja2JveFNlbGVjdEFsbENvbXBvbmVudCxcclxuICBDb2x1bW5UaXRsZUNvbXBvbmVudCxcclxuICBUaXRsZUNvbXBvbmVudCxcclxuICBUaGVhZEZpdGxlcnNSb3dDb21wb25lbnQsXHJcbiAgVGhlYWRGb3JtUm93Q29tcG9uZW50LFxyXG4gIFRoZWFkVGl0bGVzUm93Q29tcG9uZW50LFxyXG4gIE5nMlNtYXJ0VGFibGVUaGVhZENvbXBvbmVudCxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBGaWx0ZXJNb2R1bGUsXHJcbiAgICBDZWxsTW9kdWxlLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAuLi5USEVBRF9DT01QT05FTlRTLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgLi4uVEhFQURfQ09NUE9ORU5UUyxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVEhlYWRNb2R1bGUgeyB9XHJcbiJdfQ==