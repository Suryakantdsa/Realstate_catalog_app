import {configureStore} from "@reduxjs/toolkit"
import { PropertySlice } from "./Slice/PropertySlice"


const store =configureStore({
    reducer:{
        property:PropertySlice.reducer
    }
})

export default store;