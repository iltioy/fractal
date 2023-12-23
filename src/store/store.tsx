import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import formSlice from "../features/form/formSlice";
import modalsSlice from "../features/modals/modalsSlice";

const store = configureStore({
    reducer: {
        form: formSlice,
        modals: modalsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
