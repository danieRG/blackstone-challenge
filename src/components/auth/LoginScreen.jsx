import { useDispatch } from "react-redux";
import { startLogin } from "../../actions/auth";
import { useForm } from "../../hooks/useForm"

export const LoginScreen = () => {
    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({
        email: "admin@test.com",
        password: "superSecret12"
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(email, password));
    }

    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <h3 className="auth__title">Login</h3>
                <form
                    onSubmit={handleLogin}
                    className="animate__animated animate__fadeIn animate__faster"
                >
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleInputChange}
                        autoComplete="off"
                        className="auth__input"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleInputChange}
                        className="auth__input"
                    />

                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )

}
