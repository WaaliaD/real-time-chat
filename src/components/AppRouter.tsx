import {Navigate, Route, Routes} from 'react-router-dom';
import {privateRoutes, publicRoutes} from '../routes';
import {CHAT_ROUTE, LOGIN_ROUTE} from '../utils/const';
import {auth} from '../utils/firebaseConfig';
import {useAuthState} from 'react-firebase-hooks/auth';

const AppRouter = () => {
    const [user] = useAuthState(auth);

    return user
        ?
        <Routes>
            {privateRoutes.map(({path, Component}, index) =>
                <Route
                    key={index}
                    path={path}
                    element={<Component/>}
                />
            )}
            <Route
                path="*"
                element={<Navigate to={CHAT_ROUTE}/>}
            />
        </Routes>
        :
        <Routes>
            {publicRoutes.map(({path, Component}, index) =>
                <Route
                    key={index}
                    path={path}
                    element={<Component/>}
                />
            )}
            <Route
                path="*"
                element={<Navigate to={LOGIN_ROUTE}/>}
            />
        </Routes>
};

export default AppRouter;