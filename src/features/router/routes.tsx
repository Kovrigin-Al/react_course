import {
  COMPLETED_TODOS_ROUTE,
  LOGIN_ROUTE,
  TODOS_ROUTE,
} from "../../utils/consts"
import LoginPage from "../../pages/loginPage/LoginPage"
import TodosPage from "../../pages/todosPage/TodosPage"
import CompletedTodos from "../../pages/completedTodosPage/CompletedTodos"

export interface IRoute {
  path: string;
  component: JSX.Element;
  linkName: string;
}

export const publicRoutes: IRoute[] = [
  { path: LOGIN_ROUTE, component: <LoginPage />, linkName: 'Registration' },
]

export const restrictedRoutes: IRoute[] = [
  { path: TODOS_ROUTE, component: <TodosPage />, linkName: 'Todo List' },
  { path: COMPLETED_TODOS_ROUTE, component: <CompletedTodos />, linkName: 'Completed Todos' },
]
