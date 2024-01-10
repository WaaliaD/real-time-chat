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
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App