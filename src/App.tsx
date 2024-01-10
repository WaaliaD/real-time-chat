import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import {auth} from './utils/firebaseConfig';
import {useAuthState} from 'react-firebase-hooks/auth';
import Loader from './components/Loader';

function App() {
    const [_, isLoading] = useAuthState(auth);

    if (isLoading) {
        return (
            <Loader />
        )
    }

    return (
        <BrowserRouter basename='/real-time-chat'>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App