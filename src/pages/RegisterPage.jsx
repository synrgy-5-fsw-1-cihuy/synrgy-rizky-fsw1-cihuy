import Register from "../components/user/Register";
import { AlertProvider, AlertOutlet } from "react-bootstrap-hooks-alert";
import "react-bootstrap-hooks-alert/dist/Alert.css";

const RegisterPage = () => {
  return (
    <>
      <AlertProvider timeouts={{ warning: 2000, success: 2000 }}>
        <AlertOutlet />
        <Register />
      </AlertProvider>
    </>
  );
};
export default RegisterPage;
