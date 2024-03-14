import { todosActions } from '@/redux/todo-list-slice/todoSlice'
import { TaskType, TasksState } from '@/types/task/type'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(todosActions.addTodolist, (state, action) => {
        state[action.payload.id] = []
      })
      .addCase(todosActions.removeTodolist, (state, action) => {
        delete state[action.payload.id]
      })
  },

  initialState: {} as TasksState,
  name: 'task',
  reducers: {
    addTask(state, action: PayloadAction<TaskType>) {
      state[action.payload.todolistId].unshift(action.payload)
    },
    changeTaskTitle(
      state,
      action: PayloadAction<{
        id: string
        title: string
        todolistId: string
      }>
    ) {
      const tasks = state[action.payload.todolistId]
      const index = tasks.findIndex(el => el.id === action.payload.id)

      if (index > -1) {
        tasks[index] = { ...tasks[index], ...action.payload }
      }
    },
    removeTask(
      state,
      action: PayloadAction<{
        id: string
        todolistId: string
      }>
    ) {
      const index = state[action.payload.todolistId].findIndex(el => el.id === action.payload.id)

      if (index > -1) {
        state[action.payload.todolistId].splice(index, 1)
      }
    },
    updateTask(state, action: PayloadAction<TaskType>) {
      const tasks = state[action.payload.todolistId]
      const index = tasks.findIndex(el => el.id === action.payload.id)

      if (index > -1) {
        tasks[index] = { ...tasks[index], ...action.payload }
      }
    },
  },
})

export const taskSlice = slice.reducer
export const taskActions = slice.actions
