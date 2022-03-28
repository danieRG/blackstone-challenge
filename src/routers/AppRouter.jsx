import { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Switch
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { MainComponent } from '../components/main'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const { loggedIn } = useSelector(state => state.auth)

    useEffect(() => {

        if (localStorage.getItem('token')) {
            setIsAuthenticated(true)
        } else {
            setIsAuthenticated(false)
        }

        setChecking(false);

    }, [dispatch, loggedIn])

    console.log(localStorage.getItem('token'))

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
                        path="/auth"
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </Router>
        </div>
    )
}
