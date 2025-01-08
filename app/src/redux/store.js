import { configureStore } from '@reduxjs/toolkit';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import servicesReducer from './servicesSlice';
import { fetchServicesEpic, fetchServiceDetailsEpic } from './epics';

const epicMiddleware = createEpicMiddleware();
const rootEpic = combineEpics(fetchServicesEpic, fetchServiceDetailsEpic);

const store = configureStore({
  reducer: {
    services: servicesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);

export default store;
