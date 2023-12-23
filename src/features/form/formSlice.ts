import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState: values = {
    phoneNumber: "",
    email: "",
    nickname: "",
    name: "",
    surname: "",
    sex: "",
    advantages: [
        {
            id: 1,
            value: "",
        },
        {
            id: 2,
            value: "",
        },
        {
            id: 3,
            value: "",
        },
    ],
    checkbox: [],
    radio: null,
    text: "",
};

interface advantage {
    id: number;
    value: string;
}

interface values {
    phoneNumber: string;
    email: string;
    nickname: string;
    name: string;
    surname: string;
    sex: string;
    advantages: advantage[];
    checkbox: number[];
    radio: number | null;
    text: string;
}

interface newValues {
    phoneNumber?: string;
    email?: string;
    nickname?: string;
    name?: string;
    surname?: string;
    sex?: string;
    advantages?: advantage[];
    checkbox?: number[];
    radio?: number | null;
    text?: string;
}

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        setValues: (state, { payload }: PayloadAction<newValues>) => {
            state.phoneNumber = payload.phoneNumber || state.phoneNumber;
            state.email = payload.email || state.email;
            state.nickname = payload.nickname || state.nickname;
            state.name = payload.name || state.name;
            state.surname = payload.surname || state.surname;
            state.sex = payload.sex || state.sex;
            state.advantages = payload.advantages || state.advantages;
            state.checkbox = payload.checkbox || state.checkbox;
            state.radio = payload.radio || state.radio;
            state.text = payload.text || state.text;
        },
    },
});

export const { setValues } = formSlice.actions;
export default formSlice.reducer;
