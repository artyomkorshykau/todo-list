import { taskSlice } from '@/redux/task-slice/taskSlice'
import { todoSlice } from '@/redux/todo-list-slice/todoSlice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { thunk } from 'redux-thunk'

const rootReducer = combineReducers({
  task: taskSlice,
  todo: todoSlice,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [thunk]

const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middleware),
  reducer: persistedReducer,
})

export const persistor = persistStore(store)
export default store

// @ts-ignore
window.store = store
