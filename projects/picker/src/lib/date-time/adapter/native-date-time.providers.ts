// native-date-time.providers.ts
import {
    EnvironmentProviders,
    importProvidersFrom,
    makeEnvironmentProviders,
} from '@angular/core';
import { PlatformModule } from '@angular/cdk/platform';
import { DateTimeAdapter } from './date-time-adapter.class';
import { NativeDateTimeAdapter } from './native-date-time-adapter.class';
import { OWL_DATE_TIME_FORMATS } from './date-time-format.class';
import { OWL_NATIVE_DATE_TIME_FORMATS } from './native-date-time-format.class';

export function provideNativeDateTimeAdapter(): EnvironmentProviders {
    return makeEnvironmentProviders([
        importProvidersFrom(PlatformModule),
        { provide: DateTimeAdapter, useClass: NativeDateTimeAdapter },
    ]);
}

export function provideOwlNativeDateTimeFormats(): EnvironmentProviders {
    return makeEnvironmentProviders([
        provideNativeDateTimeAdapter(),
        { provide: OWL_DATE_TIME_FORMATS, useValue: OWL_NATIVE_DATE_TIME_FORMATS },
    ]);
}
