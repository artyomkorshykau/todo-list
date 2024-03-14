import { useContainer } from '@/features/container/hook/useContainer'
import { TodoList } from '@/features/todo-list'

import styles from './container.module.scss'

export const Container = () => {
  const {
    onDragEndHandler,
    onDragLeaveHandler,
    onDragOverHandler,
    onDragStartHandler,
    onDropHandler,
    todoLists,
  } = useContainer()

  return (
    <div className={styles.container}>
      {todoLists.map(el => {
        return (
          <div
            draggable
            key={el.id}
            onDragEnd={() => onDragEndHandler()}
            onDragLeave={e => onDragLeaveHandler(e)}
            onDragOver={e => onDragOverHandler(e)}
            onDragStart={() => onDragStartHandler(el)}
            onDrop={e => onDropHandler(e, el)}
          >
            <TodoList todolist={el} />
          </div>
        )
      })}
    </div>
  )
}
