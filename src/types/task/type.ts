export type TaskType = {
  id: string
  isDone: boolean
  title?: string
  todolistId: string
}

export type TasksState = Record<string, TaskType[]>
