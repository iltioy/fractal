import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    successModalOpen: false,
    errorModalOpen: false,
};

const modalSlice = createSlice({
    name: "modals",
    initialState,
    reducers: {
        toggleSuccessModal: (state) => {
            state.successModalOpen = !state.successModalOpen;
        },
        toggleErrorModal: (state) => {
            state.errorModalOpen = !state.errorModalOpen;
        },
    },
});

export const { toggleErrorModal, toggleSuccessModal } = modalSlice.actions;
export default modalSlice.reducer;
