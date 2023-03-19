import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'

function registerSourceReducer(state, action) {
    return _.merge(state, {
        [action.articleId]: {
            sources: action.sources
        }
    })
}

const stateSlice = createSlice({
    name: 'articles',
    initialState: {},
    reducers: {
        registerSources: registerSourceReducer,
    }
});

export default stateSlice.reducer