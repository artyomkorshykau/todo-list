import { ChangeEvent } from 'react'

import styles from './checkbox.module.scss'

type Props = {
  isDone: boolean
  updateTaskHandler: (isDone: boolean) => void
}

export const Checkbox = ({ isDone, updateTaskHandler }: Props) => {
  const updateTaskStatusHandler = (event: ChangeEvent<HTMLInputElement>) => {
    updateTaskHandler(event.currentTarget.checked)
  }

  return (
    <input
      checked={isDone}
      className={styles.checkbox}
      onChange={updateTaskStatusHandler}
      type={'checkbox'}
    />
  )
}
