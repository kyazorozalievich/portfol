import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [],
}

export const sliceData = createSlice({
    name: "data",
    initialState,
    reducers: {
        getData: (state, action) => {
            state.data = action.payload
        },
    },
})

export const {getData} = sliceData.actions
export default sliceData.reducer

