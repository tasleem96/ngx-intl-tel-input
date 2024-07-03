import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NativeElementInjectorDirective } from './directives/native-element-injector.directive';
import { NgxIntlTelInputComponent } from './ngx-intl-tel-input.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/dropdown";
export const dropdownModuleForRoot = BsDropdownModule.forRoot();
export class NgxIntlTelInputModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxIntlTelInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: NgxIntlTelInputModule, declarations: [NgxIntlTelInputComponent, NativeElementInjectorDirective], imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule, i1.BsDropdownModule], exports: [NgxIntlTelInputComponent, NativeElementInjectorDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxIntlTelInputModule, imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            dropdownModuleForRoot] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxIntlTelInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        dropdownModuleForRoot,
                    ],
                    exports: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWludGwtdGVsLWlucHV0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbmd4LWludGwtdGVsLWlucHV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7QUFFMUUsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQTBDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDO0FBWXZHLE1BQU0sT0FBTyxxQkFBcUI7d0dBQXJCLHFCQUFxQjt5R0FBckIscUJBQXFCLGlCQVRsQix3QkFBd0IsRUFBRSw4QkFBOEIsYUFFdEUsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUIsa0NBR1Ysd0JBQXdCLEVBQUUsOEJBQThCO3lHQUV0RCxxQkFBcUIsWUFQaEMsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIscUJBQXFCOzs0RkFJVixxQkFBcUI7a0JBVmpDLFFBQVE7bUJBQUM7b0JBQ1QsWUFBWSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsOEJBQThCLENBQUM7b0JBQ3hFLE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixxQkFBcUI7cUJBQ3BCO29CQUNGLE9BQU8sRUFBRSxDQUFDLHdCQUF3QixFQUFFLDhCQUE4QixDQUFDO2lCQUNuRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJzRHJvcGRvd25Nb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Ryb3Bkb3duJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTmF0aXZlRWxlbWVudEluamVjdG9yRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL25hdGl2ZS1lbGVtZW50LWluamVjdG9yLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ3hJbnRsVGVsSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL25neC1pbnRsLXRlbC1pbnB1dC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25Nb2R1bGVGb3JSb290OiBNb2R1bGVXaXRoUHJvdmlkZXJzPEJzRHJvcGRvd25Nb2R1bGU+ID0gQnNEcm9wZG93bk1vZHVsZS5mb3JSb290KCk7XG5cbkBOZ01vZHVsZSh7XG5cdGRlY2xhcmF0aW9uczogW05neEludGxUZWxJbnB1dENvbXBvbmVudCwgTmF0aXZlRWxlbWVudEluamVjdG9yRGlyZWN0aXZlXSxcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGb3Jtc01vZHVsZSxcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXHRcdGRyb3Bkb3duTW9kdWxlRm9yUm9vdCxcbiAgXSxcblx0ZXhwb3J0czogW05neEludGxUZWxJbnB1dENvbXBvbmVudCwgTmF0aXZlRWxlbWVudEluamVjdG9yRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4SW50bFRlbElucHV0TW9kdWxlIHtcblxufVxuIl19