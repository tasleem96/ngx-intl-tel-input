import * as lpn from 'google-libphonenumber';
import { Component, EventEmitter, forwardRef, Input, Output, ViewChild, } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { setTheme } from 'ngx-bootstrap/utils';
import { CountryCode } from './data/country-code';
import { SearchCountryField } from './enums/search-country-field.enum';
import { phoneNumberValidator } from './ngx-intl-tel-input.validator';
import { PhoneNumberFormat } from './enums/phone-number-format.enum';
import * as i0 from "@angular/core";
import * as i1 from "./data/country-code";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "ngx-bootstrap/dropdown";
import * as i5 from "./directives/native-element-injector.directive";
const _c0 = ["countryList"];
function NgxIntlTelInputComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("+", ctx_r0.selectedCountry.dialCode, "");
} }
function NgxIntlTelInputComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17)(1, "input", 18);
    i0.ɵɵlistener("ngModelChange", function NgxIntlTelInputComponent_div_6_div_1_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.countrySearchText = $event); })("keyup", function NgxIntlTelInputComponent_div_6_div_1_Template_input_keyup_1_listener() { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r10.searchCountry()); })("click", function NgxIntlTelInputComponent_div_6_div_1_Template_input_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r3.countrySearchText)("placeholder", ctx_r3.searchCountryPlaceholder);
} }
function NgxIntlTelInputComponent_div_6_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 19);
    i0.ɵɵlistener("click", function NgxIntlTelInputComponent_div_6_li_4_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r14); const country_r12 = restoredCtx.$implicit; const ctx_r13 = i0.ɵɵnextContext(2); const _r2 = i0.ɵɵreference(8); return i0.ɵɵresetView(ctx_r13.onCountrySelect(country_r12, _r2)); });
    i0.ɵɵelementStart(1, "div", 20);
    i0.ɵɵelement(2, "div", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 21);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 22);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const country_r12 = ctx.$implicit;
    i0.ɵɵproperty("id", country_r12.htmlId + "-preferred");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", country_r12.flagClass);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(country_r12.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("+", country_r12.dialCode, "");
} }
function NgxIntlTelInputComponent_div_6_li_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li", 23);
} }
function NgxIntlTelInputComponent_div_6_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 24);
    i0.ɵɵlistener("click", function NgxIntlTelInputComponent_div_6_li_6_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r17); const country_r15 = restoredCtx.$implicit; const ctx_r16 = i0.ɵɵnextContext(2); const _r2 = i0.ɵɵreference(8); return i0.ɵɵresetView(ctx_r16.onCountrySelect(country_r15, _r2)); });
    i0.ɵɵelementStart(1, "div", 20);
    i0.ɵɵelement(2, "div", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 21);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 22);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const country_r15 = ctx.$implicit;
    i0.ɵɵproperty("id", country_r15.htmlId);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", country_r15.flagClass);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(country_r15.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("+", country_r15.dialCode, "");
} }
function NgxIntlTelInputComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, NgxIntlTelInputComponent_div_6_div_1_Template, 2, 2, "div", 11);
    i0.ɵɵelementStart(2, "ul", 12, 13);
    i0.ɵɵtemplate(4, NgxIntlTelInputComponent_div_6_li_4_Template, 7, 4, "li", 14);
    i0.ɵɵtemplate(5, NgxIntlTelInputComponent_div_6_li_5_Template, 1, 0, "li", 15);
    i0.ɵɵtemplate(6, NgxIntlTelInputComponent_div_6_li_6_Template, 7, 4, "li", 16);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.searchCountryFlag && ctx_r1.searchCountryField);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.preferredCountriesInDropDown);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.preferredCountriesInDropDown == null ? null : ctx_r1.preferredCountriesInDropDown.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.allCountries);
} }
const _c1 = function (a0) { return { "disabled": a0 }; };
export class NgxIntlTelInputComponent {
    countryCodeData;
    value = '';
    preferredCountries = [];
    enablePlaceholder = true;
    customPlaceholder;
    numberFormat = PhoneNumberFormat.International;
    cssClass = 'form-control';
    onlyCountries = [];
    enableAutoCountrySelect = true;
    searchCountryFlag = false;
    searchCountryField = [SearchCountryField.All];
    searchCountryPlaceholder = 'Search Country';
    maxLength;
    selectFirstCountry = true;
    selectedCountryISO;
    phoneValidation = true;
    inputId = 'phone';
    separateDialCode = false;
    separateDialCodeClass;
    countryChange = new EventEmitter();
    selectedCountry = {
        areaCodes: undefined,
        dialCode: '',
        htmlId: '',
        flagClass: '',
        iso2: '',
        name: '',
        placeHolder: '',
        priority: 0,
    };
    phoneNumber = '';
    allCountries = [];
    preferredCountriesInDropDown = [];
    // Has to be 'any' to prevent a need to install @types/google-libphonenumber by the package user...
    phoneUtil = lpn.PhoneNumberUtil.getInstance();
    disabled = false;
    errors = ['Phone number is required.'];
    countrySearchText = '';
    countryList;
    onTouched = () => { };
    propagateChange = (_) => { };
    constructor(countryCodeData) {
        this.countryCodeData = countryCodeData;
        // If this is not set, ngx-bootstrap will try to use the bs3 CSS (which is not what we've embedded) and will
        // Add the wrong classes and such
        setTheme('bs4');
    }
    ngOnInit() {
        this.init();
    }
    ngOnChanges(changes) {
        const selectedISO = changes['selectedCountryISO'];
        if (this.allCountries &&
            selectedISO &&
            selectedISO.currentValue !== selectedISO.previousValue) {
            this.updateSelectedCountry();
        }
        if (changes['preferredCountries']) {
            this.updatePreferredCountries();
        }
        this.checkSeparateDialCodeStyle();
    }
    /*
        This is a wrapper method to avoid calling this.ngOnInit() in writeValue().
        Ref: http://codelyzer.com/rules/no-life-cycle-call/
    */
    init() {
        this.fetchCountryData();
        if (this.preferredCountries.length) {
            this.updatePreferredCountries();
        }
        if (this.onlyCountries.length) {
            this.allCountries = this.allCountries.filter((c) => this.onlyCountries.includes(c.iso2));
        }
        if (this.selectFirstCountry) {
            if (this.preferredCountriesInDropDown.length) {
                this.setSelectedCountry(this.preferredCountriesInDropDown[0]);
            }
            else {
                this.setSelectedCountry(this.allCountries[0]);
            }
        }
        this.updateSelectedCountry();
        this.checkSeparateDialCodeStyle();
    }
    setSelectedCountry(country) {
        this.selectedCountry = country;
        this.countryChange.emit(country);
    }
    /**
     * Search country based on country name, iso2, dialCode or all of them.
     */
    searchCountry() {
        if (!this.countrySearchText) {
            this.countryList.nativeElement
                .querySelector('.iti__country-list li')
                .scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'nearest',
            });
            return;
        }
        const countrySearchTextLower = this.countrySearchText.toLowerCase();
        // @ts-ignore
        const country = this.allCountries.filter((c) => {
            if (this.searchCountryField.indexOf(SearchCountryField.All) > -1) {
                // Search in all fields
                if (c.iso2.toLowerCase().startsWith(countrySearchTextLower)) {
                    return c;
                }
                if (c.name.toLowerCase().startsWith(countrySearchTextLower)) {
                    return c;
                }
                if (c.dialCode.startsWith(this.countrySearchText)) {
                    return c;
                }
            }
            else {
                // Or search by specific SearchCountryField(s)
                if (this.searchCountryField.indexOf(SearchCountryField.Iso2) > -1) {
                    if (c.iso2.toLowerCase().startsWith(countrySearchTextLower)) {
                        return c;
                    }
                }
                if (this.searchCountryField.indexOf(SearchCountryField.Name) > -1) {
                    if (c.name.toLowerCase().startsWith(countrySearchTextLower)) {
                        return c;
                    }
                }
                if (this.searchCountryField.indexOf(SearchCountryField.DialCode) > -1) {
                    if (c.dialCode.startsWith(this.countrySearchText)) {
                        return c;
                    }
                }
            }
        });
        if (country.length > 0) {
            const el = this.countryList.nativeElement.querySelector('#' + country[0].htmlId);
            if (el) {
                el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'nearest',
                });
            }
        }
        this.checkSeparateDialCodeStyle();
    }
    onPhoneNumberChange() {
        let countryCode;
        // Handle the case where the user sets the value programatically based on a persisted ChangeData obj.
        if (this.phoneNumber && typeof this.phoneNumber === 'object') {
            const numberObj = this.phoneNumber;
            this.phoneNumber = numberObj.number;
            countryCode = numberObj.countryCode;
        }
        this.value = this.phoneNumber;
        countryCode = countryCode || this.selectedCountry.iso2;
        // @ts-ignore
        const number = this.getParsedNumber(this.phoneNumber, countryCode);
        // auto select country based on the extension (and areaCode if needed) (e.g select Canada if number starts with +1 416)
        if (this.enableAutoCountrySelect) {
            countryCode =
                number && number.getCountryCode()
                    // @ts-ignore
                    ? this.getCountryIsoCode(number.getCountryCode(), number)
                    : this.selectedCountry.iso2;
            if (countryCode && countryCode !== this.selectedCountry.iso2) {
                const newCountry = this.allCountries
                    .sort((a, b) => {
                    return a.priority - b.priority;
                })
                    .find((c) => c.iso2 === countryCode);
                if (newCountry) {
                    this.selectedCountry = newCountry;
                }
            }
        }
        countryCode = countryCode ? countryCode : this.selectedCountry.iso2;
        this.checkSeparateDialCodeStyle();
        if (!this.value) {
            // Reason: avoid https://stackoverflow.com/a/54358133/1617590
            // tslint:disable-next-line: no-null-keyword
            // @ts-ignore
            this.propagateChange(null);
        }
        else {
            const intlNo = number
                ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.INTERNATIONAL)
                : '';
            // parse phoneNumber if separate dial code is needed
            if (this.separateDialCode && intlNo) {
                this.value = this.removeDialCode(intlNo);
            }
            this.propagateChange({
                number: this.value,
                internationalNumber: intlNo,
                nationalNumber: number
                    ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.NATIONAL)
                    : '',
                e164Number: number
                    ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.E164)
                    : '',
                countryCode: countryCode.toUpperCase(),
                dialCode: '+' + this.selectedCountry.dialCode,
            });
        }
    }
    onCountrySelect(country, el) {
        this.setSelectedCountry(country);
        this.checkSeparateDialCodeStyle();
        if (this.phoneNumber && this.phoneNumber.length > 0) {
            this.value = this.phoneNumber;
            const number = this.getParsedNumber(this.phoneNumber, this.selectedCountry.iso2);
            const intlNo = number
                ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.INTERNATIONAL)
                : '';
            // parse phoneNumber if separate dial code is needed
            if (this.separateDialCode && intlNo) {
                this.value = this.removeDialCode(intlNo);
            }
            this.propagateChange({
                number: this.value,
                internationalNumber: intlNo,
                nationalNumber: number
                    ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.NATIONAL)
                    : '',
                e164Number: number
                    ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.E164)
                    : '',
                countryCode: this.selectedCountry.iso2.toUpperCase(),
                dialCode: '+' + this.selectedCountry.dialCode,
            });
        }
        else {
            // Reason: avoid https://stackoverflow.com/a/54358133/1617590
            // tslint:disable-next-line: no-null-keyword
            // @ts-ignore
            this.propagateChange(null);
        }
        el.focus();
    }
    onInputKeyPress(event) {
        const allowedChars = /[0-9\+\-\(\)\ ]/;
        const allowedCtrlChars = /[axcv]/; // Allows copy-pasting
        const allowedOtherKeys = [
            'ArrowLeft',
            'ArrowUp',
            'ArrowRight',
            'ArrowDown',
            'Home',
            'End',
            'Insert',
            'Delete',
            'Backspace',
        ];
        if (!allowedChars.test(event.key) &&
            !(event.ctrlKey && allowedCtrlChars.test(event.key)) &&
            !allowedOtherKeys.includes(event.key)) {
            event.preventDefault();
        }
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    writeValue(obj) {
        if (obj === undefined) {
            this.init();
        }
        this.phoneNumber = obj;
        setTimeout(() => {
            this.onPhoneNumberChange();
        }, 1);
    }
    resolvePlaceholder() {
        let placeholder = '';
        if (this.customPlaceholder) {
            placeholder = this.customPlaceholder;
        }
        else if (this.selectedCountry.placeHolder) {
            placeholder = this.selectedCountry.placeHolder;
            if (this.separateDialCode) {
                placeholder = this.removeDialCode(placeholder);
            }
        }
        return placeholder;
    }
    /* --------------------------------- Helpers -------------------------------- */
    /**
     * Returns parse PhoneNumber object.
     * @param phoneNumber string
     * @param countryCode string
     */
    getParsedNumber(phoneNumber, countryCode) {
        let number;
        try {
            number = this.phoneUtil.parse(phoneNumber, countryCode.toUpperCase());
        }
        catch (e) { }
        // @ts-ignore
        return number;
    }
    /**
     * Adjusts input alignment based on the dial code presentation style.
     */
    checkSeparateDialCodeStyle() {
        if (this.separateDialCode && this.selectedCountry) {
            const cntryCd = this.selectedCountry.dialCode;
            this.separateDialCodeClass =
                'separate-dial-code iti-sdc-' + (cntryCd.length + 1);
        }
        else {
            this.separateDialCodeClass = '';
        }
    }
    /**
     * Cleans dialcode from phone number string.
     * @param phoneNumber string
     */
    removeDialCode(phoneNumber) {
        const number = this.getParsedNumber(phoneNumber, this.selectedCountry.iso2);
        phoneNumber = this.phoneUtil.format(number, lpn.PhoneNumberFormat[this.numberFormat]);
        if (phoneNumber.startsWith('+') && this.separateDialCode) {
            phoneNumber = phoneNumber.substr(phoneNumber.indexOf(' ') + 1);
        }
        return phoneNumber;
    }
    /**
     * Sifts through all countries and returns iso code of the primary country
     * based on the number provided.
     * @param countryCode country code in number format
     * @param number PhoneNumber object
     */
    getCountryIsoCode(countryCode, number) {
        // Will use this to match area code from the first numbers
        // @ts-ignore
        const rawNumber = number['values_']['2'].toString();
        // List of all countries with countryCode (can be more than one. e.x. US, CA, DO, PR all have +1 countryCode)
        const countries = this.allCountries.filter((c) => c.dialCode === countryCode.toString());
        // Main country is the country, which has no areaCodes specified in country-code.ts file.
        const mainCountry = countries.find((c) => c.areaCodes === undefined);
        // Secondary countries are all countries, which have areaCodes specified in country-code.ts file.
        const secondaryCountries = countries.filter((c) => c.areaCodes !== undefined);
        let matchedCountry = mainCountry ? mainCountry.iso2 : undefined;
        /*
            Iterate over each secondary country and check if nationalNumber starts with any of areaCodes available.
            If no matches found, fallback to the main country.
        */
        secondaryCountries.forEach((country) => {
            // @ts-ignore
            country.areaCodes.forEach((areaCode) => {
                if (rawNumber.startsWith(areaCode)) {
                    matchedCountry = country.iso2;
                }
            });
        });
        return matchedCountry;
    }
    /**
     * Gets formatted example phone number from phoneUtil.
     * @param countryCode string
     */
    getPhoneNumberPlaceHolder(countryCode) {
        try {
            return this.phoneUtil.format(this.phoneUtil.getExampleNumber(countryCode), lpn.PhoneNumberFormat[this.numberFormat]);
        }
        catch (e) {
            // @ts-ignore
            return e;
        }
    }
    /**
     * Clearing the list to avoid duplicates (https://github.com/webcat12345/ngx-intl-tel-input/issues/248)
     */
    fetchCountryData() {
        this.allCountries = [];
        this.countryCodeData.allCountries.forEach((c) => {
            const country = {
                name: c[0].toString(),
                iso2: c[1].toString(),
                dialCode: c[2].toString(),
                priority: +c[3] || 0,
                areaCodes: c[4] || undefined,
                htmlId: `iti-0__item-${c[1].toString()}`,
                flagClass: `iti__${c[1].toString().toLocaleLowerCase()}`,
                placeHolder: '',
            };
            if (this.enablePlaceholder) {
                country.placeHolder = this.getPhoneNumberPlaceHolder(country.iso2.toUpperCase());
            }
            this.allCountries.push(country);
        });
    }
    /**
     * Populates preferredCountriesInDropDown with prefferred countries.
     */
    updatePreferredCountries() {
        if (this.preferredCountries.length) {
            this.preferredCountriesInDropDown = [];
            this.preferredCountries.forEach((iso2) => {
                const preferredCountry = this.allCountries.filter((c) => {
                    return c.iso2 === iso2;
                });
                this.preferredCountriesInDropDown.push(preferredCountry[0]);
            });
        }
    }
    /**
     * Updates selectedCountry.
     */
    updateSelectedCountry() {
        if (this.selectedCountryISO) {
            // @ts-ignore
            this.selectedCountry = this.allCountries.find((c) => {
                return c.iso2.toLowerCase() === this.selectedCountryISO.toLowerCase();
            });
            if (this.selectedCountry) {
                if (this.phoneNumber) {
                    this.onPhoneNumberChange();
                }
                else {
                    // Reason: avoid https://stackoverflow.com/a/54358133/1617590
                    // tslint:disable-next-line: no-null-keyword
                    // @ts-ignore
                    this.propagateChange(null);
                }
            }
        }
    }
    static ɵfac = function NgxIntlTelInputComponent_Factory(t) { return new (t || NgxIntlTelInputComponent)(i0.ɵɵdirectiveInject(i1.CountryCode)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxIntlTelInputComponent, selectors: [["ngx-intl-tel-input"]], viewQuery: function NgxIntlTelInputComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.countryList = _t.first);
        } }, inputs: { value: "value", preferredCountries: "preferredCountries", enablePlaceholder: "enablePlaceholder", customPlaceholder: "customPlaceholder", numberFormat: "numberFormat", cssClass: "cssClass", onlyCountries: "onlyCountries", enableAutoCountrySelect: "enableAutoCountrySelect", searchCountryFlag: "searchCountryFlag", searchCountryField: "searchCountryField", searchCountryPlaceholder: "searchCountryPlaceholder", maxLength: "maxLength", selectFirstCountry: "selectFirstCountry", selectedCountryISO: "selectedCountryISO", phoneValidation: "phoneValidation", inputId: "inputId", separateDialCode: "separateDialCode" }, outputs: { countryChange: "countryChange" }, features: [i0.ɵɵProvidersFeature([
                CountryCode,
                {
                    provide: NG_VALUE_ACCESSOR,
                    // tslint:disable-next-line:no-forward-ref
                    useExisting: forwardRef(() => NgxIntlTelInputComponent),
                    multi: true,
                },
                {
                    provide: NG_VALIDATORS,
                    useValue: phoneNumberValidator,
                    multi: true,
                },
            ]), i0.ɵɵNgOnChangesFeature], decls: 9, vars: 14, consts: [[1, "iti", "iti--allow-dropdown", 3, "ngClass"], ["dropdown", "", 1, "iti__flag-container", 3, "ngClass", "isDisabled"], ["dropdownToggle", "", 1, "iti__selected-flag", "dropdown-toggle"], [1, "iti__flag", 3, "ngClass"], ["class", "selected-dial-code", 4, "ngIf"], [1, "iti__arrow"], ["class", "dropdown-menu country-dropdown", 4, "dropdownMenu"], ["type", "tel", "autocomplete", "off", 3, "id", "ngClass", "ngModel", "disabled", "placeholder", "blur", "keypress", "ngModelChange"], ["focusable", ""], [1, "selected-dial-code"], [1, "dropdown-menu", "country-dropdown"], ["class", "search-container", 4, "ngIf"], [1, "iti__country-list"], ["countryList", ""], ["class", "iti__country iti__preferred", 3, "id", "click", 4, "ngFor", "ngForOf"], ["class", "iti__divider", 4, "ngIf"], ["class", "iti__country iti__standard", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "search-container"], ["id", "country-search-box", "autofocus", "", 3, "ngModel", "placeholder", "ngModelChange", "keyup", "click"], [1, "iti__country", "iti__preferred", 3, "id", "click"], [1, "iti__flag-box"], [1, "iti__country-name"], [1, "iti__dial-code"], [1, "iti__divider"], [1, "iti__country", "iti__standard", 3, "id", "click"]], template: function NgxIntlTelInputComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵelement(3, "div", 3);
            i0.ɵɵtemplate(4, NgxIntlTelInputComponent_div_4_Template, 2, 1, "div", 4);
            i0.ɵɵelement(5, "div", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, NgxIntlTelInputComponent_div_6_Template, 7, 4, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "input", 7, 8);
            i0.ɵɵlistener("blur", function NgxIntlTelInputComponent_Template_input_blur_7_listener() { return ctx.onTouched(); })("keypress", function NgxIntlTelInputComponent_Template_input_keypress_7_listener($event) { return ctx.onInputKeyPress($event); })("ngModelChange", function NgxIntlTelInputComponent_Template_input_ngModelChange_7_listener($event) { return ctx.phoneNumber = $event; })("ngModelChange", function NgxIntlTelInputComponent_Template_input_ngModelChange_7_listener() { return ctx.onPhoneNumberChange(); });
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.separateDialCodeClass);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(12, _c1, ctx.disabled))("isDisabled", ctx.disabled);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx.selectedCountry.flagClass || "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.separateDialCode);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("id", ctx.inputId)("ngClass", ctx.cssClass)("ngModel", ctx.phoneNumber)("disabled", ctx.disabled)("placeholder", ctx.resolvePlaceholder());
            i0.ɵɵattribute("maxLength", ctx.maxLength)("validation", ctx.phoneValidation);
        } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgIf, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.BsDropdownMenuDirective, i4.BsDropdownToggleDirective, i4.BsDropdownDirective, i5.NativeElementInjectorDirective], styles: [".dropup[_ngcontent-%COMP%], .dropright[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%], .dropleft[_ngcontent-%COMP%]{position:relative}.dropdown-toggle[_ngcontent-%COMP%]{white-space:nowrap}.dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropdown-menu[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-right[_ngcontent-%COMP%]{right:0;left:auto}@media (min-width: 576px){.dropdown-menu-sm-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-sm-right[_ngcontent-%COMP%]{right:0;left:auto}}@media (min-width: 768px){.dropdown-menu-md-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-md-right[_ngcontent-%COMP%]{right:0;left:auto}}@media (min-width: 992px){.dropdown-menu-lg-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-lg-right[_ngcontent-%COMP%]{right:0;left:auto}}@media (min-width: 1200px){.dropdown-menu-xl-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-xl-right[_ngcontent-%COMP%]{right:0;left:auto}}.dropup[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropright[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{vertical-align:0}.dropleft[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:none}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:before{vertical-align:0}.dropdown-menu[x-placement^=top][_ngcontent-%COMP%], .dropdown-menu[x-placement^=right][_ngcontent-%COMP%], .dropdown-menu[x-placement^=bottom][_ngcontent-%COMP%], .dropdown-menu[x-placement^=left][_ngcontent-%COMP%]{right:auto;bottom:auto}.dropdown-divider[_ngcontent-%COMP%]{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item[_ngcontent-%COMP%]{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item[_ngcontent-%COMP%]:hover, .dropdown-item[_ngcontent-%COMP%]:focus{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show[_ngcontent-%COMP%]{display:block}.dropdown-header[_ngcontent-%COMP%]{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text[_ngcontent-%COMP%]{display:block;padding:.25rem 1.5rem;color:#212529}", "li.iti__country[_ngcontent-%COMP%]:hover{background-color:#0000000d}.iti__selected-flag.dropdown-toggle[_ngcontent-%COMP%]:after{content:none}.iti__flag-container.disabled[_ngcontent-%COMP%]{cursor:default!important}.iti.iti--allow-dropdown[_ngcontent-%COMP%]   .flag-container.disabled[_ngcontent-%COMP%]:hover   .iti__selected-flag[_ngcontent-%COMP%]{background:none}.country-dropdown[_ngcontent-%COMP%]{border:1px solid #ccc;width:-moz-fit-content;width:fit-content;padding:1px;border-collapse:collapse}.search-container[_ngcontent-%COMP%]{position:relative}.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;border:none;border-bottom:1px solid #ccc;padding-left:10px}.search-icon[_ngcontent-%COMP%]{position:absolute;z-index:2;width:25px;margin:1px 10px}.iti__country-list[_ngcontent-%COMP%]{position:relative;border:none}.iti[_ngcontent-%COMP%]   input#country-search-box[_ngcontent-%COMP%]{padding-left:6px}.iti[_ngcontent-%COMP%]   .selected-dial-code[_ngcontent-%COMP%]{margin-left:6px}.iti.separate-dial-code[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%]{width:93px}.iti.separate-dial-code[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-left:98px}"] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxIntlTelInputComponent, [{
        type: Component,
        args: [{ selector: 'ngx-intl-tel-input', providers: [
                    CountryCode,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        // tslint:disable-next-line:no-forward-ref
                        useExisting: forwardRef(() => NgxIntlTelInputComponent),
                        multi: true,
                    },
                    {
                        provide: NG_VALIDATORS,
                        useValue: phoneNumberValidator,
                        multi: true,
                    },
                ], template: "<div class=\"iti iti--allow-dropdown\"\n\t[ngClass]=\"separateDialCodeClass\">\n\t<div class=\"iti__flag-container\"\n\t\tdropdown\n\t\t[ngClass]=\"{'disabled': disabled}\"\n\t\t[isDisabled]=\"disabled\">\n\t\t<div class=\"iti__selected-flag dropdown-toggle\"\n\t\t\tdropdownToggle>\n\t\t\t<div class=\"iti__flag\"\n\t\t\t\t[ngClass]=\"selectedCountry.flagClass || ''\"></div>\n\t\t\t<div *ngIf=\"separateDialCode\"\n\t\t\t\tclass=\"selected-dial-code\">+{{selectedCountry.dialCode}}</div>\n\t\t\t<div class=\"iti__arrow\"></div>\n\t\t</div>\n\t\t<div *dropdownMenu\n\t\t\tclass=\"dropdown-menu country-dropdown\">\n\t\t\t<div class=\"search-container\"\n\t\t\t\t*ngIf=\"searchCountryFlag && searchCountryField\">\n\t\t\t\t<input id=\"country-search-box\"\n\t\t\t\t\t[(ngModel)]=\"countrySearchText\"\n\t\t\t\t\t(keyup)=\"searchCountry()\"\n\t\t\t\t\t(click)=\"$event.stopPropagation()\"\n\t\t\t\t\t[placeholder]=\"searchCountryPlaceholder\"\n\t\t\t\t\tautofocus>\n\t\t\t</div>\n\t\t\t<ul class=\"iti__country-list\"\n\t\t\t\t#countryList>\n\t\t\t\t<li class=\"iti__country iti__preferred\"\n\t\t\t\t\t*ngFor=\"let country of preferredCountriesInDropDown\"\n\t\t\t\t\t(click)=\"onCountrySelect(country, focusable)\"\n\t\t\t\t\t[id]=\"country.htmlId+'-preferred'\">\n\t\t\t\t\t<div class=\"iti__flag-box\">\n\t\t\t\t\t\t<div class=\"iti__flag\"\n\t\t\t\t\t\t\t[ngClass]=\"country.flagClass\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"iti__country-name\">{{country.name}}</span>\n\t\t\t\t\t<span class=\"iti__dial-code\">+{{country.dialCode}}</span>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"iti__divider\"\n\t\t\t\t\t*ngIf=\"preferredCountriesInDropDown?.length\"></li>\n\t\t\t\t<li class=\"iti__country iti__standard\"\n\t\t\t\t\t*ngFor=\"let country of allCountries\"\n\t\t\t\t\t(click)=\"onCountrySelect(country, focusable)\"\n\t\t\t\t\t[id]=\"country.htmlId\">\n\t\t\t\t\t<div class=\"iti__flag-box\">\n\t\t\t\t\t\t<div class=\"iti__flag\"\n\t\t\t\t\t\t\t[ngClass]=\"country.flagClass\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"iti__country-name\">{{country.name}}</span>\n\t\t\t\t\t<span class=\"iti__dial-code\">+{{country.dialCode}}</span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<input type=\"tel\"\n\t\t[id]=\"inputId\"\n\t\tautocomplete=\"off\"\n\t\t[ngClass]=\"cssClass\"\n\t\t(blur)=\"onTouched()\"\n\t\t(keypress)=\"onInputKeyPress($event)\"\n\t\t[(ngModel)]=\"phoneNumber\"\n\t\t(ngModelChange)=\"onPhoneNumberChange()\"\n\t\t[disabled]=\"disabled\"\n\t\t[placeholder]=\"resolvePlaceholder()\"\n\t\t[attr.maxLength]=\"maxLength\"\n\t\t[attr.validation]=\"phoneValidation\"\n\t\t#focusable>\n</div>\n", styles: [".dropup,.dropright,.dropdown,.dropleft{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width: 576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width: 768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width: 992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width: 1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-toggle:after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft .dropdown-toggle:after{display:none}.dropleft .dropdown-toggle:before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty:after{margin-left:0}.dropleft .dropdown-toggle:before{vertical-align:0}.dropdown-menu[x-placement^=top],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:hover,.dropdown-item:focus{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}\n", "li.iti__country:hover{background-color:#0000000d}.iti__selected-flag.dropdown-toggle:after{content:none}.iti__flag-container.disabled{cursor:default!important}.iti.iti--allow-dropdown .flag-container.disabled:hover .iti__selected-flag{background:none}.country-dropdown{border:1px solid #ccc;width:-moz-fit-content;width:fit-content;padding:1px;border-collapse:collapse}.search-container{position:relative}.search-container input{width:100%;border:none;border-bottom:1px solid #ccc;padding-left:10px}.search-icon{position:absolute;z-index:2;width:25px;margin:1px 10px}.iti__country-list{position:relative;border:none}.iti input#country-search-box{padding-left:6px}.iti .selected-dial-code{margin-left:6px}.iti.separate-dial-code .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2 .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3 .iti__selected-flag,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4 .iti__selected-flag{width:93px}.iti.separate-dial-code input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2 input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3 input,.iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4 input{padding-left:98px}\n"] }]
    }], function () { return [{ type: i1.CountryCode }]; }, { value: [{
            type: Input
        }], preferredCountries: [{
            type: Input
        }], enablePlaceholder: [{
            type: Input
        }], customPlaceholder: [{
            type: Input
        }], numberFormat: [{
            type: Input
        }], cssClass: [{
            type: Input
        }], onlyCountries: [{
            type: Input
        }], enableAutoCountrySelect: [{
            type: Input
        }], searchCountryFlag: [{
            type: Input
        }], searchCountryField: [{
            type: Input
        }], searchCountryPlaceholder: [{
            type: Input
        }], maxLength: [{
            type: Input
        }], selectFirstCountry: [{
            type: Input
        }], selectedCountryISO: [{
            type: Input
        }], phoneValidation: [{
            type: Input
        }], inputId: [{
            type: Input
        }], separateDialCode: [{
            type: Input
        }], countryChange: [{
            type: Output
        }], countryList: [{
            type: ViewChild,
            args: ['countryList']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWludGwtdGVsLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1pbnRsLXRlbC1pbnB1dC9zcmMvbGliL25neC1pbnRsLXRlbC1pbnB1dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtaW50bC10ZWwtaW5wdXQvc3JjL2xpYi9uZ3gtaW50bC10ZWwtaW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLEdBQUcsTUFBTSx1QkFBdUIsQ0FBQztBQUU3QyxPQUFPLEVBQ04sU0FBUyxFQUVULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUdMLE1BQU0sRUFFTixTQUFTLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7OztJQ2RsRSw4QkFDNEI7SUFBQSxZQUE2QjtJQUFBLGlCQUFNOzs7SUFBbkMsZUFBNkI7SUFBN0IsK0RBQTZCOzs7O0lBS3pELCtCQUNpRCxnQkFBQTtJQUUvQyxzUEFBK0IsK0pBQ3RCLGVBQUEsdUJBQWUsQ0FBQSxJQURPLHlHQUV0Qix3QkFBd0IsSUFGRjtJQURoQyxpQkFLVyxFQUFBOzs7SUFKVixlQUErQjtJQUEvQixrREFBK0IsZ0RBQUE7Ozs7SUFRaEMsOEJBR29DO0lBRG5DLHVR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d0JBQXdCO2NBcEJwQyxTQUFTOzJCQUVDLG9CQUFvQixhQUduQjtvQkFDVixXQUFXO29CQUNYO3dCQUNDLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLDBDQUEwQzt3QkFDMUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUseUJBQXlCLENBQUM7d0JBQ3ZELEtBQUssRUFBRSxJQUFJO3FCQUNYO29CQUNEO3dCQUNDLE9BQU8sRUFBRSxhQUFhO3dCQUN0QixRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixLQUFLLEVBQUUsSUFBSTtxQkFDWDtpQkFDRDs4REFHUSxLQUFLO2tCQUFiLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyx1QkFBdUI7a0JBQS9CLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyx3QkFBd0I7a0JBQWhDLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUdhLGFBQWE7a0JBQS9CLE1BQU07WUFzQm1CLFdBQVc7a0JBQXBDLFNBQVM7bUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGxwbiBmcm9tICdnb29nbGUtbGlicGhvbmVudW1iZXInO1xuXG5pbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEV2ZW50RW1pdHRlcixcblx0Zm9yd2FyZFJlZixcblx0SW5wdXQsXG5cdE9uQ2hhbmdlcyxcblx0T25Jbml0LFxuXHRPdXRwdXQsXG5cdFNpbXBsZUNoYW5nZXMsXG5cdFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgc2V0VGhlbWUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcblxuaW1wb3J0IHsgQ291bnRyeUNvZGUgfSBmcm9tICcuL2RhdGEvY291bnRyeS1jb2RlJztcbmltcG9ydCB7IENvdW50cnlJU08gfSBmcm9tICcuL2VudW1zL2NvdW50cnktaXNvLmVudW0nO1xuaW1wb3J0IHsgU2VhcmNoQ291bnRyeUZpZWxkIH0gZnJvbSAnLi9lbnVtcy9zZWFyY2gtY291bnRyeS1maWVsZC5lbnVtJztcbmltcG9ydCB7IENoYW5nZURhdGEgfSBmcm9tICcuL2ludGVyZmFjZXMvY2hhbmdlLWRhdGEnO1xuaW1wb3J0IHsgQ291bnRyeSB9IGZyb20gJy4vbW9kZWwvY291bnRyeS5tb2RlbCc7XG5pbXBvcnQgeyBwaG9uZU51bWJlclZhbGlkYXRvciB9IGZyb20gJy4vbmd4LWludGwtdGVsLWlucHV0LnZhbGlkYXRvcic7XG5pbXBvcnQgeyBQaG9uZU51bWJlckZvcm1hdCB9IGZyb20gJy4vZW51bXMvcGhvbmUtbnVtYmVyLWZvcm1hdC5lbnVtJztcblxuQENvbXBvbmVudCh7XG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXG5cdHNlbGVjdG9yOiAnbmd4LWludGwtdGVsLWlucHV0Jyxcblx0dGVtcGxhdGVVcmw6ICcuL25neC1pbnRsLXRlbC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2Jvb3RzdHJhcC1kcm9wZG93bi5jc3MnLCAnLi9uZ3gtaW50bC10ZWwtaW5wdXQuY29tcG9uZW50LmNzcyddLFxuXHRwcm92aWRlcnM6IFtcblx0XHRDb3VudHJ5Q29kZSxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1mb3J3YXJkLXJlZlxuXHRcdFx0dXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmd4SW50bFRlbElucHV0Q29tcG9uZW50KSxcblx0XHRcdG11bHRpOiB0cnVlLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogTkdfVkFMSURBVE9SUyxcblx0XHRcdHVzZVZhbHVlOiBwaG9uZU51bWJlclZhbGlkYXRvcixcblx0XHRcdG11bHRpOiB0cnVlLFxuXHRcdH0sXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIE5neEludGxUZWxJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblx0QElucHV0KCkgdmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICcnO1xuXHRASW5wdXQoKSBwcmVmZXJyZWRDb3VudHJpZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcblx0QElucHV0KCkgZW5hYmxlUGxhY2Vob2xkZXIgPSB0cnVlO1xuXHRASW5wdXQoKSBjdXN0b21QbGFjZWhvbGRlcjogc3RyaW5nO1xuXHRASW5wdXQoKSBudW1iZXJGb3JtYXQ6IFBob25lTnVtYmVyRm9ybWF0ID0gUGhvbmVOdW1iZXJGb3JtYXQuSW50ZXJuYXRpb25hbDtcblx0QElucHV0KCkgY3NzQ2xhc3MgPSAnZm9ybS1jb250cm9sJztcblx0QElucHV0KCkgb25seUNvdW50cmllczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXHRASW5wdXQoKSBlbmFibGVBdXRvQ291bnRyeVNlbGVjdCA9IHRydWU7XG5cdEBJbnB1dCgpIHNlYXJjaENvdW50cnlGbGFnID0gZmFsc2U7XG5cdEBJbnB1dCgpIHNlYXJjaENvdW50cnlGaWVsZDogU2VhcmNoQ291bnRyeUZpZWxkW10gPSBbU2VhcmNoQ291bnRyeUZpZWxkLkFsbF07XG5cdEBJbnB1dCgpIHNlYXJjaENvdW50cnlQbGFjZWhvbGRlciA9ICdTZWFyY2ggQ291bnRyeSc7XG5cdEBJbnB1dCgpIG1heExlbmd0aDogbnVtYmVyO1xuXHRASW5wdXQoKSBzZWxlY3RGaXJzdENvdW50cnkgPSB0cnVlO1xuXHRASW5wdXQoKSBzZWxlY3RlZENvdW50cnlJU086IENvdW50cnlJU087XG5cdEBJbnB1dCgpIHBob25lVmFsaWRhdGlvbiA9IHRydWU7XG5cdEBJbnB1dCgpIGlucHV0SWQgPSAncGhvbmUnO1xuXHRASW5wdXQoKSBzZXBhcmF0ZURpYWxDb2RlID0gZmFsc2U7XG5cdHNlcGFyYXRlRGlhbENvZGVDbGFzczogc3RyaW5nO1xuXG5cdEBPdXRwdXQoKSByZWFkb25seSBjb3VudHJ5Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDb3VudHJ5PigpO1xuXG5cdHNlbGVjdGVkQ291bnRyeTogQ291bnRyeSA9IHtcblx0XHRhcmVhQ29kZXM6IHVuZGVmaW5lZCxcblx0XHRkaWFsQ29kZTogJycsXG5cdFx0aHRtbElkOiAnJyxcblx0XHRmbGFnQ2xhc3M6ICcnLFxuXHRcdGlzbzI6ICcnLFxuXHRcdG5hbWU6ICcnLFxuXHRcdHBsYWNlSG9sZGVyOiAnJyxcblx0XHRwcmlvcml0eTogMCxcblx0fTtcblxuXHRwaG9uZU51bWJlcjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJyc7XG5cdGFsbENvdW50cmllczogQXJyYXk8Q291bnRyeT4gPSBbXTtcblx0cHJlZmVycmVkQ291bnRyaWVzSW5Ecm9wRG93bjogQXJyYXk8Q291bnRyeT4gPSBbXTtcblx0Ly8gSGFzIHRvIGJlICdhbnknIHRvIHByZXZlbnQgYSBuZWVkIHRvIGluc3RhbGwgQHR5cGVzL2dvb2dsZS1saWJwaG9uZW51bWJlciBieSB0aGUgcGFja2FnZSB1c2VyLi4uXG5cdHBob25lVXRpbDogYW55ID0gbHBuLlBob25lTnVtYmVyVXRpbC5nZXRJbnN0YW5jZSgpO1xuXHRkaXNhYmxlZCA9IGZhbHNlO1xuXHRlcnJvcnM6IEFycmF5PGFueT4gPSBbJ1Bob25lIG51bWJlciBpcyByZXF1aXJlZC4nXTtcblx0Y291bnRyeVNlYXJjaFRleHQgPSAnJztcblxuXHRAVmlld0NoaWxkKCdjb3VudHJ5TGlzdCcpIGNvdW50cnlMaXN0OiBFbGVtZW50UmVmO1xuXG5cdG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXHRwcm9wYWdhdGVDaGFuZ2UgPSAoXzogQ2hhbmdlRGF0YSkgPT4ge307XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb3VudHJ5Q29kZURhdGE6IENvdW50cnlDb2RlKSB7XG5cdFx0Ly8gSWYgdGhpcyBpcyBub3Qgc2V0LCBuZ3gtYm9vdHN0cmFwIHdpbGwgdHJ5IHRvIHVzZSB0aGUgYnMzIENTUyAod2hpY2ggaXMgbm90IHdoYXQgd2UndmUgZW1iZWRkZWQpIGFuZCB3aWxsXG5cdFx0Ly8gQWRkIHRoZSB3cm9uZyBjbGFzc2VzIGFuZCBzdWNoXG5cdFx0c2V0VGhlbWUoJ2JzNCcpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRJU08gPSBjaGFuZ2VzWydzZWxlY3RlZENvdW50cnlJU08nXTtcblx0XHRpZiAoXG5cdFx0XHR0aGlzLmFsbENvdW50cmllcyAmJlxuXHRcdFx0c2VsZWN0ZWRJU08gJiZcblx0XHRcdHNlbGVjdGVkSVNPLmN1cnJlbnRWYWx1ZSAhPT0gc2VsZWN0ZWRJU08ucHJldmlvdXNWYWx1ZVxuXHRcdCkge1xuXHRcdFx0dGhpcy51cGRhdGVTZWxlY3RlZENvdW50cnkoKTtcblx0XHR9XG5cdFx0aWYgKGNoYW5nZXNbJ3ByZWZlcnJlZENvdW50cmllcyddKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVByZWZlcnJlZENvdW50cmllcygpO1xuXHRcdH1cblx0XHR0aGlzLmNoZWNrU2VwYXJhdGVEaWFsQ29kZVN0eWxlKCk7XG5cdH1cblxuXHQvKlxuXHRcdFRoaXMgaXMgYSB3cmFwcGVyIG1ldGhvZCB0byBhdm9pZCBjYWxsaW5nIHRoaXMubmdPbkluaXQoKSBpbiB3cml0ZVZhbHVlKCkuXG5cdFx0UmVmOiBodHRwOi8vY29kZWx5emVyLmNvbS9ydWxlcy9uby1saWZlLWN5Y2xlLWNhbGwvXG5cdCovXG5cdGluaXQoKSB7XG5cdFx0dGhpcy5mZXRjaENvdW50cnlEYXRhKCk7XG5cdFx0aWYgKHRoaXMucHJlZmVycmVkQ291bnRyaWVzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy51cGRhdGVQcmVmZXJyZWRDb3VudHJpZXMoKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMub25seUNvdW50cmllcy5sZW5ndGgpIHtcblx0XHRcdHRoaXMuYWxsQ291bnRyaWVzID0gdGhpcy5hbGxDb3VudHJpZXMuZmlsdGVyKChjKSA9PlxuXHRcdFx0XHR0aGlzLm9ubHlDb3VudHJpZXMuaW5jbHVkZXMoYy5pc28yKVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuc2VsZWN0Rmlyc3RDb3VudHJ5KSB7XG5cdFx0XHRpZiAodGhpcy5wcmVmZXJyZWRDb3VudHJpZXNJbkRyb3BEb3duLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLnNldFNlbGVjdGVkQ291bnRyeSh0aGlzLnByZWZlcnJlZENvdW50cmllc0luRHJvcERvd25bMF0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zZXRTZWxlY3RlZENvdW50cnkodGhpcy5hbGxDb3VudHJpZXNbMF0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnVwZGF0ZVNlbGVjdGVkQ291bnRyeSgpO1xuXHRcdHRoaXMuY2hlY2tTZXBhcmF0ZURpYWxDb2RlU3R5bGUoKTtcblx0fVxuXG5cdHNldFNlbGVjdGVkQ291bnRyeShjb3VudHJ5OiBDb3VudHJ5KSB7XG5cdFx0dGhpcy5zZWxlY3RlZENvdW50cnkgPSBjb3VudHJ5O1xuXHRcdHRoaXMuY291bnRyeUNoYW5nZS5lbWl0KGNvdW50cnkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNlYXJjaCBjb3VudHJ5IGJhc2VkIG9uIGNvdW50cnkgbmFtZSwgaXNvMiwgZGlhbENvZGUgb3IgYWxsIG9mIHRoZW0uXG5cdCAqL1xuXHRwdWJsaWMgc2VhcmNoQ291bnRyeSgpIHtcblx0XHRpZiAoIXRoaXMuY291bnRyeVNlYXJjaFRleHQpIHtcblx0XHRcdHRoaXMuY291bnRyeUxpc3QubmF0aXZlRWxlbWVudFxuXHRcdFx0XHQucXVlcnlTZWxlY3RvcignLml0aV9fY291bnRyeS1saXN0IGxpJylcblx0XHRcdFx0LnNjcm9sbEludG9WaWV3KHtcblx0XHRcdFx0XHRiZWhhdmlvcjogJ3Ntb290aCcsXG5cdFx0XHRcdFx0YmxvY2s6ICduZWFyZXN0Jyxcblx0XHRcdFx0XHRpbmxpbmU6ICduZWFyZXN0Jyxcblx0XHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGNvdW50cnlTZWFyY2hUZXh0TG93ZXIgPSB0aGlzLmNvdW50cnlTZWFyY2hUZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgLy8gQHRzLWlnbm9yZVxuXHRcdGNvbnN0IGNvdW50cnkgPSB0aGlzLmFsbENvdW50cmllcy5maWx0ZXIoKGMpID0+IHtcblx0XHRcdGlmICh0aGlzLnNlYXJjaENvdW50cnlGaWVsZC5pbmRleE9mKFNlYXJjaENvdW50cnlGaWVsZC5BbGwpID4gLTEpIHtcblx0XHRcdFx0Ly8gU2VhcmNoIGluIGFsbCBmaWVsZHNcblx0XHRcdFx0aWYgKGMuaXNvMi50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoY291bnRyeVNlYXJjaFRleHRMb3dlcikpIHtcblx0XHRcdFx0XHRyZXR1cm4gYztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoYy5uYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChjb3VudHJ5U2VhcmNoVGV4dExvd2VyKSkge1xuXHRcdFx0XHRcdHJldHVybiBjO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjLmRpYWxDb2RlLnN0YXJ0c1dpdGgodGhpcy5jb3VudHJ5U2VhcmNoVGV4dCkpIHtcblx0XHRcdFx0XHRyZXR1cm4gYztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gT3Igc2VhcmNoIGJ5IHNwZWNpZmljIFNlYXJjaENvdW50cnlGaWVsZChzKVxuXHRcdFx0XHRpZiAodGhpcy5zZWFyY2hDb3VudHJ5RmllbGQuaW5kZXhPZihTZWFyY2hDb3VudHJ5RmllbGQuSXNvMikgPiAtMSkge1xuXHRcdFx0XHRcdGlmIChjLmlzbzIudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKGNvdW50cnlTZWFyY2hUZXh0TG93ZXIpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gYztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuc2VhcmNoQ291bnRyeUZpZWxkLmluZGV4T2YoU2VhcmNoQ291bnRyeUZpZWxkLk5hbWUpID4gLTEpIHtcblx0XHRcdFx0XHRpZiAoYy5uYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChjb3VudHJ5U2VhcmNoVGV4dExvd2VyKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLnNlYXJjaENvdW50cnlGaWVsZC5pbmRleE9mKFNlYXJjaENvdW50cnlGaWVsZC5EaWFsQ29kZSkgPiAtMSkge1xuXHRcdFx0XHRcdGlmIChjLmRpYWxDb2RlLnN0YXJ0c1dpdGgodGhpcy5jb3VudHJ5U2VhcmNoVGV4dCkpIHtcblx0XHRcdFx0XHRcdHJldHVybiBjO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKGNvdW50cnkubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgZWwgPSB0aGlzLmNvdW50cnlMaXN0Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0JyMnICsgY291bnRyeVswXS5odG1sSWRcblx0XHRcdCk7XG5cdFx0XHRpZiAoZWwpIHtcblx0XHRcdFx0ZWwuc2Nyb2xsSW50b1ZpZXcoe1xuXHRcdFx0XHRcdGJlaGF2aW9yOiAnc21vb3RoJyxcblx0XHRcdFx0XHRibG9jazogJ25lYXJlc3QnLFxuXHRcdFx0XHRcdGlubGluZTogJ25lYXJlc3QnLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLmNoZWNrU2VwYXJhdGVEaWFsQ29kZVN0eWxlKCk7XG5cdH1cblxuXHRwdWJsaWMgb25QaG9uZU51bWJlckNoYW5nZSgpOiB2b2lkIHtcblx0XHRsZXQgY291bnRyeUNvZGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHQvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlcmUgdGhlIHVzZXIgc2V0cyB0aGUgdmFsdWUgcHJvZ3JhbWF0aWNhbGx5IGJhc2VkIG9uIGEgcGVyc2lzdGVkIENoYW5nZURhdGEgb2JqLlxuXHRcdGlmICh0aGlzLnBob25lTnVtYmVyICYmIHR5cGVvZiB0aGlzLnBob25lTnVtYmVyID09PSAnb2JqZWN0Jykge1xuXHRcdFx0Y29uc3QgbnVtYmVyT2JqOiBDaGFuZ2VEYXRhID0gdGhpcy5waG9uZU51bWJlcjtcblx0XHRcdHRoaXMucGhvbmVOdW1iZXIgPSBudW1iZXJPYmoubnVtYmVyO1xuXHRcdFx0Y291bnRyeUNvZGUgPSBudW1iZXJPYmouY291bnRyeUNvZGU7XG5cdFx0fVxuXG5cdFx0dGhpcy52YWx1ZSA9IHRoaXMucGhvbmVOdW1iZXI7XG5cdFx0Y291bnRyeUNvZGUgPSBjb3VudHJ5Q29kZSB8fCB0aGlzLnNlbGVjdGVkQ291bnRyeS5pc28yO1xuXHRcdC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBudW1iZXIgPSB0aGlzLmdldFBhcnNlZE51bWJlcih0aGlzLnBob25lTnVtYmVyLCBjb3VudHJ5Q29kZSk7XG5cblx0XHQvLyBhdXRvIHNlbGVjdCBjb3VudHJ5IGJhc2VkIG9uIHRoZSBleHRlbnNpb24gKGFuZCBhcmVhQ29kZSBpZiBuZWVkZWQpIChlLmcgc2VsZWN0IENhbmFkYSBpZiBudW1iZXIgc3RhcnRzIHdpdGggKzEgNDE2KVxuXHRcdGlmICh0aGlzLmVuYWJsZUF1dG9Db3VudHJ5U2VsZWN0KSB7XG4gICAgICBjb3VudHJ5Q29kZSA9XG5cdFx0XHRcdG51bWJlciAmJiBudW1iZXIuZ2V0Q291bnRyeUNvZGUoKVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHQ/IHRoaXMuZ2V0Q291bnRyeUlzb0NvZGUobnVtYmVyLmdldENvdW50cnlDb2RlKCksIG51bWJlcilcblx0XHRcdFx0XHQ6IHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmlzbzI7XG5cdFx0XHRpZiAoY291bnRyeUNvZGUgJiYgY291bnRyeUNvZGUgIT09IHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmlzbzIpIHtcblx0XHRcdFx0Y29uc3QgbmV3Q291bnRyeSA9IHRoaXMuYWxsQ291bnRyaWVzXG5cdFx0XHRcdFx0LnNvcnQoKGEsIGIpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBhLnByaW9yaXR5IC0gYi5wcmlvcml0eTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5maW5kKChjKSA9PiBjLmlzbzIgPT09IGNvdW50cnlDb2RlKTtcblx0XHRcdFx0aWYgKG5ld0NvdW50cnkpIHtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkQ291bnRyeSA9IG5ld0NvdW50cnk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y291bnRyeUNvZGUgPSBjb3VudHJ5Q29kZSA/IGNvdW50cnlDb2RlIDogdGhpcy5zZWxlY3RlZENvdW50cnkuaXNvMjtcblxuXHRcdHRoaXMuY2hlY2tTZXBhcmF0ZURpYWxDb2RlU3R5bGUoKTtcblxuXHRcdGlmICghdGhpcy52YWx1ZSkge1xuXHRcdFx0Ly8gUmVhc29uOiBhdm9pZCBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTQzNTgxMzMvMTYxNzU5MFxuXHRcdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1udWxsLWtleXdvcmRcblx0XHRcdC8vIEB0cy1pZ25vcmVcbiAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKG51bGwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBpbnRsTm8gPSBudW1iZXJcblx0XHRcdFx0PyB0aGlzLnBob25lVXRpbC5mb3JtYXQobnVtYmVyLCBscG4uUGhvbmVOdW1iZXJGb3JtYXQuSU5URVJOQVRJT05BTClcblx0XHRcdFx0OiAnJztcblxuXHRcdFx0Ly8gcGFyc2UgcGhvbmVOdW1iZXIgaWYgc2VwYXJhdGUgZGlhbCBjb2RlIGlzIG5lZWRlZFxuXHRcdFx0aWYgKHRoaXMuc2VwYXJhdGVEaWFsQ29kZSAmJiBpbnRsTm8pIHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9IHRoaXMucmVtb3ZlRGlhbENvZGUoaW50bE5vKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2Uoe1xuXHRcdFx0XHRudW1iZXI6IHRoaXMudmFsdWUsXG5cdFx0XHRcdGludGVybmF0aW9uYWxOdW1iZXI6IGludGxObyxcblx0XHRcdFx0bmF0aW9uYWxOdW1iZXI6IG51bWJlclxuXHRcdFx0XHRcdD8gdGhpcy5waG9uZVV0aWwuZm9ybWF0KG51bWJlciwgbHBuLlBob25lTnVtYmVyRm9ybWF0Lk5BVElPTkFMKVxuXHRcdFx0XHRcdDogJycsXG5cdFx0XHRcdGUxNjROdW1iZXI6IG51bWJlclxuXHRcdFx0XHRcdD8gdGhpcy5waG9uZVV0aWwuZm9ybWF0KG51bWJlciwgbHBuLlBob25lTnVtYmVyRm9ybWF0LkUxNjQpXG5cdFx0XHRcdFx0OiAnJyxcblx0XHRcdFx0Y291bnRyeUNvZGU6IGNvdW50cnlDb2RlLnRvVXBwZXJDYXNlKCksXG5cdFx0XHRcdGRpYWxDb2RlOiAnKycgKyB0aGlzLnNlbGVjdGVkQ291bnRyeS5kaWFsQ29kZSxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBvbkNvdW50cnlTZWxlY3QoY291bnRyeTogQ291bnRyeSwgZWw6IHsgZm9jdXM6ICgpID0+IHZvaWQ7IH0pOiB2b2lkIHtcblx0XHR0aGlzLnNldFNlbGVjdGVkQ291bnRyeShjb3VudHJ5KTtcblxuXHRcdHRoaXMuY2hlY2tTZXBhcmF0ZURpYWxDb2RlU3R5bGUoKTtcblxuXHRcdGlmICh0aGlzLnBob25lTnVtYmVyICYmIHRoaXMucGhvbmVOdW1iZXIubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy52YWx1ZSA9IHRoaXMucGhvbmVOdW1iZXI7XG5cdFx0XHRjb25zdCBudW1iZXIgPSB0aGlzLmdldFBhcnNlZE51bWJlcihcblx0XHRcdFx0dGhpcy5waG9uZU51bWJlcixcblx0XHRcdFx0dGhpcy5zZWxlY3RlZENvdW50cnkuaXNvMlxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IGludGxObyA9IG51bWJlclxuXHRcdFx0XHQ/IHRoaXMucGhvbmVVdGlsLmZvcm1hdChudW1iZXIsIGxwbi5QaG9uZU51bWJlckZvcm1hdC5JTlRFUk5BVElPTkFMKVxuXHRcdFx0XHQ6ICcnO1xuXHRcdFx0Ly8gcGFyc2UgcGhvbmVOdW1iZXIgaWYgc2VwYXJhdGUgZGlhbCBjb2RlIGlzIG5lZWRlZFxuXHRcdFx0aWYgKHRoaXMuc2VwYXJhdGVEaWFsQ29kZSAmJiBpbnRsTm8pIHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9IHRoaXMucmVtb3ZlRGlhbENvZGUoaW50bE5vKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2Uoe1xuXHRcdFx0XHRudW1iZXI6IHRoaXMudmFsdWUsXG5cdFx0XHRcdGludGVybmF0aW9uYWxOdW1iZXI6IGludGxObyxcblx0XHRcdFx0bmF0aW9uYWxOdW1iZXI6IG51bWJlclxuXHRcdFx0XHRcdD8gdGhpcy5waG9uZVV0aWwuZm9ybWF0KG51bWJlciwgbHBuLlBob25lTnVtYmVyRm9ybWF0Lk5BVElPTkFMKVxuXHRcdFx0XHRcdDogJycsXG5cdFx0XHRcdGUxNjROdW1iZXI6IG51bWJlclxuXHRcdFx0XHRcdD8gdGhpcy5waG9uZVV0aWwuZm9ybWF0KG51bWJlciwgbHBuLlBob25lTnVtYmVyRm9ybWF0LkUxNjQpXG5cdFx0XHRcdFx0OiAnJyxcblx0XHRcdFx0Y291bnRyeUNvZGU6IHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmlzbzIudG9VcHBlckNhc2UoKSxcblx0XHRcdFx0ZGlhbENvZGU6ICcrJyArIHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlLFxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIFJlYXNvbjogYXZvaWQgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU0MzU4MTMzLzE2MTc1OTBcblx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbnVsbC1rZXl3b3JkXG5cdFx0XHQvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZShudWxsKTtcblx0XHR9XG5cblx0XHRlbC5mb2N1cygpO1xuXHR9XG5cblx0cHVibGljIG9uSW5wdXRLZXlQcmVzcyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuXHRcdGNvbnN0IGFsbG93ZWRDaGFycyA9IC9bMC05XFwrXFwtXFwoXFwpXFwgXS87XG5cdFx0Y29uc3QgYWxsb3dlZEN0cmxDaGFycyA9IC9bYXhjdl0vOyAvLyBBbGxvd3MgY29weS1wYXN0aW5nXG5cdFx0Y29uc3QgYWxsb3dlZE90aGVyS2V5cyA9IFtcblx0XHRcdCdBcnJvd0xlZnQnLFxuXHRcdFx0J0Fycm93VXAnLFxuXHRcdFx0J0Fycm93UmlnaHQnLFxuXHRcdFx0J0Fycm93RG93bicsXG5cdFx0XHQnSG9tZScsXG5cdFx0XHQnRW5kJyxcblx0XHRcdCdJbnNlcnQnLFxuXHRcdFx0J0RlbGV0ZScsXG5cdFx0XHQnQmFja3NwYWNlJyxcblx0XHRdO1xuXG5cdFx0aWYgKFxuXHRcdFx0IWFsbG93ZWRDaGFycy50ZXN0KGV2ZW50LmtleSkgJiZcblx0XHRcdCEoZXZlbnQuY3RybEtleSAmJiBhbGxvd2VkQ3RybENoYXJzLnRlc3QoZXZlbnQua2V5KSkgJiZcblx0XHRcdCFhbGxvd2VkT3RoZXJLZXlzLmluY2x1ZGVzKGV2ZW50LmtleSlcblx0XHQpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXHR9XG5cblx0cmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcblx0fVxuXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcblx0XHR0aGlzLm9uVG91Y2hlZCA9IGZuO1xuXHR9XG5cblx0c2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG5cdH1cblxuXHR3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XG5cdFx0aWYgKG9iaiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmluaXQoKTtcblx0XHR9XG5cdFx0dGhpcy5waG9uZU51bWJlciA9IG9iajtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMub25QaG9uZU51bWJlckNoYW5nZSgpO1xuXHRcdH0sIDEpO1xuXHR9XG5cblx0cmVzb2x2ZVBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XG5cdFx0bGV0IHBsYWNlaG9sZGVyID0gJyc7XG5cdFx0aWYgKHRoaXMuY3VzdG9tUGxhY2Vob2xkZXIpIHtcblx0XHRcdHBsYWNlaG9sZGVyID0gdGhpcy5jdXN0b21QbGFjZWhvbGRlcjtcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRDb3VudHJ5LnBsYWNlSG9sZGVyKSB7XG5cdFx0XHRwbGFjZWhvbGRlciA9IHRoaXMuc2VsZWN0ZWRDb3VudHJ5LnBsYWNlSG9sZGVyO1xuXHRcdFx0aWYgKHRoaXMuc2VwYXJhdGVEaWFsQ29kZSkge1xuXHRcdFx0XHRwbGFjZWhvbGRlciA9IHRoaXMucmVtb3ZlRGlhbENvZGUocGxhY2Vob2xkZXIpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcGxhY2Vob2xkZXI7XG5cdH1cblxuXHQvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSGVscGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXHQvKipcblx0ICogUmV0dXJucyBwYXJzZSBQaG9uZU51bWJlciBvYmplY3QuXG5cdCAqIEBwYXJhbSBwaG9uZU51bWJlciBzdHJpbmdcblx0ICogQHBhcmFtIGNvdW50cnlDb2RlIHN0cmluZ1xuXHQgKi9cblx0cHJpdmF0ZSBnZXRQYXJzZWROdW1iZXIoXG5cdFx0cGhvbmVOdW1iZXI6IHN0cmluZyxcblx0XHRjb3VudHJ5Q29kZTogc3RyaW5nXG5cdCk6IGxwbi5QaG9uZU51bWJlciB7XG5cdFx0bGV0IG51bWJlcjogbHBuLlBob25lTnVtYmVyO1xuXHRcdHRyeSB7XG5cdFx0XHRudW1iZXIgPSB0aGlzLnBob25lVXRpbC5wYXJzZShwaG9uZU51bWJlciwgY291bnRyeUNvZGUudG9VcHBlckNhc2UoKSk7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHQvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIG51bWJlcjtcblx0fVxuXG5cdC8qKlxuXHQgKiBBZGp1c3RzIGlucHV0IGFsaWdubWVudCBiYXNlZCBvbiB0aGUgZGlhbCBjb2RlIHByZXNlbnRhdGlvbiBzdHlsZS5cblx0ICovXG5cdHByaXZhdGUgY2hlY2tTZXBhcmF0ZURpYWxDb2RlU3R5bGUoKSB7XG5cdFx0aWYgKHRoaXMuc2VwYXJhdGVEaWFsQ29kZSAmJiB0aGlzLnNlbGVjdGVkQ291bnRyeSkge1xuXHRcdFx0Y29uc3QgY250cnlDZCA9IHRoaXMuc2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlO1xuXHRcdFx0dGhpcy5zZXBhcmF0ZURpYWxDb2RlQ2xhc3MgPVxuXHRcdFx0XHQnc2VwYXJhdGUtZGlhbC1jb2RlIGl0aS1zZGMtJyArIChjbnRyeUNkLmxlbmd0aCArIDEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNlcGFyYXRlRGlhbENvZGVDbGFzcyA9ICcnO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDbGVhbnMgZGlhbGNvZGUgZnJvbSBwaG9uZSBudW1iZXIgc3RyaW5nLlxuXHQgKiBAcGFyYW0gcGhvbmVOdW1iZXIgc3RyaW5nXG5cdCAqL1xuXHRwcml2YXRlIHJlbW92ZURpYWxDb2RlKHBob25lTnVtYmVyOiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdGNvbnN0IG51bWJlciA9IHRoaXMuZ2V0UGFyc2VkTnVtYmVyKHBob25lTnVtYmVyLCB0aGlzLnNlbGVjdGVkQ291bnRyeS5pc28yKTtcblx0XHRwaG9uZU51bWJlciA9IHRoaXMucGhvbmVVdGlsLmZvcm1hdChcblx0XHRcdG51bWJlcixcblx0XHRcdGxwbi5QaG9uZU51bWJlckZvcm1hdFt0aGlzLm51bWJlckZvcm1hdF1cblx0XHQpO1xuXHRcdGlmIChwaG9uZU51bWJlci5zdGFydHNXaXRoKCcrJykgJiYgdGhpcy5zZXBhcmF0ZURpYWxDb2RlKSB7XG5cdFx0XHRwaG9uZU51bWJlciA9IHBob25lTnVtYmVyLnN1YnN0cihwaG9uZU51bWJlci5pbmRleE9mKCcgJykgKyAxKTtcblx0XHR9XG5cdFx0cmV0dXJuIHBob25lTnVtYmVyO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNpZnRzIHRocm91Z2ggYWxsIGNvdW50cmllcyBhbmQgcmV0dXJucyBpc28gY29kZSBvZiB0aGUgcHJpbWFyeSBjb3VudHJ5XG5cdCAqIGJhc2VkIG9uIHRoZSBudW1iZXIgcHJvdmlkZWQuXG5cdCAqIEBwYXJhbSBjb3VudHJ5Q29kZSBjb3VudHJ5IGNvZGUgaW4gbnVtYmVyIGZvcm1hdFxuXHQgKiBAcGFyYW0gbnVtYmVyIFBob25lTnVtYmVyIG9iamVjdFxuXHQgKi9cblx0cHJpdmF0ZSBnZXRDb3VudHJ5SXNvQ29kZShcblx0XHRjb3VudHJ5Q29kZTogbnVtYmVyLFxuXHRcdG51bWJlcjogbHBuLlBob25lTnVtYmVyXG5cdCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cdFx0Ly8gV2lsbCB1c2UgdGhpcyB0byBtYXRjaCBhcmVhIGNvZGUgZnJvbSB0aGUgZmlyc3QgbnVtYmVyc1xuXHRcdC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCByYXdOdW1iZXIgPSBudW1iZXJbJ3ZhbHVlc18nXVsnMiddLnRvU3RyaW5nKCk7XG5cdFx0Ly8gTGlzdCBvZiBhbGwgY291bnRyaWVzIHdpdGggY291bnRyeUNvZGUgKGNhbiBiZSBtb3JlIHRoYW4gb25lLiBlLnguIFVTLCBDQSwgRE8sIFBSIGFsbCBoYXZlICsxIGNvdW50cnlDb2RlKVxuXHRcdGNvbnN0IGNvdW50cmllcyA9IHRoaXMuYWxsQ291bnRyaWVzLmZpbHRlcihcblx0XHRcdChjKSA9PiBjLmRpYWxDb2RlID09PSBjb3VudHJ5Q29kZS50b1N0cmluZygpXG5cdFx0KTtcblx0XHQvLyBNYWluIGNvdW50cnkgaXMgdGhlIGNvdW50cnksIHdoaWNoIGhhcyBubyBhcmVhQ29kZXMgc3BlY2lmaWVkIGluIGNvdW50cnktY29kZS50cyBmaWxlLlxuXHRcdGNvbnN0IG1haW5Db3VudHJ5ID0gY291bnRyaWVzLmZpbmQoKGMpID0+IGMuYXJlYUNvZGVzID09PSB1bmRlZmluZWQpO1xuXHRcdC8vIFNlY29uZGFyeSBjb3VudHJpZXMgYXJlIGFsbCBjb3VudHJpZXMsIHdoaWNoIGhhdmUgYXJlYUNvZGVzIHNwZWNpZmllZCBpbiBjb3VudHJ5LWNvZGUudHMgZmlsZS5cblx0XHRjb25zdCBzZWNvbmRhcnlDb3VudHJpZXMgPSBjb3VudHJpZXMuZmlsdGVyKFxuXHRcdFx0KGMpID0+IGMuYXJlYUNvZGVzICE9PSB1bmRlZmluZWRcblx0XHQpO1xuXHRcdGxldCBtYXRjaGVkQ291bnRyeSA9IG1haW5Db3VudHJ5ID8gbWFpbkNvdW50cnkuaXNvMiA6IHVuZGVmaW5lZDtcblxuXHRcdC8qXG5cdFx0XHRJdGVyYXRlIG92ZXIgZWFjaCBzZWNvbmRhcnkgY291bnRyeSBhbmQgY2hlY2sgaWYgbmF0aW9uYWxOdW1iZXIgc3RhcnRzIHdpdGggYW55IG9mIGFyZWFDb2RlcyBhdmFpbGFibGUuXG5cdFx0XHRJZiBubyBtYXRjaGVzIGZvdW5kLCBmYWxsYmFjayB0byB0aGUgbWFpbiBjb3VudHJ5LlxuXHRcdCovXG5cdFx0c2Vjb25kYXJ5Q291bnRyaWVzLmZvckVhY2goKGNvdW50cnkpID0+IHtcblx0XHRcdC8vIEB0cy1pZ25vcmVcbiAgICAgIGNvdW50cnkuYXJlYUNvZGVzLmZvckVhY2goKGFyZWFDb2RlKSA9PiB7XG5cdFx0XHRcdGlmIChyYXdOdW1iZXIuc3RhcnRzV2l0aChhcmVhQ29kZSkpIHtcblx0XHRcdFx0XHRtYXRjaGVkQ291bnRyeSA9IGNvdW50cnkuaXNvMjtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gbWF0Y2hlZENvdW50cnk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBmb3JtYXR0ZWQgZXhhbXBsZSBwaG9uZSBudW1iZXIgZnJvbSBwaG9uZVV0aWwuXG5cdCAqIEBwYXJhbSBjb3VudHJ5Q29kZSBzdHJpbmdcblx0ICovXG5cdHByb3RlY3RlZCBnZXRQaG9uZU51bWJlclBsYWNlSG9sZGVyKGNvdW50cnlDb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5waG9uZVV0aWwuZm9ybWF0KFxuXHRcdFx0XHR0aGlzLnBob25lVXRpbC5nZXRFeGFtcGxlTnVtYmVyKGNvdW50cnlDb2RlKSxcblx0XHRcdFx0bHBuLlBob25lTnVtYmVyRm9ybWF0W3RoaXMubnVtYmVyRm9ybWF0XVxuXHRcdFx0KTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHQvLyBAdHMtaWdub3JlXG4gICAgICByZXR1cm4gZTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ2xlYXJpbmcgdGhlIGxpc3QgdG8gYXZvaWQgZHVwbGljYXRlcyAoaHR0cHM6Ly9naXRodWIuY29tL3dlYmNhdDEyMzQ1L25neC1pbnRsLXRlbC1pbnB1dC9pc3N1ZXMvMjQ4KVxuXHQgKi9cblx0cHJvdGVjdGVkIGZldGNoQ291bnRyeURhdGEoKTogdm9pZCB7XG5cdFx0dGhpcy5hbGxDb3VudHJpZXMgPSBbXTtcblxuXHRcdHRoaXMuY291bnRyeUNvZGVEYXRhLmFsbENvdW50cmllcy5mb3JFYWNoKChjKSA9PiB7XG5cdFx0XHRjb25zdCBjb3VudHJ5OiBDb3VudHJ5ID0ge1xuXHRcdFx0XHRuYW1lOiBjWzBdLnRvU3RyaW5nKCksXG5cdFx0XHRcdGlzbzI6IGNbMV0udG9TdHJpbmcoKSxcblx0XHRcdFx0ZGlhbENvZGU6IGNbMl0udG9TdHJpbmcoKSxcblx0XHRcdFx0cHJpb3JpdHk6ICtjWzNdIHx8IDAsXG5cdFx0XHRcdGFyZWFDb2RlczogKGNbNF0gYXMgc3RyaW5nW10pIHx8IHVuZGVmaW5lZCxcblx0XHRcdFx0aHRtbElkOiBgaXRpLTBfX2l0ZW0tJHtjWzFdLnRvU3RyaW5nKCl9YCxcblx0XHRcdFx0ZmxhZ0NsYXNzOiBgaXRpX18ke2NbMV0udG9TdHJpbmcoKS50b0xvY2FsZUxvd2VyQ2FzZSgpfWAsXG5cdFx0XHRcdHBsYWNlSG9sZGVyOiAnJyxcblx0XHRcdH07XG5cblx0XHRcdGlmICh0aGlzLmVuYWJsZVBsYWNlaG9sZGVyKSB7XG5cdFx0XHRcdGNvdW50cnkucGxhY2VIb2xkZXIgPSB0aGlzLmdldFBob25lTnVtYmVyUGxhY2VIb2xkZXIoXG5cdFx0XHRcdFx0Y291bnRyeS5pc28yLnRvVXBwZXJDYXNlKClcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5hbGxDb3VudHJpZXMucHVzaChjb3VudHJ5KTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQb3B1bGF0ZXMgcHJlZmVycmVkQ291bnRyaWVzSW5Ecm9wRG93biB3aXRoIHByZWZmZXJyZWQgY291bnRyaWVzLlxuXHQgKi9cblx0cHJpdmF0ZSB1cGRhdGVQcmVmZXJyZWRDb3VudHJpZXMoKSB7XG5cdFx0aWYgKHRoaXMucHJlZmVycmVkQ291bnRyaWVzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5wcmVmZXJyZWRDb3VudHJpZXNJbkRyb3BEb3duID0gW107XG5cdFx0XHR0aGlzLnByZWZlcnJlZENvdW50cmllcy5mb3JFYWNoKChpc28yKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHByZWZlcnJlZENvdW50cnkgPSB0aGlzLmFsbENvdW50cmllcy5maWx0ZXIoKGMpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gYy5pc28yID09PSBpc28yO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0aGlzLnByZWZlcnJlZENvdW50cmllc0luRHJvcERvd24ucHVzaChwcmVmZXJyZWRDb3VudHJ5WzBdKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIHNlbGVjdGVkQ291bnRyeS5cblx0ICovXG5cdHByaXZhdGUgdXBkYXRlU2VsZWN0ZWRDb3VudHJ5KCkge1xuXHRcdGlmICh0aGlzLnNlbGVjdGVkQ291bnRyeUlTTykge1xuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuICAgICAgdGhpcy5zZWxlY3RlZENvdW50cnkgPSB0aGlzLmFsbENvdW50cmllcy5maW5kKChjKSA9PiB7XG5cdFx0XHRcdHJldHVybiBjLmlzbzIudG9Mb3dlckNhc2UoKSA9PT0gdGhpcy5zZWxlY3RlZENvdW50cnlJU08udG9Mb3dlckNhc2UoKTtcblx0XHRcdH0pO1xuXHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWRDb3VudHJ5KSB7XG5cdFx0XHRcdGlmICh0aGlzLnBob25lTnVtYmVyKSB7XG5cdFx0XHRcdFx0dGhpcy5vblBob25lTnVtYmVyQ2hhbmdlKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gUmVhc29uOiBhdm9pZCBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTQzNTgxMzMvMTYxNzU5MFxuXHRcdFx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbnVsbC1rZXl3b3JkXG5cdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuICAgICAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKG51bGwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCI8ZGl2IGNsYXNzPVwiaXRpIGl0aS0tYWxsb3ctZHJvcGRvd25cIlxuXHRbbmdDbGFzc109XCJzZXBhcmF0ZURpYWxDb2RlQ2xhc3NcIj5cblx0PGRpdiBjbGFzcz1cIml0aV9fZmxhZy1jb250YWluZXJcIlxuXHRcdGRyb3Bkb3duXG5cdFx0W25nQ2xhc3NdPVwieydkaXNhYmxlZCc6IGRpc2FibGVkfVwiXG5cdFx0W2lzRGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiaXRpX19zZWxlY3RlZC1mbGFnIGRyb3Bkb3duLXRvZ2dsZVwiXG5cdFx0XHRkcm9wZG93blRvZ2dsZT5cblx0XHRcdDxkaXYgY2xhc3M9XCJpdGlfX2ZsYWdcIlxuXHRcdFx0XHRbbmdDbGFzc109XCJzZWxlY3RlZENvdW50cnkuZmxhZ0NsYXNzIHx8ICcnXCI+PC9kaXY+XG5cdFx0XHQ8ZGl2ICpuZ0lmPVwic2VwYXJhdGVEaWFsQ29kZVwiXG5cdFx0XHRcdGNsYXNzPVwic2VsZWN0ZWQtZGlhbC1jb2RlXCI+K3t7c2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlfX08L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJpdGlfX2Fycm93XCI+PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiAqZHJvcGRvd25NZW51XG5cdFx0XHRjbGFzcz1cImRyb3Bkb3duLW1lbnUgY291bnRyeS1kcm9wZG93blwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInNlYXJjaC1jb250YWluZXJcIlxuXHRcdFx0XHQqbmdJZj1cInNlYXJjaENvdW50cnlGbGFnICYmIHNlYXJjaENvdW50cnlGaWVsZFwiPlxuXHRcdFx0XHQ8aW5wdXQgaWQ9XCJjb3VudHJ5LXNlYXJjaC1ib3hcIlxuXHRcdFx0XHRcdFsobmdNb2RlbCldPVwiY291bnRyeVNlYXJjaFRleHRcIlxuXHRcdFx0XHRcdChrZXl1cCk9XCJzZWFyY2hDb3VudHJ5KClcIlxuXHRcdFx0XHRcdChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxuXHRcdFx0XHRcdFtwbGFjZWhvbGRlcl09XCJzZWFyY2hDb3VudHJ5UGxhY2Vob2xkZXJcIlxuXHRcdFx0XHRcdGF1dG9mb2N1cz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHVsIGNsYXNzPVwiaXRpX19jb3VudHJ5LWxpc3RcIlxuXHRcdFx0XHQjY291bnRyeUxpc3Q+XG5cdFx0XHRcdDxsaSBjbGFzcz1cIml0aV9fY291bnRyeSBpdGlfX3ByZWZlcnJlZFwiXG5cdFx0XHRcdFx0Km5nRm9yPVwibGV0IGNvdW50cnkgb2YgcHJlZmVycmVkQ291bnRyaWVzSW5Ecm9wRG93blwiXG5cdFx0XHRcdFx0KGNsaWNrKT1cIm9uQ291bnRyeVNlbGVjdChjb3VudHJ5LCBmb2N1c2FibGUpXCJcblx0XHRcdFx0XHRbaWRdPVwiY291bnRyeS5odG1sSWQrJy1wcmVmZXJyZWQnXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIml0aV9fZmxhZy1ib3hcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpdGlfX2ZsYWdcIlxuXHRcdFx0XHRcdFx0XHRbbmdDbGFzc109XCJjb3VudHJ5LmZsYWdDbGFzc1wiPjwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiaXRpX19jb3VudHJ5LW5hbWVcIj57e2NvdW50cnkubmFtZX19PC9zcGFuPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiaXRpX19kaWFsLWNvZGVcIj4re3tjb3VudHJ5LmRpYWxDb2RlfX08L3NwYW4+XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHRcdDxsaSBjbGFzcz1cIml0aV9fZGl2aWRlclwiXG5cdFx0XHRcdFx0Km5nSWY9XCJwcmVmZXJyZWRDb3VudHJpZXNJbkRyb3BEb3duPy5sZW5ndGhcIj48L2xpPlxuXHRcdFx0XHQ8bGkgY2xhc3M9XCJpdGlfX2NvdW50cnkgaXRpX19zdGFuZGFyZFwiXG5cdFx0XHRcdFx0Km5nRm9yPVwibGV0IGNvdW50cnkgb2YgYWxsQ291bnRyaWVzXCJcblx0XHRcdFx0XHQoY2xpY2spPVwib25Db3VudHJ5U2VsZWN0KGNvdW50cnksIGZvY3VzYWJsZSlcIlxuXHRcdFx0XHRcdFtpZF09XCJjb3VudHJ5Lmh0bWxJZFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpdGlfX2ZsYWctYm94XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaXRpX19mbGFnXCJcblx0XHRcdFx0XHRcdFx0W25nQ2xhc3NdPVwiY291bnRyeS5mbGFnQ2xhc3NcIj48L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cIml0aV9fY291bnRyeS1uYW1lXCI+e3tjb3VudHJ5Lm5hbWV9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cIml0aV9fZGlhbC1jb2RlXCI+K3t7Y291bnRyeS5kaWFsQ29kZX19PC9zcGFuPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0PC91bD5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG5cdDxpbnB1dCB0eXBlPVwidGVsXCJcblx0XHRbaWRdPVwiaW5wdXRJZFwiXG5cdFx0YXV0b2NvbXBsZXRlPVwib2ZmXCJcblx0XHRbbmdDbGFzc109XCJjc3NDbGFzc1wiXG5cdFx0KGJsdXIpPVwib25Ub3VjaGVkKClcIlxuXHRcdChrZXlwcmVzcyk9XCJvbklucHV0S2V5UHJlc3MoJGV2ZW50KVwiXG5cdFx0WyhuZ01vZGVsKV09XCJwaG9uZU51bWJlclwiXG5cdFx0KG5nTW9kZWxDaGFuZ2UpPVwib25QaG9uZU51bWJlckNoYW5nZSgpXCJcblx0XHRbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuXHRcdFtwbGFjZWhvbGRlcl09XCJyZXNvbHZlUGxhY2Vob2xkZXIoKVwiXG5cdFx0W2F0dHIubWF4TGVuZ3RoXT1cIm1heExlbmd0aFwiXG5cdFx0W2F0dHIudmFsaWRhdGlvbl09XCJwaG9uZVZhbGlkYXRpb25cIlxuXHRcdCNmb2N1c2FibGU+XG48L2Rpdj5cbiJdfQ==