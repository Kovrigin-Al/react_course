import { shallowEqual } from "react-redux"
import { useAppSelector } from "../../app/hooks"

type Props = {}
const Counter = (props: Props) => {
  const todosById = useAppSelector(
    (state) => state.todos.todosById,
    shallowEqual,
  )
  const todosIds = useAppSelector((state) => state.todos.todosIds, shallowEqual)
  const todosQty = todosIds.filter(
    (i) => todosById[i].status === "pending",
  ).length
  const userName = useAppSelector((state) => state.auth.name)

  return (
    <>
      <div className="m-1">
        Hello,
        <span className="text-slate-200 font-semibold">{" " + userName}!</span>
      </div>
      <div className="m-1">
        You have
        <span className="text-slate-200 font-medium">
          {" " + todosQty + " "}
        </span>
        task{todosQty > 1 ? "s" : ""} left
      </div>
    </>
  )
}
export default Counter
