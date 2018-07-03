import 'normalize.css'
import './index.css'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { persistor, store } from './store'

import FirstScreen from './screens/firstScreen'
import I18n from 'redux-i18n'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker'
import { translations } from './translations'

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <I18n
        fallbackLang="en"
        initialLang="pl"
        translations={translations}
        forceRefresh>
        <Router history={history}>
          <Switch>
            <Route component={FirstScreen} path="/" exact/>
          </Switch>
        </Router>
      </I18n>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
