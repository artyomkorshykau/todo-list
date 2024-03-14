import React, { useState } from 'react'

import { selectTodolist } from '@/common/selectors/todoSelector'
import { todosActions } from '@/redux/todo-list-slice/todoSlice'
import { Todolist } from '@/types/todo-list/type'
import { useAppDispatch } from '@/utils/useAppDispatch'
import { useAppSelector } from '@/utils/useAppSelector'

export const useContainer = () => {
  const todoLists = useAppSelector(selectTodolist)
  const dispatch = useAppDispatch()

  const [currentTodo, setCurrentTodo] = useState<Todolist>({
    filter: 'all',
    id: '',
    order: 0,
    title: '',
  })

  function onDragEndHandler() {}

  const onDragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const onDragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const onDragStartHandler = (todolist: Todolist) => {
    setCurrentTodo(todolist)
  }

  const onDropHandler = (e: React.DragEvent<HTMLDivElement>, todolist: Todolist) => {
    const id = currentTodo.id

    e.preventDefault()
    const newSortTodos = todoLists.map(el => {
      if (el.id === todolist.id) {
        return { ...el, order: currentTodo.order }
      }
      if (el.id === id) {
        return { ...el, order: todolist.order }
      }

      return el
    })

    dispatch(
      todosActions.changeSortTodolists(
        newSortTodos.sort((a, b) => {
          if (a.order > b.order) {
            return 1
          } else {
            return -1
          }
        })
      )
    )
  }

  return {
    onDragEndHandler,
    onDragLeaveHandler,
    onDragOverHandler,
    onDragStartHandler,
    onDropHandler,
    todoLists,
  }
}
