import { taskActions } from '@/redux/task-slice/taskSlice'
import { todosActions } from '@/redux/todo-list-slice/todoSlice'
import { Todolist } from '@/types/todo-list/type'
import { useAppDispatch } from '@/utils/useAppDispatch'
import { v1 } from 'uuid'

type Props = {
  todolist: Todolist
}

export const useTodolist = ({ todolist }: Props) => {
  const dispatch = useAppDispatch()

  const addTaskHandler = (title: string) => {
    dispatch(
      taskActions.addTask({
        id: v1(),
        isDone: false,
        title,
        todolistId: todolist.id,
      })
    )
  }
  const removeTodosHandler = (id: string) => {
    dispatch(todosActions.removeTodolist({ id }))
  }
  const changeTodolistTitleHandler = (title: string) => {
    dispatch(todosActions.changeTodolistTitle({ title, todolistId: todolist.id }))
  }

  return { addTaskHandler, changeTodolistTitleHandler, removeTodosHandler }
}
