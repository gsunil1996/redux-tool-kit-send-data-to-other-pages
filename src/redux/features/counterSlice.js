import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
    setCount: () => { },
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        getCount(state, action) {
            state.count = action.payload
        },
        setSetCount(state, action) {
            state.setCount = action.payload;
        },
    }
})

export const { getCount, setSetCount } = counterSlice.actions;

export default counterSlice.reducer;