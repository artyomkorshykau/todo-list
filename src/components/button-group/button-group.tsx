import { useButtonGroup } from '@/components/button-group/hook/useButtonGroup'
import { Button } from '@/components/ui/button/button'

import styles from './button-group.module.scss'

type Props = {
  id: string
}

export const ButtonGroup = ({ id }: Props) => {
  const { taskFilter } = useButtonGroup({ id })

  return (
    <div className={styles.buttonGroup}>
      <Button className={styles.buttonAll} onClick={() => taskFilter('all')} title={'All'} />
      <Button
        className={styles.buttonActive}
        onClick={() => taskFilter('active')}
        title={'Active'}
      />
      <Button
        className={styles.buttonComplete}
        onClick={() => taskFilter('completed')}
        title={'Completed'}
      />
    </div>
  )
}
