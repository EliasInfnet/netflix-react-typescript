import { State } from "../store/store.types";

export const isAuthenticated = (state: State) => !!state.user.data