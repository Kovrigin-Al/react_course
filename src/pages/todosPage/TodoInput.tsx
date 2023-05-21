import { memo, useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { addTodo } from "../../features/todos/todosSlice"
import { v4 as uuidv4 } from "uuid"
import { PlusIcon } from "@heroicons/react/24/solid"

const TodoInput = memo(() => {
  const [name, setName] = useState("")
  const dispath = useAppDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispath(addTodo({ body: name, id: uuidv4() }))
    setName("")
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setName(e.target.value)
  }
  return (
    <form
      className="mt-5 flex flex-nowrap justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-nowrap justify-center  w-full max-w-md">
        <textarea
          placeholder="Add task"
          required
          value={name}
          onChange={handleChange}
          className="text-left resize-none pt-3 space-x-3 px-4 h-12 w-full focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg 
          bg-slate-800 ring-0 text-slate-300  hover:bg-slate-700"
        />
        <button
          type="submit"
          className=" h-12 w-8 mb-5 text-slate-300 hover:text-sky-500 flex justify-center items-center"
        >
          <PlusIcon className="h-6 w-6" />
        </button>
      </div>
    </form>
  )
})
export default TodoInput
