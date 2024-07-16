import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";

export const useCastomDispatch = () => useDispatch<AppDispatch>();
export const useCastomSelector: TypedUseSelectorHook<RootState> = useSelector;
