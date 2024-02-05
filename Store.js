import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./themeSlice";

const Store = configureStore({
    reducer:{
        mycolor:colorReducer,
    }
    
});
export default Store;