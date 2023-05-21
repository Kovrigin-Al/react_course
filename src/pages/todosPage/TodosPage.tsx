import {  useAppSelector } from "../../app/hooks"
import TodoInput from "./TodoInput"
import TodoList from "../../shared/todoItem/todoList/TodoList"

const TodosPage = () => {
  const todos = useAppSelector((state) => state.todos)

  return (
    <>
      <TodoInput />
      <TodoList status="pending" isLineThrough={false} />
    </>
  )
}
export default TodosPage
