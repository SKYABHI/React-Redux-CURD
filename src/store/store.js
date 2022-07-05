import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./index"
import AddReducer from "./Adddetail"


const store = configureStore({
    reducer: {
        auth : authReducer,
        add  : AddReducer
    
    }
});

export default store;