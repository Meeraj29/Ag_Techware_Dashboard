import { configureStore } from "@reduxjs/toolkit";
import vendorReducer from "./features/vendor/vendorSlice";
import vendorFormReducer from "./features/vendor/vendorFormSlice";
import salesReducer from "./features/sales/salesSlice";
import jobsReducer from "./features/jobs/jobsSlice";
import clearanceReducer from "./features/clearance/clearanceSlice";

export const store = configureStore({
  reducer: {
    vendor: vendorReducer,
    vendorForm: vendorFormReducer,
    sales: salesReducer,
    jobs: jobsReducer,
    clearance: clearanceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
