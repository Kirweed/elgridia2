import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PlayerState {
  [key: string]: any;
  x: number;
  y: number;
}

const initialState: PlayerState = { x: 0, y: 0 };

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPosition(state, action: PayloadAction<PlayerState>) {
      state.x = action.payload.x / 32;
      state.y = action.payload.y / 32;
    },
  },
});

export const { setPosition } = playerSlice.actions;
export default playerSlice.reducer;
