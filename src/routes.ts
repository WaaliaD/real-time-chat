import {CHAT_ROUTE, LOGIN_ROUTE, routes} from './utils/const';
import App from './App';
import Login from './components/Login';
import Chat from './components/Chat';

interface route {
    path: routes;
    Component: typeof App;
}

export const publicRoutes: route[]  = [
    {
        path: LOGIN_ROUTE,
        Component: Login,
    }
]

export const privateRoutes: route[] = [
    {
        path: CHAT_ROUTE,
        Component: Chat,
    }
]