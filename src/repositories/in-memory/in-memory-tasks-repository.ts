import { Prisma, Task } from '@prisma/client'
import { TasksRepository } from '../tasks-repository'
import { randomUUID } from 'crypto'

export class InMemoryTasksRepository implements TasksRepository {
  public items: Task[] = []

  async create(data: Prisma.TaskUncheckedCreateInput) {
    const task = {
      id: randomUUID(),
      user_id: data.user_id,
      group_task_id: data.group_task_id,
      name: data.name,
      description: data.description ? data.description : '',
      reminder: data.reminder,
      date: new Date(data.date),
      created_at: data.created_at ? new Date(data.created_at) : new Date(),
      updated_at: data.updated_at ? new Date(data.updated_at) : new Date(),
    }

    this.items.push(task)

    return task
  }
}
