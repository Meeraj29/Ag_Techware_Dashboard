import { configureStore } from "@reduxjs/toolkit";
import vendorReducer from "./features/vendor/vendorSlice";
import vendorFormReducer from "./features/vendor/vendorFormSlice";
import salesReducer from "./features/sales/salesSlice";
import jobsReducer from "./features/jobs/jobsSlice";
import clearanceReducer from "./features/clearance/clearanceSlice";
import transportationReducer from "./features/transportationSlice";
import trackingReducer from "./features/trackingSlice";
import vgmReducer from "./features/vgmSlice";
import financeReducer from "./features/financeSlice";

export const store = configureStore({
  reducer: {
    vendor: vendorReducer,
    vendorForm: vendorFormReducer,
    sales: salesReducer,
    jobs: jobsReducer,
    clearance: clearanceReducer,
    transportation: transportationReducer,
    tracking: trackingReducer,
    vgm: vgmReducer,
    finance: financeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
