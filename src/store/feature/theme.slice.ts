import { createSlice } from "@reduxjs/toolkit";

type ThemeType = "light-mode" | "dark-mode";

type Store = {
  theme: ThemeType;
};

const initialState: Store = {
  theme: (localStorage.getItem("theme") as ThemeType) || "dark-mode",
};

const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state) {
      state.theme = state.theme === "light-mode" ? "dark-mode" : "light-mode";
    },
  },
});

export const { setTheme } = slice.actions;

export const themeReducer = slice.reducer;
