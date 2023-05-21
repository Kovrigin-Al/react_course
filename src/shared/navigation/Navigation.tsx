import { NavLink } from "react-router-dom"
import { FC } from "react"
import { combineClasses } from "../../utils/combineClasses"
import { IRoute } from "../../features/router/routes"
import Counter from "./Counter"

interface Props {
  routes: IRoute[]
}
const Navigation: FC<Props> = ({ routes }) => {
  return (
    <nav className=" pl-3 mb-5 w-full h-min-12 flex justify-between items-center border-b-2 border-slate-400">
      <div className="flex justify-start items-center">
        {routes.map((i) => (
          <NavLink
            to={i.path}
            key={i.path}
            className={({ isActive, isPending }) =>
              combineClasses(
                "flex items-center  text-center m-2",
                isPending ? "pointer-events-none" : "",
                isActive
                  ? "text-sky-400  font-semibold"
                  : " text-slate-400 font-medium highlight-white/5 hover:text-slate-300",
              )
            }
          >
            {i.linkName}
          </NavLink>
        ))}
      </div>
      <div className="h-full w-auto pr-3 flex flex-wrap justify-center items-center text-slate-300 font-medium">
        <Counter />
      </div>
    </nav>
  )
}
export default Navigation
