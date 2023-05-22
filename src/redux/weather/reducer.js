import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosClient } from 'src/api/axiosClient.js';

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async function (_, { rejectWithValue }) {
        try {
            const response = await axiosClient.get();

            return response?.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
    state.loading = false;
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weather: {},
        status: null,
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: {
        [fetchWeather.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
            state.loading = true;
        },
        [fetchWeather.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.weather = action.payload;
            state.loading = false;
        },
        [fetchWeather.rejected]: setError,
    },
});

export default weatherSlice.reducer;
