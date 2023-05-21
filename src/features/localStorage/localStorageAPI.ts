import { ITodosState } from "../todos/todosSlice";

const PREFIX = 'todoApp';
const NAME_KEY = PREFIX + '_name';
const TODOS_KEY = PREFIX + '_todos';

export const setNameInLocalStorage = (name: string) => {
    localStorage.setItem(NAME_KEY, JSON.stringify({ name }));
};

export const getNameFromLocalStorage = () => {
    const jsonValue = localStorage.getItem(NAME_KEY);
    if (jsonValue) {
        const { name } = JSON.parse(jsonValue) as { name: string; };
        return name;
    }
};

export const updateTodosInLocalStorage = (todos: ITodosState) => {
    localStorage.setItem(TODOS_KEY, JSON.stringify({ ...todos }));
};

export const getTodosFromLocalStorage = () => {
    const jsonValue = localStorage.getItem(TODOS_KEY);
    if (jsonValue) {
        const todos = JSON.parse(jsonValue) as ITodosState;
        return todos;
    }
};