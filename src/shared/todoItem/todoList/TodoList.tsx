import { FC, useEffect } from "react"
import { useAppSelector } from "../../../app/hooks"
import { ITodoStatus } from "../../../features/todos/todosSlice"
import Item from "./Item"
import { combineClasses } from "../../../utils/combineClasses"
import { updateTodosInLocalStorage } from "../../../features/localStorage/localStorageAPI"
interface IProps extends ITodoStatus {
  isLineThrough: boolean
}
const TodoList: FC<IProps> = ({ status, isLineThrough }) => {
  const todos = useAppSelector((state) => state.todos)

  useEffect(() => {
    updateTodosInLocalStorage(todos)
  }, [todos])
  return (
    <ul
      className={combineClasses(
        "mb-5 overflow-y-scroll",
        isLineThrough ? "line-through" : "",
      )}
    >
      {todos.todosIds.map((i) => {
        if (todos.todosById[i].status === status)
          return <Item todoBody={todos.todosById[i].body} status={status} id={i} key={i} />
      })}
    </ul>
  )
}
export default TodoList
