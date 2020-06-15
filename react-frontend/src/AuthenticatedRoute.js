import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import isAuthenticated from '../src/auth'
import Catalog from './Catalog'
class AuthenticatedRoute extends Component {
    render() {
        if (isAuthenticated==true) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/home" />
        }

    }
}

export default AuthenticatedRoute;