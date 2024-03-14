import { AddItemForm } from '@/components/add-item-form'
import { ButtonGroup } from '@/components/button-group'
import { EditableSpan } from '@/components/editable-span/editable-span'
import { Button } from '@/components/ui/button/button'
import { Tasks } from '@/features/tasks'
import { useTodolist } from '@/features/todo-list/hook/useTodolist'
import { Todolist } from '@/types/todo-list/type'

import styles from './todo-list.module.scss'

type Props = {
  todolist: Todolist
}

export const TodoList = ({ todolist }: Props) => {
  const { addTaskHandler, changeTodolistTitleHandler, removeTodosHandler } = useTodolist({
    todolist,
  })

  return (
    <div className={styles.todolist}>
      <Button id={todolist.id} onClick={removeTodosHandler} title={'Remove'} />
      <EditableSpan changeTitleCallback={changeTodolistTitleHandler} title={todolist.title} />
      <AddItemForm
        addItem={addTaskHandler}
        className={styles.addItemForm}
        placeholder={'Task name'}
      />
      <Tasks todolist={todolist} />
      <ButtonGroup id={todolist.id} />
    </div>
  )
}
