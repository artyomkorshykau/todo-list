import { FilterValues, Todolist } from '@/types/todo-list/type'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  initialState: [] as Todolist[],
  name: 'todolist',
  reducers: {
    addTodolist(state, action: PayloadAction<Todolist>) {
      state.unshift({ ...action.payload, filter: 'all' })
    },
    changeSortTodolists(_state, action: PayloadAction<Todolist[]>) {
      return action.payload
    },
    changeTodolistFilter(
      state,
      action: PayloadAction<{
        filter: FilterValues
        id: string
      }>
    ) {
      const index = state.findIndex(el => el.id === action.payload.id)

      if (index > -1) {
        state[index].filter = action.payload.filter
      }
    },
    changeTodolistTitle(
      state,
      action: PayloadAction<{
        title: string
        todolistId: string
      }>
    ) {
      const findTodo = state.findIndex(td => td.id === action.payload.todolistId)

      state[findTodo].title = action.payload.title
    },
    removeTodolist(state, action: PayloadAction<{ id: string }>) {
      const index = state.findIndex(el => el.id === action.payload.id)

      if (index > -1) {
        state.splice(index, 1)
      }
    },
  },
})

export const todoSlice = slice.reducer
export const todosActions = slice.actions
