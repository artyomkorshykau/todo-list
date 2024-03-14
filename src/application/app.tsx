import { useApplication } from '@/application/hook/useApplication'
import { AddItemForm } from '@/components/add-item-form'
import { Container } from '@/features/container'

import styles from './app.module.scss'

export function App() {
  const { addTodosHandler } = useApplication()

  return (
    <>
      <AddItemForm
        addItem={addTodosHandler}
        buttonTitle={'Add'}
        className={styles.addTodoForm}
        placeholder={'Todo list name'}
      />
      <Container />
    </>
  )
}
