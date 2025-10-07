// date-time.providers.ts
import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { OwlDateTimeIntl } from './date-time-picker-intl.service';
import { OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER } from './date-time-picker.component';
import { optionsProviders } from './options-provider';

export function provideOwlDateTime(): EnvironmentProviders {
    return makeEnvironmentProviders([
        OwlDateTimeIntl,
        OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER,
        ...optionsProviders,
    ]);
}
