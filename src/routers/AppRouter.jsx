import { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Switch
} from 'react-router-dom';
import { useSelector } from 'react-redux'
import { MainComponent } from '../components/main'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {

    const [checking, setChecking] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const { loggedIn } = useSelector(state => state.auth)

    useEffect(() => {
        let token = localStorage.getItem('token')

        if (token) {
            setIsAuthenticated(true)
        } else {
            setIsAuthenticated(false)
        }

        setChecking(false);

    }, [loggedIn])

    if (checking) {
        return <div>Checking...</div>
    }

    return (
        <div>
            <Router>
                <Switch>
                    <PrivateRoute
                        isAuthenticated={isAuthenticated}
                        component={MainComponent}
                        path="/"
                        exact
                    />

                    <PublicRoute
                        isAuthenticated={isAuthenticated}
                        component={AuthRouter}
                        path="/auth/login"
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </Router>
        </div>
    )
}
