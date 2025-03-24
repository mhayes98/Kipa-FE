import { LoginModal } from '../components/Modal/LoginModal.jsx';
import { LoginButton } from '../components/Button/LoginButton.jsx';
import { LoginModalContextProvider  } from '../context/LoginModalContext.jsx';

function App() {
  return (
    <LoginModalContextProvider>
      <LoginButton />
      <LoginModal />
    </LoginModalContextProvider>
  );
}

export default App;