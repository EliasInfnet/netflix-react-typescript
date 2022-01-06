import { Action } from "../store/store.types";

export const AccessTokenStorageKey = 'ACCESS_TOKEN'

export type User = {
  name?: string
  email?: string
  password?: string
  id?: string
}

export type UserState = {
  data: User | null
  error: string
  settings: {
    isLoading: boolean
  }
}

export type UserAction = Action<User>
export type SetErrorAction = Action<string>
export type SetSettingsAction = Action<UserState['settings']>