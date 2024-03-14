import { selectTask } from '@/common/selectors/taskSelector'
import { taskActions } from '@/redux/task-slice/taskSlice'
import { Todolist } from '@/types/todo-list/type'
import { useAppDispatch } from '@/utils/useAppDispatch'
import { useAppSelector } from '@/utils/useAppSelector'
import clsx from 'clsx'

import styles from '@/features/tasks/tasks.module.scss'

type Props = {
  todolist: Todolist
}

export const useTasks = ({ todolist }: Props) => {
  const dispatch = useAppDispatch()
  const tasks = useAppSelector(selectTask)

  const removeTaskHandler = (taskId: string) => {
    dispatch(taskActions.removeTask({ id: taskId, todolistId: todolist.id }))
  }

  let tasksForTodolist = tasks[todolist.id]

  if (todolist.filter === 'active') {
    tasksForTodolist = tasks[todolist.id].filter(t => t.isDone)
  }
  if (todolist.filter === 'completed') {
    tasksForTodolist = tasks[todolist.id].filter(t => !t.isDone)
  }

  const classNames = clsx(!tasksForTodolist.length && styles.span)

  return {
    classNames,
    removeTaskHandler,
    tasksForTodolist,
  }
}
