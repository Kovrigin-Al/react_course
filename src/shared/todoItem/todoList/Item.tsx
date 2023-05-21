import { ArrowUturnLeftIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline"
import { FC, useEffect, useRef, useState } from "react"
import { combineClasses } from "../../../utils/combineClasses"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import {
  ITodo,
  ITodoStatus,
  completeTodoById,
  deleteTodoById,
  uncompleteTodoById,
  updateTodoBodyById,
} from "../../../features/todos/todosSlice"

interface IProps extends ITodoStatus {
  todoBody: string
  id: string
}
const Item: FC<IProps> = ({ todoBody, id, status }) => {
  const [body, setBody] = useState(todoBody)
  const [isDisabled, setIsDisabled] = useState(true)
  const dispatch = useAppDispatch()
  const ref = useRef<any>(null)

  useEffect(() => {
    if (!isDisabled) {
      ref.current.focus()
      ref.current.setSelectionRange(body.length, body.length)
    }
  }, [isDisabled])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value)
  }

  const handleBlur = () => {
    setIsDisabled(true)
    dispatch(updateTodoBodyById({ id, body }))
  }

  const handleTurnEdit = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation()
    setIsDisabled((prev) => !prev)
  }

  const handleDelete = () => {
    dispatch(deleteTodoById(id))
  }

  const handleComplete = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    if (isDisabled && e.target === ref.current) {
      dispatch(completeTodoById(id))
    }
  }

  const handleUncomplete = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
      dispatch(uncompleteTodoById(id))
  }

  return (
    <li
      key={id}
      className="text-left my-2 pr-16 mx-auto max-w-md space-x-3 p-4 h-auto focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg 
  bg-slate-800 ring-0 relative text-slate-200 highlight-white/5 hover:bg-slate-700 hover:line-through"
      onClick={handleComplete}
    >
      <textarea
        disabled={isDisabled}
        value={body}
        ref={ref}
        onChange={handleChange}
        className={combineClasses(
          "resize-none outline-none  w-full h-auto p-2 bg-inherit rounded-md",
          status === "pending" && isDisabled
            ? "hover:line-through cursor-pointer hover:text-amber-600"
            : "",
          status === "completed" ? "line-through text-slate-400" : "",
        )}
        onBlur={handleBlur}
      />
      <div className="absolute top-0 p-2 right-0 flex flex-nowrap h-full items-center">
        <TrashIcon
          onClick={handleDelete}
          className="h-6 w-6 p-1 hover:bg-rose-800 hover:cursor-pointer rounded-md hover:text-rose-300"
        />
        {status === "pending" && (
          <PencilSquareIcon
            onClick={handleTurnEdit}
            className="h-6 w-6 p-1 hover:bg-sky-800 hover:cursor-pointer rounded-md "
          />
        )}
        {status === "completed" && (
          <ArrowUturnLeftIcon
            onClick={handleUncomplete}
            className="h-6 w-6 p-1 hover:bg-sky-800 hover:cursor-pointer rounded-md "
          />
        )}
      </div>
    </li>
  )
}
export default Item
