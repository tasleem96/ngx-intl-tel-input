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
    static ɵfac = function NgxIntlTelInputModule_Factory(t) { return new (t || NgxIntlTelInputModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgxIntlTelInputModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            dropdownModuleForRoot] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxIntlTelInputModule, [{
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
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxIntlTelInputModule, { declarations: [NgxIntlTelInputComponent, NativeElementInjectorDirective], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule, i1.BsDropdownModule], exports: [NgxIntlTelInputComponent, NativeElementInjectorDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWludGwtdGVsLWlucHV0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1pbnRsLXRlbC1pbnB1dC9zcmMvbGliL25neC1pbnRsLXRlbC1pbnB1dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7O0FBRTFFLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUEwQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQVl2RyxNQUFNLE9BQU8scUJBQXFCOytFQUFyQixxQkFBcUI7NERBQXJCLHFCQUFxQjtnRUFQaEMsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIscUJBQXFCOzt1RkFJVixxQkFBcUI7Y0FWakMsUUFBUTtlQUFDO2dCQUNULFlBQVksRUFBRSxDQUFDLHdCQUF3QixFQUFFLDhCQUE4QixDQUFDO2dCQUN4RSxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIscUJBQXFCO2lCQUNwQjtnQkFDRixPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSw4QkFBOEIsQ0FBQzthQUNuRTs7d0ZBQ1kscUJBQXFCLG1CQVRsQix3QkFBd0IsRUFBRSw4QkFBOEIsYUFFdEUsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUIsa0NBR1Ysd0JBQXdCLEVBQUUsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnNEcm9wZG93bk1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvZHJvcGRvd24nO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBOYXRpdmVFbGVtZW50SW5qZWN0b3JEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmF0aXZlLWVsZW1lbnQtaW5qZWN0b3IuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5neEludGxUZWxJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vbmd4LWludGwtdGVsLWlucHV0LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBkcm9wZG93bk1vZHVsZUZvclJvb3Q6IE1vZHVsZVdpdGhQcm92aWRlcnM8QnNEcm9wZG93bk1vZHVsZT4gPSBCc0Ryb3Bkb3duTW9kdWxlLmZvclJvb3QoKTtcblxuQE5nTW9kdWxlKHtcblx0ZGVjbGFyYXRpb25zOiBbTmd4SW50bFRlbElucHV0Q29tcG9uZW50LCBOYXRpdmVFbGVtZW50SW5qZWN0b3JEaXJlY3RpdmVdLFxuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZvcm1zTW9kdWxlLFxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cdFx0ZHJvcGRvd25Nb2R1bGVGb3JSb290LFxuICBdLFxuXHRleHBvcnRzOiBbTmd4SW50bFRlbElucHV0Q29tcG9uZW50LCBOYXRpdmVFbGVtZW50SW5qZWN0b3JEaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hJbnRsVGVsSW5wdXRNb2R1bGUge1xuXG59XG4iXX0=