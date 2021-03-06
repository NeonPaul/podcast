import React from 'react'
import { render } from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'
import Counter from './containers/feed-input'
import Items from './containers/items'
import { BrowserRouter, Route } from 'react-router-dom'


class App extends React.Component {
  render () {
    return <div>
      <BrowserRouter>
        <div>
          <Counter />
          <Items />
        </div>
      </BrowserRouter>
    </div>
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
)
