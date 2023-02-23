import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import playerSlice from "./playerSlice";

const store = configureStore({
  reducer: {
    player: playerSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
