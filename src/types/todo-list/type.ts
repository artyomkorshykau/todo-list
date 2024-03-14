export type Todolist = {
  filter?: FilterValues
  id: string
  order: number
  title: string
}

export type FilterValues = 'active' | 'all' | 'completed'
