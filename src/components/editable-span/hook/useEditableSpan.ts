import React, { ChangeEvent, useState } from 'react'

type Props = {
  changeTitleCallback: (title: string) => void
  title: string
}

export const useEditableSpan = ({ changeTitleCallback, title }: Props) => {
  const [editMode, setEditMode] = useState(false)
  const [newTitle, setNewTitle] = useState(title)

  const activatedEditModeHandler = () => {
    setEditMode(!editMode)
    setNewTitle(title)
  }

  const activatedViewModeHandler = () => {
    setEditMode(false)
    changeTitleCallback(newTitle)
  }

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.currentTarget.value)
  }

  const KeyPressHandler: React.KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key === 'Enter') {
      setEditMode(false)
      changeTitleCallback(newTitle)
    }
  }

  return {
    KeyPressHandler,
    activatedEditModeHandler,
    activatedViewModeHandler,
    changeTitle,
    editMode,
    newTitle,
  }
}
