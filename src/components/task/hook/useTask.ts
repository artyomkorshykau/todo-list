import { taskActions } from '@/redux/task-slice/taskSlice'
import { TaskType } from '@/types/task/type'
import { useAppDispatch } from '@/utils/useAppDispatch'

type Props = {
  removeTask: (id: string) => void
  task: TaskType
}

export const useTask = ({ removeTask, task }: Props) => {
  const dispatch = useAppDispatch()

  const removeTaskHandler = () => {
    removeTask(task.id)
  }

  const updateTaskHandler = (isDone: boolean) => {
    dispatch(
      taskActions.updateTask({
        id: task.id,
        isDone,
        todolistId: task.todolistId,
      })
    )
  }

  const changeTitleHandler = (title: string) => {
    dispatch(
      taskActions.changeTaskTitle({
        id: task.id,
        title,
        todolistId: task.todolistId,
      })
    )
  }

  return {
    changeTitleHandler,
    removeTaskHandler,
    updateTaskHandler,
  }
}
