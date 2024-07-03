import * as lpn from 'google-libphonenumber';
/*
We use "control: any" instead of "control: FormControl" to silence:
"Property 'nativeElement' does not exist on type 'FormControl'".
This happens because I've expanded control with nativeElement via
'NativeElementInjectorDirective' to get an access to the element.
More about this approach and reasons for this:
https://github.com/angular/angular/issues/18025
https://stackoverflow.com/a/54075119/1617590
*/
export const phoneNumberValidator = (control) => {
    if (!control.value) {
        return;
    }
    // Find <input> inside injected nativeElement and get its "id".
    const el = control.nativeElement;
    const inputBox = el
        ? el.querySelector('input[type="tel"]')
        : undefined;
    if (inputBox) {
        const id = inputBox.id;
        const isCheckValidation = inputBox.getAttribute('validation');
        if (isCheckValidation === 'true') {
            const isRequired = control.errors && control.errors.required === true;
            const error = { validatePhoneNumber: { valid: false } };
            inputBox.setCustomValidity('Invalid field.');
            let number;
            try {
                number = lpn.PhoneNumberUtil.getInstance().parse(control.value.number, control.value.countryCode);
            }
            catch (e) {
                if (isRequired) {
                    return error;
                }
                else {
                    inputBox.setCustomValidity('');
                }
            }
            if (control.value) {
                // @ts-ignore
                if (!number) {
                    return error;
                }
                else {
                    if (!lpn.PhoneNumberUtil.getInstance().isValidNumberForRegion(number, control.value.countryCode)) {
                        return error;
                    }
                    else {
                        inputBox.setCustomValidity('');
                    }
                }
            }
        }
        else if (isCheckValidation === 'false') {
            inputBox.setCustomValidity('');
            control.clearValidators();
        }
    }
    return;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWludGwtdGVsLWlucHV0LnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbmd4LWludGwtdGVsLWlucHV0LnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssR0FBRyxNQUFNLHVCQUF1QixDQUFDO0FBRTdDOzs7Ozs7OztFQVFFO0FBQ0YsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxPQUFZLEVBQUUsRUFBRTtJQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtRQUNuQixPQUFPO0tBQ1A7SUFDRCwrREFBK0Q7SUFDL0QsTUFBTSxFQUFFLEdBQWdCLE9BQU8sQ0FBQyxhQUE0QixDQUFDO0lBQzdELE1BQU0sUUFBUSxHQUEyQixFQUFFO1FBQzFDLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDYixJQUFJLFFBQVEsRUFBRTtRQUNiLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDdkIsTUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzlELElBQUksaUJBQWlCLEtBQUssTUFBTSxFQUFFO1lBQ2pDLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDO1lBQ3RFLE1BQU0sS0FBSyxHQUFHLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUV4RCxRQUFRLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUU3QyxJQUFJLE1BQXVCLENBQUM7WUFFNUIsSUFBSTtnQkFDSCxNQUFNLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQy9DLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUNwQixPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FDekIsQ0FBQzthQUNGO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1gsSUFBSSxVQUFVLEVBQUU7b0JBQ2YsT0FBTyxLQUFLLENBQUM7aUJBQ2I7cUJBQU07b0JBQ04sUUFBUSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUMvQjthQUNEO1lBRUQsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO2dCQUNsQixhQUFhO2dCQUNULElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ2hCLE9BQU8sS0FBSyxDQUFDO2lCQUNiO3FCQUFNO29CQUNOLElBQ0MsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLHNCQUFzQixDQUN4RCxNQUFNLEVBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQ3pCLEVBQ0E7d0JBQ0QsT0FBTyxLQUFLLENBQUM7cUJBQ2I7eUJBQU07d0JBQ04sUUFBUSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUMvQjtpQkFDRDthQUNEO1NBQ0Q7YUFBTSxJQUFJLGlCQUFpQixLQUFLLE9BQU8sRUFBRTtZQUN6QyxRQUFRLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFL0IsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzFCO0tBQ0Q7SUFDRCxPQUFPO0FBQ1IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbHBuIGZyb20gJ2dvb2dsZS1saWJwaG9uZW51bWJlcic7XG5cbi8qXG5XZSB1c2UgXCJjb250cm9sOiBhbnlcIiBpbnN0ZWFkIG9mIFwiY29udHJvbDogRm9ybUNvbnRyb2xcIiB0byBzaWxlbmNlOlxuXCJQcm9wZXJ0eSAnbmF0aXZlRWxlbWVudCcgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAnRm9ybUNvbnRyb2wnXCIuXG5UaGlzIGhhcHBlbnMgYmVjYXVzZSBJJ3ZlIGV4cGFuZGVkIGNvbnRyb2wgd2l0aCBuYXRpdmVFbGVtZW50IHZpYVxuJ05hdGl2ZUVsZW1lbnRJbmplY3RvckRpcmVjdGl2ZScgdG8gZ2V0IGFuIGFjY2VzcyB0byB0aGUgZWxlbWVudC5cbk1vcmUgYWJvdXQgdGhpcyBhcHByb2FjaCBhbmQgcmVhc29ucyBmb3IgdGhpczpcbmh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE4MDI1XG5odHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTQwNzUxMTkvMTYxNzU5MFxuKi9cbmV4cG9ydCBjb25zdCBwaG9uZU51bWJlclZhbGlkYXRvciA9IChjb250cm9sOiBhbnkpID0+IHtcblx0aWYgKCFjb250cm9sLnZhbHVlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdC8vIEZpbmQgPGlucHV0PiBpbnNpZGUgaW5qZWN0ZWQgbmF0aXZlRWxlbWVudCBhbmQgZ2V0IGl0cyBcImlkXCIuXG5cdGNvbnN0IGVsOiBIVE1MRWxlbWVudCA9IGNvbnRyb2wubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcblx0Y29uc3QgaW5wdXRCb3g6IEhUTUxJbnB1dEVsZW1lbnQgfCBhbnkgPSBlbFxuXHRcdD8gZWwucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInRlbFwiXScpXG5cdFx0OiB1bmRlZmluZWQ7XG5cdGlmIChpbnB1dEJveCkge1xuXHRcdGNvbnN0IGlkID0gaW5wdXRCb3guaWQ7XG5cdFx0Y29uc3QgaXNDaGVja1ZhbGlkYXRpb24gPSBpbnB1dEJveC5nZXRBdHRyaWJ1dGUoJ3ZhbGlkYXRpb24nKTtcblx0XHRpZiAoaXNDaGVja1ZhbGlkYXRpb24gPT09ICd0cnVlJykge1xuXHRcdFx0Y29uc3QgaXNSZXF1aXJlZCA9IGNvbnRyb2wuZXJyb3JzICYmIGNvbnRyb2wuZXJyb3JzLnJlcXVpcmVkID09PSB0cnVlO1xuXHRcdFx0Y29uc3QgZXJyb3IgPSB7IHZhbGlkYXRlUGhvbmVOdW1iZXI6IHsgdmFsaWQ6IGZhbHNlIH0gfTtcblxuXHRcdFx0aW5wdXRCb3guc2V0Q3VzdG9tVmFsaWRpdHkoJ0ludmFsaWQgZmllbGQuJyk7XG5cblx0XHRcdGxldCBudW1iZXI6IGxwbi5QaG9uZU51bWJlcjtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0bnVtYmVyID0gbHBuLlBob25lTnVtYmVyVXRpbC5nZXRJbnN0YW5jZSgpLnBhcnNlKFxuXHRcdFx0XHRcdGNvbnRyb2wudmFsdWUubnVtYmVyLFxuXHRcdFx0XHRcdGNvbnRyb2wudmFsdWUuY291bnRyeUNvZGVcblx0XHRcdFx0KTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0aWYgKGlzUmVxdWlyZWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aW5wdXRCb3guc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjb250cm9sLnZhbHVlKSB7XG5cdFx0XHRcdC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKCFudW1iZXIpIHtcblx0XHRcdFx0XHRyZXR1cm4gZXJyb3I7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0IWxwbi5QaG9uZU51bWJlclV0aWwuZ2V0SW5zdGFuY2UoKS5pc1ZhbGlkTnVtYmVyRm9yUmVnaW9uKFxuXHRcdFx0XHRcdFx0XHRudW1iZXIsXG5cdFx0XHRcdFx0XHRcdGNvbnRyb2wudmFsdWUuY291bnRyeUNvZGVcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHJldHVybiBlcnJvcjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aW5wdXRCb3guc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoaXNDaGVja1ZhbGlkYXRpb24gPT09ICdmYWxzZScpIHtcblx0XHRcdGlucHV0Qm94LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcblxuXHRcdFx0Y29udHJvbC5jbGVhclZhbGlkYXRvcnMoKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuO1xufTtcbiJdfQ==