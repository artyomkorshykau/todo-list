import React, { ChangeEvent, useState } from 'react'

import clsx from 'clsx'

import styles from '@/components/add-item-form/add-item-form.module.scss'

type Props = {
  addItem: (title: string) => void
  className?: string
}

export const useAddItemForm = ({ addItem, className }: Props) => {
  const [title, setTitle] = useState('')

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
  }

  const addItemHandler = () => {
    if (title.trim() !== '') {
      addItem(title)
      setTitle('')
    }
  }

  const KeyPressHandler: React.KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key === 'Enter') {
      addItemHandler()
    }
  }

  const classNames = clsx(styles.inputGroup, className)

  return {
    KeyPressHandler,
    addItemHandler,
    changeHandler,
    classNames,
    title,
  }
}
