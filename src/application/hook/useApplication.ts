import { useDispatch } from 'react-redux'

import { selectTodolist } from '@/common/selectors/todoSelector'
import { todosActions } from '@/redux/todo-list-slice/todoSlice'
import { AppDispatch } from '@/types/app/type'
import { useAppSelector } from '@/utils/useAppSelector'
import { v1 } from 'uuid'

export const useApplication = () => {
  const dispatch = useDispatch<AppDispatch>()
  const todolists = useAppSelector(selectTodolist)

  const todoOrder = () => {
    if (!todolists.length) {
      return 0
    } else {
      return todolists[0].order + 1
    }
  }

  const addTodosHandler = (title: string) => {
    dispatch(todosActions.addTodolist({ id: v1(), order: todoOrder(), title }))
  }

  return {
    addTodosHandler,
  }
}
