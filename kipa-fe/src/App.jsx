import { LoginModal } from '../components/Modal/LoginModal.jsx';
import { LoginButton } from '../components/Button/LoginButton.jsx';
import NavBar from '../components/Bar/NavBar.jsx';
import { LoginModalContextProvider  } from '../context/LoginModalContext.jsx';
import { UserAuthContextProvider } from '../context/UserAuthContext.jsx';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <UserAuthContextProvider>
      <LoginModalContextProvider>
        <NavBar />
        <LoginButton />
        <LoginModal />
        <Outlet />
      </LoginModalContextProvider>
    </UserAuthContextProvider>
  );
}

export default App;