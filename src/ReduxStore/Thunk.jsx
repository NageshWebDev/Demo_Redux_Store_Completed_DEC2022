import { createAsyncThunk } from "@reduxjs/toolkit";
import { productAction } from "./ReduxStore";

export const specialProductStatue = createAsyncThunk('specialProduct', async function starProduct(sendData, thunkAPI) {
    try {
        console.log('Fetching special product details')
        thunkAPI.dispatch(productAction.getStatus({ message: "Fetching Special Product Data" }))

        const response = await fetch("https://fakestoreapi.com/products/10")

        if (!response.ok)
            throw new Error(response.status);

        const responseJSON = await response.json()     

        thunkAPI.dispatch(productAction.getStatus({ message: "Special Product Data Fetched" }))
        thunkAPI.dispatch(productAction.getSpProduct(responseJSON))

    } catch (error) {
        console.log(error.message);
        thunkAPI.dispatch(productAction.getStatus({ message: "Failed to Fetch Special Product Data" }))
    }
})