import { configureStore } from "@reduxjs/toolkit";
import  sliceData  from "./reducers/profileSlice";

export const store = configureStore({
    reducer: {
        profile: sliceData
    }
})