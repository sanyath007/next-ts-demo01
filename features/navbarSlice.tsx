import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isShowSidebar: false
}

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        toggleSidebar: (state: any) => {
            state.isShowSidebar = !state.isShowSidebar;
        }
    }
});

export default navbarSlice.reducer;

export const { toggleSidebar } = navbarSlice.actions;
