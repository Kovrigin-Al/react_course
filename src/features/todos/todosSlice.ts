import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTodosFromLocalStorage } from "../localStorage/localStorageAPI";

export interface ITodoStatus { status: 'pending' | 'completed'; }

export interface ITodo extends ITodoStatus {
    body: string;
}

export interface ITodosState {
    todosById: { [id: string]: ITodo; };
    todosIds: string[];
}

const initialState: ITodosState = getTodosFromLocalStorage() || {
    todosById: {},
    todosIds: [],
};
export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<{ body: string, id: string; }>) => {
            state.todosIds.push(action.payload.id);
            state.todosById[action.payload.id] = { body: action.payload.body, status: 'pending' };
        },
        completeTodoById: (state, action: PayloadAction<string>) => {
            state.todosById[action.payload].status = 'completed';
        },
        deleteTodoById: (state, action: PayloadAction<string>) => {
            delete state.todosById[action.payload];
            state.todosIds = state.todosIds.filter(i => i !== action.payload);
        },
        setTodos: (state, action: PayloadAction<ITodosState>) => {
            state = action.payload;
        },
        updateTodoBodyById: (state, action: PayloadAction<{ id: string, body: string; }>) => {
            state.todosById[action.payload.id].body = action.payload.body;
        },
        uncompleteTodoById: (state, action: PayloadAction<string>) => {
            state.todosById[action.payload].status = 'pending';
        },

    },

});

export const { addTodo, completeTodoById, deleteTodoById, setTodos, updateTodoBodyById, uncompleteTodoById } = todosSlice.actions;

export default todosSlice.reducer;
