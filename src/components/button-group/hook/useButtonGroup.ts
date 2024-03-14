import { todosActions } from '@/redux/todo-list-slice/todoSlice'
import { FilterValues } from '@/types/todo-list/type'
import { useAppDispatch } from '@/utils/useAppDispatch'

type Props = {
  id: string
}

export const useButtonGroup = ({ id }: Props) => {
  const dispatch = useAppDispatch()

  const taskFilter = (filter: FilterValues) => {
    dispatch(todosActions.changeTodolistFilter({ filter, id }))
  }

  return { taskFilter }
}
