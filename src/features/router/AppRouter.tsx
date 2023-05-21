import { Navigate, Route, Routes } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"
import { publicRoutes, restrictedRoutes } from "./routes"
import { LOGIN_ROUTE, TODOS_ROUTE } from "../../utils/consts"
import Navigation from "../../shared/navigation/Navigation"

type Props = {}
const AppRouter = (props: Props) => {
  const isAuth = useAppSelector((state) => state.auth.isAuth)

  return (
    <div className="w-screen h-screen flex flex-col">
      {isAuth && <Navigation routes={restrictedRoutes} />}
      <Routes>
        {isAuth
          ? restrictedRoutes.map((i) => (
              <Route key={i.path} path={i.path} element={i.component} />
            ))
          : publicRoutes.map((i) => (
              <Route key={i.path} path={i.path} element={i.component} />
            ))}
        <Route
          path="*"
          element={<Navigate to={isAuth ? TODOS_ROUTE : LOGIN_ROUTE} />}
        />
      </Routes>
    </div>
  )
}
export default AppRouter
