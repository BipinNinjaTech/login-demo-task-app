import React from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputBase,
  InputLabel,
  Link,
  styled,
} from "@material-ui/core";
import "./LoginForm.scss";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
    color: "#808191",
    "&:focus": {
      // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      color: "#6C5ECF",
    },
  },
  "& .MuiInputBase-input": {
    width: "100%",
    borderRadius: 3,
    position: "relative",
    border: "1px solid rgba(207, 207, 207, 0.05)",
    fontSize: 16,
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    "&:focus": {
      // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: "#6C5ECF",
    },
  },
}));

export default function LoginForm() {
  const [state, setState] = React.useState({
    remember: true,
  });
  const handleChange = (event: any) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const { remember } = state;
  return (
    <form action="">
      <FormControl fullWidth variant="standard">
        <InputLabel className="login-label" shrink htmlFor="email">
          Email<span>*</span>
        </InputLabel>
        <BootstrapInput
          className="login-input"
          placeholder="Mail@Example.com"
          id="email"
        />
      </FormControl>
      <FormControl fullWidth variant="standard">
        <InputLabel className="login-label" shrink htmlFor="password">
          Password<span>*</span>
        </InputLabel>
        <BootstrapInput
          className="login-input"
          placeholder="Min. 8 character"
          id="password"
        />
      </FormControl>
      <div className="forgot-wrapper">
        <FormControlLabel
          className="login-checkbox"
          control={
            <Checkbox
              checked={remember}
              style={{
                color: "#6C5ECF",
              }}
              onChange={handleChange}
              name="remember"
            />
          }
          label="Remember me"
        />
        <Link className="link-base" href="#">
          Forget password?
        </Link>
      </div>
      <Button className="btn btn-submit" variant="outlined" fullWidth>
        <span>Sign in</span>
      </Button>
      <p className="sign-up-text">
        Don’t have an account?{" "}
        <Link className="link-base" href="#">
          Sign Up Now
        </Link>
      </p>
    </form>
  );
}
