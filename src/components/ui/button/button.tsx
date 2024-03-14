import clsx from 'clsx'

import styles from './button.module.scss'

type Props = {
  className?: string
  id?: string
  onClick: (id: string) => void
  title: string
}

export const Button = ({ className, id, onClick, title }: Props) => {
  const onButtonHandler = () => {
    onClick(id ?? '')
  }

  const classNames = clsx(styles.button, className)

  return (
    <button className={classNames} onClick={onButtonHandler}>
      {title}
    </button>
  )
}
