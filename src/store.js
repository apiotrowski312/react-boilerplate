import { applyMiddleware, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'

import { createLogger } from 'redux-logger'
import freeze from 'redux-freeze'
import rootReducer from './reducers'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

const middlewares = [thunk]

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(
    createLogger({ diff: true }),
    freeze,
  )
}

const middleware = applyMiddleware(...middlewares)

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, middleware)
const persistor = persistStore(store, process.env.NODE_ENV === 'production' ? null : { timeout: 2000 })

export { store, persistor }
