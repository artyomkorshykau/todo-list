import { Task } from '@/components/task'
import { useTasks } from '@/features/tasks/hook/useTasks'
import { Todolist } from '@/types/todo-list/type'

import styles from './tasks.module.scss'

type Props = {
  todolist: Todolist
}

export const Tasks = ({ todolist }: Props) => {
  const { classNames, removeTaskHandler, tasksForTodolist } = useTasks({ todolist })

  return (
    <div className={classNames}>
      {tasksForTodolist.map(el => (
        <Task key={el.id} removeTask={removeTaskHandler} task={el} />
      ))}
      {!tasksForTodolist.length && todolist.filter === 'all' && (
        <span className={styles.text}>Create your first task!</span>
      )}
    </div>
  )
}
