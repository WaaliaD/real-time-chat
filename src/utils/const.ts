export const LOGIN_ROUTE = '/login';
export const CHAT_ROUTE = '/chat';

const routesArray = [LOGIN_ROUTE, CHAT_ROUTE];

export type routes = typeof routesArray[number];