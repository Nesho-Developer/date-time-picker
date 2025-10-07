/**
 * unix-timestamp-date-time.providers.ts
 */

import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { PlatformModule } from '@angular/cdk/platform';
import { importProvidersFrom } from '@angular/core';
import { DateTimeAdapter } from '../date-time-adapter.class';
import { OWL_DATE_TIME_FORMATS } from '../date-time-format.class';
import { UnixTimestampDateTimeAdapter } from './unix-timestamp-date-time-adapter.class';
import { OWL_UNIX_TIMESTAMP_DATE_TIME_FORMATS } from './unix-timestamp-date-time-format.class';

/**
 * 👉 Replacement for UnixTimestampDateTimeModule
 */
export function provideUnixTimestampDateTimeAdapter(): EnvironmentProviders {
    return makeEnvironmentProviders([
        importProvidersFrom(PlatformModule),
        { provide: DateTimeAdapter, useClass: UnixTimestampDateTimeAdapter },
    ]);
}

/**
 * 👉 Replacement for OwlUnixTimestampDateTimeModule
 * (includes format providers)
 */
export function provideOwlUnixTimestampDateTime(): EnvironmentProviders {
    return makeEnvironmentProviders([
        provideUnixTimestampDateTimeAdapter(),
        { provide: OWL_DATE_TIME_FORMATS, useValue: OWL_UNIX_TIMESTAMP_DATE_TIME_FORMATS },
    ]);
}
