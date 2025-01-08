import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { catchError, map, mergeMap, of } from 'rxjs';
const { VITE_API_URL } = import.meta.env;

import {
  fetchServicesStart,
  fetchServicesSuccess,
  fetchServicesFailure,
  fetchServiceDetailsStart,
  fetchServiceDetailsSuccess,
  fetchServiceDetailsFailure,
} from './servicesSlice';

export const fetchServicesEpic = (action$) =>
  action$.pipe(
    ofType(fetchServicesStart.type),
    mergeMap(() =>
      ajax.getJSON(`${VITE_API_URL}/api/services`).pipe(
        map((response) => fetchServicesSuccess(response)),
        catchError((error) => of(fetchServicesFailure(error.message)))
      )
    )
  );

export const fetchServiceDetailsEpic = (action$) =>
  action$.pipe(
    ofType(fetchServiceDetailsStart.type),
    mergeMap((action) =>
      ajax.getJSON(`${VITE_API_URL}/api/services/${action.payload}`).pipe(
        map((response) => fetchServiceDetailsSuccess(response)),
        catchError((error) => of(fetchServiceDetailsFailure(error.message)))
      )
    )
  );
