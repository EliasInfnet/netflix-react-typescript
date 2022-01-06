import { UserState } from "../user/user.types";

export type Action<K> = {
  type: string
  payload: K
}

export type State = {
  user: UserState
}