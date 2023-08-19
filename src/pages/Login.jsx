import { useDispatch, useSelector } from "react-redux";
import { selectIsAuthLoading } from "../redux/auth/selectorauth";
import { login } from "../redux/auth/operationsAuth";
import { Notify } from "notiflix";
import {
  Button,
  CardContent,
} from "@mui/material";

const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsAuthLoading);

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const credentials = {
      email: email.value,
      password: password.value,
    };

    if (email.value && password.value) {
      dispatch(login(credentials));
      Notify.success("Congrats! You have been logged in.");
    } else {
      Notify.failure("Please verify the provided information and try again.");
    }
    console.log(credentials);
  };

  return (
    <div
      style={{
        minHeight: "85vh",
        maxWidth: "100vw",
        margin:" 0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#202020",
      }}
    >
      <h2>Login</h2>
      <div
        style={{
          width: "50%",
          backgroundColor: "#2D2D2D",
          maxWidth: "30vw",

          color: "white",
          borderRadius: "1em",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <CardContent>
          <form
            onSubmit={handleLogin}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                margin: "20px",
                padding: "30px",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div className="divnameinput">
                <p>Email</p>
              </div>
              <input label="Email" name="email" type="email" required />
              <div className="divnameinput">
                <p>Password</p>
              </div>
              <input
                label="Password"
                name="password"
                type="password"
                required
              />
            </div>
            <button
              type="submit"
              style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                width: "60px",
                margin:"0 auto",
                backgroundColor: "#484441",
                color: "white",
              }}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Send"}
            </button>
          </form>
        </CardContent>
      </div>
    </div>
  );
};

export default Login;
