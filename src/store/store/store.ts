import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { userReducer } from "../user/user.slice";
import userSaga from "../user/user.saga";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: { user: userReducer },
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(userSaga)

export default store