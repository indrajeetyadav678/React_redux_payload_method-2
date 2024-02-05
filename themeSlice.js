import { createSlice } from "@reduxjs/toolkit";


const colorchangeSlice = createSlice({
    name: "mycolor",

    initialState: {
        color: "green",
    },

    reducers: {
        changeColor: (state, {payload}) => {
            
                state.color = payload;
            
        },
    }
});
export const {changeColor} = colorchangeSlice.actions;
export default colorchangeSlice.reducer;