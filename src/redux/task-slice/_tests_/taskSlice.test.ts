import configureStore from 'redux-mock-store'
import { beforeEach, describe, expect, test } from 'vitest'

import { taskActions } from '../taskSlice'

const mockStore = configureStore()

describe('taskActions', () => {
  let store: any

  beforeEach(() => {
    store = mockStore({})
  })

  test('should dispatch addTask action', () => {
    const task = {
      id: '1',
      isDone: false,
      title: 'Task 1',
      todolistId: 'todolist1',
    }
    const expectedActions = [{ payload: task, type: 'task/addTask' }]

    store.dispatch(taskActions.addTask(task))
    expect(store.getActions()).toEqual(expectedActions)
  })

  test('should dispatch changeTaskTitle action', () => {
    const payload = { id: '1', title: 'Updated Task', todolistId: 'todolist1' }
    const expectedActions = [{ payload, type: 'task/changeTaskTitle' }]

    store.dispatch(taskActions.changeTaskTitle(payload))
    expect(store.getActions()).toEqual(expectedActions)
  })

  test('should dispatch removeTask action', () => {
    const payload = { id: '1', todolistId: 'todolist1' }
    const expectedActions = [{ payload, type: 'task/removeTask' }]

    store.dispatch(taskActions.removeTask(payload))
    expect(store.getActions()).toEqual(expectedActions)
  })

  test('should dispatch updateTask action', () => {
    const task = {
      id: '1',
      isDone: false,
      title: 'Updated Task',
      todolistId: 'todolist1',
    }
    const expectedActions = [{ payload: task, type: 'task/updateTask' }]

    store.dispatch(taskActions.updateTask(task))
    expect(store.getActions()).toEqual(expectedActions)
  })
})
