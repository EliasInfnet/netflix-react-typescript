import { UserAction, UserState } from "./user.types"

export const login = (state: UserState, action: UserAction) => {
  state.data = action.payload
}

const reducers = { login }

export default reducers