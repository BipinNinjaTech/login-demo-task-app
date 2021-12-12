import { Button } from "@material-ui/core";
import Google from "../../assets/images/google.svg";
import "./LoginWithGoogle.scss";

export default function LoginWithGoogle() {
  return (
    <Button className="btn btn-google" variant="outlined" fullWidth>
      <img className="google-icn" src={Google} alt="" />
      <span>Sign in with Google</span>
    </Button>
  );
}
