import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryTasksRepository } from '@/repositories/in-memory/in-memory-tasks-repository'
import { CreateTaskUseCase } from './create-task'

let tasksRepository: InMemoryTasksRepository
let sut: CreateTaskUseCase

describe('Create Task Use Case', () => {
  beforeEach(() => {
    tasksRepository = new InMemoryTasksRepository()
    sut = new CreateTaskUseCase(tasksRepository)
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

    expect(task.id).toEqual(expect.any(String))
  })
})
