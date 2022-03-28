import { Switch, Route, Redirect } from "react-router-dom"
import { LoginScreen } from "../components/auth/LoginScreen"

export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route path="/auth/login" component={LoginScreen} exact />

                <Redirect to="/auth/login" />
            </Switch>
        </div>
    )
}
