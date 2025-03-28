import { LoginModal } from '../components/Modal/LoginModal.jsx';
import { LoginButton } from '../components/Button/LoginButton.jsx';
import { LoginModalContextProvider  } from '../context/LoginModalContext.jsx';
import { UserAuthContextProvider } from '../context/UserAuthContext.jsx';

function App() {
  return (
    <UserAuthContextProvider>
      <LoginModalContextProvider>
        <LoginButton />
        <LoginModal />
      </LoginModalContextProvider>
    </UserAuthContextProvider>
  );
}

export default App;