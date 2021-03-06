import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Home, Layout } from '.'
import { auth } from '../utils/AuthService'

export default class App extends Component {

  constructor (props) {
    super(props)
    // Trigger a re-render when the auth state has changed.
    auth.onUpdate = () => this.forceUpdate()
  }

  render () {
    return <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
  }
}
