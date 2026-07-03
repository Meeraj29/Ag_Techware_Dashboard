import { configureStore } from "@reduxjs/toolkit";
import vendorReducer from "./features/vendorSlice";
import transportationReducer from "./features/transportationSlice";
import trackingReducer from "./features/trackingSlice";
import vgmReducer from "./features/vgmSlice";
import financeReducer from "./features/financeSlice";

export const store = configureStore({
  reducer: {
    vendor: vendorReducer,
    transportation: transportationReducer,
    tracking: trackingReducer,
    vgm: vgmReducer,
    finance: financeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
