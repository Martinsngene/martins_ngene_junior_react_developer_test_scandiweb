import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counter";

export const store = configureStore({
  // This will automatically call combine Reducers so that we'll end up with a state.counter field in our state
  reducer: {
    counter: counterReducer,
  },
});

export const AppDispatch = store.dispatch;

export const RootState = store.getState;
