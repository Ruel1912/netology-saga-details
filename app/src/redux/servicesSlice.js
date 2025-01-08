import { createSlice } from '@reduxjs/toolkit';

const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    list: [],
    details: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchServicesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchServicesSuccess(state, action) {
      state.loading = false;
      state.list = action.payload;
    },
    fetchServicesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchServiceDetailsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchServiceDetailsSuccess(state, action) {
      state.loading = false;
      state.details = action.payload;
    },
    fetchServiceDetailsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchServicesStart,
  fetchServicesSuccess,
  fetchServicesFailure,
  fetchServiceDetailsStart,
  fetchServiceDetailsSuccess,
  fetchServiceDetailsFailure,
} = servicesSlice.actions;

export default servicesSlice.reducer;
