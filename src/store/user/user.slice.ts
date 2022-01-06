import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./user.types";
import reducers from "./user.reducers";

const initialState: UserState = {
  data: null,
  error: '',
  settings: {
    isLoading: false
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers,
})

export const { reducer: userReducer, actions: userActions } = userSlice