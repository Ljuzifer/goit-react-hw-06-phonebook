const { createSlice } = require('@reduxjs/toolkit');

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    searchFilter: (state, action) => {
      return (state = `${action.payload}`);
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { searchFilter } = filterSlice.actions;
