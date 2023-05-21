import TodoList from "../../shared/todoItem/todoList/TodoList"

type Props = {}
const CompletedTodos = (props: Props) => {
  return <TodoList status="completed" isLineThrough={true} />
}
export default CompletedTodos
