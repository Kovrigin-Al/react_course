import { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { login } from "../../features/auth/authSlice"
import { setNameInLocalStorage } from "../../features/localStorage/localStorageAPI"


const LoginPage = () => {
  const [name, setName] = useState("")
  const dispath = useAppDispatch()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setNameInLocalStorage(name)
    dispath(login(name))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="h-48 flex flex-col items-center justify-between">
        <h1 className="text-2xl">Welcome to your ToDo app!</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nameInput" className="block w-full text-center mb-1">
            Please, enter your name:
          </label>
          <input
            required
            value={name}
            onChange={handleChange}
            className="text-left space-x-3 px-4 h-12 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg 
          bg-slate-800 ring-0 text-slate-300 highlight-white/5 hover:bg-slate-700"
            id="nameInput"
          />
        </form>
      </div>
    </div>
  )
}
export default LoginPage
