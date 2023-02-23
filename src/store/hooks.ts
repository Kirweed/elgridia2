import { useSelector } from "react-redux";
import { RootState } from ".";
import { PlayerState } from "./playerSlice";

export const usePlayerSelector = () =>
  useSelector<RootState, PlayerState>((state) => state.player);
