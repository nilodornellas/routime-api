import { GroupTask } from '@prisma/client'
import { GroupTaskRepository } from '../group-task-repository'

export class InMemoryGroupTaskRepository implements GroupTaskRepository {
  public items: GroupTask[] = []

  async findById(id: string) {
    const groupTask = this.items.find((item) => item.id === id)

    if (!groupTask) {
      return null
    }

    return groupTask
  }
}
