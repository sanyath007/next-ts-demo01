import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isShowSidebar: false
}

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        hideSidebar: (state: any) => {
            state.isShowSidebar = false;
        },
        showSidebar: (state: any) => {
            state.isShowSidebar = true;
        },
        toggleSidebar: (state: any) => {
            state.isShowSidebar = !state.isShowSidebar;
        },
    }
});

export default navbarSlice.reducer;

export const { hideSidebar, showSidebar, toggleSidebar } = navbarSlice.actions;
