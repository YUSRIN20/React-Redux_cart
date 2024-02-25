import { configureStore } from "@reduxjs/toolkit";
import { blogReducer } from "./BlogSlice";

// Configuring the Redux store with the blogReducer
export default configureStore({
    reducer:{
        blogs:blogReducer // Assigning the blogReducer to the 'blogs' slice of the Redux store
    }
})
