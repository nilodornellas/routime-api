import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { InMemoryTasksRepository } from '@/repositories/in-memory/in-memory-tasks-repository'
import { CreateTaskUseCase } from './create-task'
import { InMemoryGroupTaskRepository } from '@/repositories/in-memory/in-memory-group-tasks-repository'

let tasksRepository: InMemoryTasksRepository
let groupTaskRepository: InMemoryGroupTaskRepository
let sut: CreateTaskUseCase

describe('Create Task Use Case', () => {
  beforeEach(() => {
    tasksRepository = new InMemoryTasksRepository()
    groupTaskRepository = new InMemoryGroupTaskRepository()
    sut = new CreateTaskUseCase(tasksRepository, groupTaskRepository)

    groupTaskRepository.items.push({
      id: 'group_task-01',
      name: 'Faculdade',
      user_id: 'user-01',
    })

    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should be able to create task', async () => {
    const { task } = await sut.execute({
      userId: 'user-01',
      groupTaskId: 'group_task-01',
      name: 'Prova de História',
      description: 'Assunto: Segunda Guerra Mundial, Bloco: 02',
      reminder: true,
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    console.log(task.created_at)

    expect(task.id).toEqual(expect.any(String))
  })
})
