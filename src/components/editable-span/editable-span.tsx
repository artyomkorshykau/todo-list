import { memo } from 'react'

import { useEditableSpan } from '@/components/editable-span/hook/useEditableSpan'

import styles from './editable-span.module.scss'

type Props = {
  changeTitleCallback: (title: string) => void
  taskStatus?: boolean
  title?: string
}

export const EditableSpan = memo(({ changeTitleCallback, taskStatus, title = '' }: Props) => {
  const {
    KeyPressHandler,
    activatedEditModeHandler,
    activatedViewModeHandler,
    changeTitle,
    editMode,
    newTitle,
  } = useEditableSpan({ changeTitleCallback, title })

  return (
    <>
      {editMode && (
        <div className={styles.inputContainer}>
          <input
            autoFocus
            className={styles.inputField}
            onBlur={activatedViewModeHandler}
            onChange={changeTitle}
            onKeyDown={KeyPressHandler}
            placeholder={'Enter text'}
            type={'text'}
            value={newTitle}
          />
          <span className={styles.inputHighlight}></span>
        </div>
      )}
      {!editMode && (
        <span
          className={taskStatus ? styles.isDone : styles.title}
          onDoubleClick={activatedEditModeHandler}
        >
          {title}
        </span>
      )}
    </>
  )
})
