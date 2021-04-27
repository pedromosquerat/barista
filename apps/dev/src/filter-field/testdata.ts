/**
 * @license
 * Copyright 2021 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// tslint:disable no-lifecycle-call no-use-before-declare no-magic-numbers
// tslint:disable no-any max-file-line-count no-unbound-method use-component-selector
import { Validators } from '@angular/forms';

export const TEST_DATA = {
  autocomplete: [
    {
      name: 'DE',
      defaultSearch: true,
      suggestions: [{ name: 'Berlin' }, { name: 'Bremen' }, { name: 'Munich' }],
      unique: true,
      validators: [
        {
          validatorFn: Validators.minLength(2),
          error: 'Country code needs at least 2 characters',
        },
      ],
    },
    {
      name: 'AUT',
      distinct: true,
      autocomplete: [
        { name: 'Vienna' },
        { name: 'Linz' },
        {
          name: 'custom',
          suggestions: [],
        },
      ],
    },
    {
      name: 'US',
      autocomplete: [
        { name: 'Miami' },
        { name: 'Los Angeles' },
        {
          name: 'custom',
          suggestions: [],
        },
      ],
    },
    {
      name: 'DE (async)',
      async: true,
      distinct: false,
      autocomplete: [{ name: 'Berlin' }],
    },
    {
      name: 'DE (async, distinct)',
      async: true,
      distinct: true,
      autocomplete: [],
    },
    {
      name: 'DE (async, freeText)',
      async: true,
      unique: true,
      suggestions: [],
    },
    {
      name: 'CH (async, partial)',
      async: true,
      autocomplete: [],
    },
    {
      name: 'Different Country',
      suggestions: [{ name: 'IT' }, { name: 'ES' }, { name: 'UK' }],
      validators: [
        { validatorFn: Validators.required, error: 'is required' },
        {
          validatorFn: Validators.minLength(2),
          error: 'Country code needs at least 2 characters',
        },
      ],
    },
    {
      name: 'Requests per minute',
      range: {
        operators: {
          range: true,
          equal: true,
          greaterThanEqual: true,
          lessThanEqual: true,
        },
        unit: 's',
      },
    },
  ],
};

export const TEST_DATA_ASYNC = {
  name: 'DE (async)',
  autocomplete: [
    { name: 'Berlin' },
    {
      name: 'München',
      suggestions: [],
      validators: [{ validatorFn: Validators.required, error: 'is required' }],
    },
  ],
};

export const TEST_DATA_ASYNC_2 = {
  name: 'DE (async, distinct)',
  distinct: true,
  autocomplete: [
    { name: 'Berlin' },
    {
      name: 'München',
      suggestions: [],
      validators: [{ validatorFn: Validators.required, error: 'is required' }],
    },
  ],
};

export const TEST_DATA_ASYNC_FREETEXT = {
  name: 'DE (async, freeText)',
  unique: true,
  suggestions: [{ name: 'Berlin' }, { name: 'München' }],
};

export const MULTI_SELECT_DATA_ASYNC = {
  name: 'Years (async)',
  multiOptions: [
    {
      name: '3rd party cookies - 1610626939913',
    },
    {
      name: 'AndroidTestApp',
    },
    {
      name:
        'APM-184653 - with autologin action threshold - 1608230811039 APM-184653 - with autologin action threshold - 1608230811039 APM-184653 - with autologin action threshold - 1608230811039 APM-184653 - with autologin action threshold - 1608230811039 APM-184653 - with autologin action threshold - 1608230811039',
    },
    {
      name: 'APM-254740 - 1605696271273',
    },
    {
      name: 'APM-254740 - direct - 1612517317818',
    },
    {
      name: 'APM-277913 - 1611658251976',
    },
    {
      name: 'APM-279550 - 1612354388653',
    },
    {
      name: 'APM-279589 - new debugger - 100procentczekolady - 1616588927306',
    },
    {
      name: 'APM-279589 - new debugger - apple - 1',
    },
    {
      name: 'APM-279589 - new debugger - ark intel - 1616600925866',
    },
    {
      name: 'APM-279589 - new debugger - ikea - 1',
    },
    {
      name: 'APM-279589 - new debugger - sojuz - 1',
    },
    {
      name: 'APM-279589 - new debugger - xkom - 1',
    },
    {
      name: 'APM-279589 - new debugger - zalando - 1616600022292',
    },
    {
      name: 'APM-282226 hiding chat ksojecki - 1613381915187',
    },
    {
      name: 'APM-288754 - hcm41.sapsf.com/login - 1616594626875',
    },
    {
      name: 'Demo-dev login - 1613995405030',
    },
    {
      name:
        'dre57697.sprint.dynatracelabs.com - browser monitor - analysis - 1614850503847',
    },
    {
      name: 'easyTravel AMP',
    },
    {
      name: 'easyTravel Demo',
    },
    {
      name: 'easytravel-ang.lab.dynatrace.org',
    },
    {
      name: 'emdmillipore.com/US/en - 1615459597007',
    },
    {
      name: 'fid test (1) - 1610109297621',
    },
    {
      name: 'fid test - 1610973940296',
    },
    {
      name: 'File downloader - 1598266277989',
    },
    {
      name: 'google.com - 1',
    },
    {
      name: 'JavaScript Credential Demo - 1613383934128',
    },
    {
      name: 'KS APM-260255 PNC repro - 1602080009460',
    },
    {
      name: 'local-pub-bm-vuc-api - 1614341839085',
    },
    {
      name: 'malcolm dynatrace.com clickpath - 1',
    },
    {
      name: 'Multiple Logins - 1608230811146',
    },
    {
      name: 'Multiple user actions - 1614085969845',
    },
    {
      name:
        'Multiple user actions - Test interaction with agent - 1607007253216',
    },
    {
      name: 'MV3 - clickpath and form submit on random page - 1616587727078',
    },
    {
      name: 'MV3 - clickpath with keystrokes - 1',
    },
    {
      name: 'My web application',
    },
    {
      name: 'ONE-53745 - 1611750090409',
    },
    {
      name: 'PM BM 25.01 - 1',
    },
    {
      name: 'product availability - 1603961446987',
    },
    {
      name: 'random httpstat.us - 1610627659892',
    },
    {
      name: 'Simulate Return Key - 1598265813416',
    },
    {
      name: 'sonyexpressnet.techdata.com/ - 1616663057704',
    },
    {
      name: 'SUP-65193 - 1612182839669',
    },
    {
      name: 'test local outage after disabling - 1610377772669',
    },
    {
      name: 'test xhr call - 1610626497672',
    },
    {
      name: 'the-internet.herokuapp.com/redirector - 1',
    },
    {
      name: 'time.is - 1610448322056',
    },
    {
      name: 'VocTrainer - 1574248367524',
    },
    {
      name: 'vodacom.co.za/ - 1615206647196',
    },
    {
      name: 'wp - 1608289097777',
    },
    {
      name: 'XHR Requests for Suggestions - 1603754077401',
    },
  ],
};

export const MULTI_SELECT_DATA_ASYNC_PARTIAL = {
  name: 'CH (async, partial)',
  autocomplete: [
    { name: 'Zürich' },
    { name: 'Genf' },
    { name: 'Basel' },
    { name: 'Bern' },
  ],
  partial: true,
};

export const TEST_DATA_PARTIAL = {
  name: 'CH (async, partial)',
  autocomplete: [
    { name: 'Zürich' },
    { name: 'Genf' },
    { name: 'Basel' },
    { name: 'Bern' },
  ],
  partial: true,
};

export const TEST_DATA_PARTIAL_2 = {
  name: 'CH (async, partial)',
  autocomplete: [
    { name: 'Zug' },
    { name: 'Schaffhausen' },
    { name: 'Luzern' },
    { name: 'St. Gallen' },
  ],
  partial: true,
};
