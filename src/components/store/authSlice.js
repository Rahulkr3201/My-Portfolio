import { createSlice } from "@reduxjs/toolkit";
//white-true //black-flase
const initialState = {
  mode: "dark",
};

const authSlice = createSlice({
  name: "themeMode",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = authSlice.actions;

export default authSlice.reducer;
