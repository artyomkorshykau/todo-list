import { EditableSpan } from '@/components/editable-span/editable-span'
import { useTask } from '@/components/task/hook/useTask'
import { Button } from '@/components/ui/button/button'
import { Checkbox } from '@/components/ui/checkbox'
import { TaskType } from '@/types/task/type'

import styles from './task.module.scss'

type Props = {
  removeTask: (id: string) => void
  task: TaskType
}

export const Task = ({ removeTask, task }: Props) => {
  const { changeTitleHandler, removeTaskHandler, updateTaskHandler } = useTask({ removeTask, task })

  return (
    <div className={styles.task}>
      <Button className={styles.button} onClick={removeTaskHandler} title={'x'} />
      <Checkbox isDone={task.isDone} updateTaskHandler={updateTaskHandler} />
      <EditableSpan
        changeTitleCallback={changeTitleHandler}
        taskStatus={task.isDone}
        title={task.title}
      />
    </div>
  )
}
