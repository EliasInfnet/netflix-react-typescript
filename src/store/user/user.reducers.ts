import { SetErrorAction, SetSettingsAction, UserAction, UserState } from "./user.types";

const login = (state: UserState, action: UserAction) => { }

const setData = (state: UserState, action: UserAction) => {
  state.data = { ...state.data, ...action.payload }
}

const setError = (state: UserState, action: SetErrorAction) => {
  state.error = action.payload
}

const setSettings = (state: UserState, action: SetSettingsAction) => {
  state.settings = action.payload
}

const reducers = { login, setData, setError, setSettings }

export default reducers