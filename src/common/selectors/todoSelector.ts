import { AppRootState } from '@/types/app/type'

export const selectTodolist = (state: AppRootState) => state.todo
export const selectFilter = (state: AppRootState) => state.todo
