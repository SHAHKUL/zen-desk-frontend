import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  day: null,
  link: null,
  title: null,
  date: null,
  classI: null,
  content: null,
  content2: null,
  activity: null,
  batche: null,
  classId: null,
};

export const classSlice = createSlice({
  name: "daylist",
  initialState,
  reducers: {
    addClass: (state, action) => {
      state.day = action.payload.day;
      state.link = action.payload.link;
      state.title = action.payload.title;
      state.date = action.payload.date;
      state.classI = action.payload.class;
      state.content = action.payload.content;
      state.content2 = action.payload.content2;
      state.activity = action.payload.activity;
      state.batche = action.payload.batch;
      state.classId = action.payload.idVal;
    },
    removeClass: (state) => {
      state.day = null;
      state.link = null;
      state.title = null;
      state.date = null;
      state.classI = null;
      state.content = null;
      state.content2 = null;
      state.activity = null;
      state.batche = null;
      state.classId = null;
      localStorage.clear();
    },
  },
});

export const { addClass, removeClass } = classSlice.actions;

export default classSlice.reducer;
