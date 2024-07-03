import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
/*
"Property 'nativeElement' does not exist on type 'FormControl'".
'NativeElementInjectorDirective' injects nativeElement to each control,
so we can access it from inside validator for example.
More about this approach and reasons for this:
https://github.com/angular/angular/issues/18025
https://stackoverflow.com/a/54075119/1617590
*/
export class NativeElementInjectorDirective {
    controlDir;
    host;
    constructor(controlDir, host) {
        this.controlDir = controlDir;
        this.host = host;
    }
    ngOnInit() {
        if (this.controlDir.control) {
            // @ts-ignore
            this.controlDir.control['nativeElement'] = this.host.nativeElement;
        }
    }
    static ɵfac = function NativeElementInjectorDirective_Factory(t) { return new (t || NativeElementInjectorDirective)(i0.ɵɵdirectiveInject(i1.NgControl), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: NativeElementInjectorDirective, selectors: [["", "ngModel", ""], ["", "formControl", ""], ["", "formControlName", ""]] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NativeElementInjectorDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[ngModel], [formControl], [formControlName]',
            }]
    }], function () { return [{ type: i1.NgControl }, { type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLWVsZW1lbnQtaW5qZWN0b3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWludGwtdGVsLWlucHV0L3NyYy9saWIvZGlyZWN0aXZlcy9uYXRpdmUtZWxlbWVudC1pbmplY3Rvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBc0IsTUFBTSxlQUFlLENBQUM7OztBQUc5RDs7Ozs7OztFQU9FO0FBS0YsTUFBTSxPQUFPLDhCQUE4QjtJQUVqQztJQUNBO0lBRlQsWUFDUyxVQUFxQixFQUNyQixJQUFpQztRQURqQyxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQ3JCLFNBQUksR0FBSixJQUFJLENBQTZCO0lBQ3ZDLENBQUM7SUFDSixRQUFRO1FBQ1AsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtZQUM1QixhQUFhO1lBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDdEU7SUFDRixDQUFDO3dGQVZXLDhCQUE4Qjs2REFBOUIsOEJBQThCOzt1RkFBOUIsOEJBQThCO2NBSjFDLFNBQVM7ZUFBQztnQkFDViwrQ0FBK0M7Z0JBQy9DLFFBQVEsRUFBRSw2Q0FBNkM7YUFDdkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKlxuXCJQcm9wZXJ0eSAnbmF0aXZlRWxlbWVudCcgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAnRm9ybUNvbnRyb2wnXCIuXG4nTmF0aXZlRWxlbWVudEluamVjdG9yRGlyZWN0aXZlJyBpbmplY3RzIG5hdGl2ZUVsZW1lbnQgdG8gZWFjaCBjb250cm9sLFxuc28gd2UgY2FuIGFjY2VzcyBpdCBmcm9tIGluc2lkZSB2YWxpZGF0b3IgZm9yIGV4YW1wbGUuXG5Nb3JlIGFib3V0IHRoaXMgYXBwcm9hY2ggYW5kIHJlYXNvbnMgZm9yIHRoaXM6XG5odHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xODAyNVxuaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU0MDc1MTE5LzE2MTc1OTBcbiovXG5ARGlyZWN0aXZlKHtcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkaXJlY3RpdmUtc2VsZWN0b3Jcblx0c2VsZWN0b3I6ICdbbmdNb2RlbF0sIFtmb3JtQ29udHJvbF0sIFtmb3JtQ29udHJvbE5hbWVdJyxcbn0pXG5leHBvcnQgY2xhc3MgTmF0aXZlRWxlbWVudEluamVjdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjb250cm9sRGlyOiBOZ0NvbnRyb2wsXG5cdFx0cHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmPEhUTUxGb3JtRWxlbWVudD5cblx0KSB7fVxuXHRuZ09uSW5pdCgpIHtcblx0XHRpZiAodGhpcy5jb250cm9sRGlyLmNvbnRyb2wpIHtcblx0XHRcdC8vIEB0cy1pZ25vcmVcbiAgICAgIHRoaXMuY29udHJvbERpci5jb250cm9sWyduYXRpdmVFbGVtZW50J10gPSB0aGlzLmhvc3QubmF0aXZlRWxlbWVudDtcblx0XHR9XG5cdH1cbn1cbiJdfQ==