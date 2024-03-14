import { useAddItemForm } from '@/components/add-item-form/hook/useAddItemForm'
import { Button } from '@/components/ui/button/button'

import styles from './add-item-form.module.scss'

type Props = {
  addItem: (title: string) => void
  buttonTitle?: string
  className?: string
  label?: string
  placeholder?: string
}

export const AddItemForm = ({
  addItem,
  buttonTitle = '+',
  className,
  label,
  placeholder,
}: Props) => {
  const { KeyPressHandler, addItemHandler, changeHandler, classNames, title } = useAddItemForm({
    addItem,
    className,
  })

  return (
    <div className={classNames}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputButtonBlock}>
        <input
          autoComplete={'off'}
          className={styles.input}
          onChange={changeHandler}
          onKeyDown={KeyPressHandler}
          placeholder={placeholder}
          value={title}
        />
        <Button className={styles.button} onClick={addItemHandler} title={buttonTitle} />
      </div>
    </div>
  )
}
