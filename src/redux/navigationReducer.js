import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialNavigationState'

const stateSlice = createSlice({
    name: 'navigation',
    initialState: initialState,
    reducers: {
        openMenu: (state) => { return { ...state, open: true } },
        closeMenu: (state) => { return { ...state, open: false } },
        updateExpandedNodes:
            (state, action) => {
                return { ...state, expandedItems: action.expanded }
            },
    }
});

export default stateSlice.reducer