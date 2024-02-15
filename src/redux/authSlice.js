import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  admin: null,
  zenclass: null,
  batch:null,

};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.others;
      state.token = action.payload.token;
      state.admin = action.payload.isAdmin;
      state.zenclass = action.payload.zenclass;
      state.batch = action.payload.batch;
    },

    logout: (state) => {
      state.user = null;
      state.token =null;
      state.admin = null;
      state.zenclass = null;
      state.batch =null;
      localStorage.clear();
    },
    assign:(state,action)=>{
      state.zenclass = action.payload.zenclass;
      state.batch=action.payload.batch
    },
    showTask:(state,action)=>{
      state.user=action.payload.user
    }
  },
});

export const { login,  logout,assign,showTask } = authSlice.actions;

export default authSlice.reducer;
