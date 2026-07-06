import { configureStore } from "@reduxjs/toolkit";
import vendorReducer from "./features/vendorSlice";
import creditControlReducer from "./features/creditControlSlice";
import reportsReducer from "./features/reportsSlice";
import customersReducer from "./features/customersSlice";
import customerDetailReducer from "./features/customerDetailSlice";
import fleetReducer from "./features/fleetSlice";

export const store = configureStore({
  reducer: {
    vendor: vendorReducer,
    creditControl: creditControlReducer,
    reports: reportsReducer,
    customers: customersReducer,
    customerDetail: customerDetailReducer,
    fleet: fleetReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

