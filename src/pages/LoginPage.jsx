import Login from "../components/user/Login";
import { AlertProvider, AlertOutlet } from "react-bootstrap-hooks-alert";
import "react-bootstrap-hooks-alert/dist/Alert.css";
const LoginPage = () => {
  return (
    <>
      <AlertProvider timeouts={{ warning: 2000, success: 2000 }}>
        <AlertOutlet />
        <Login />
      </AlertProvider>
    </>
  );
};
export default LoginPage;
