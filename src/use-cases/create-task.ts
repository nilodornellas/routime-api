import { Task } from '@prisma/client'
import { TasksRepository } from '@/repositories/tasks-repository'
import { GroupTaskRepository } from '@/repositories/group-task-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface CreateTaskUseCaseRequest {
  userId: string
  groupTaskId: string
  name: string
  description: string | null
  reminder: boolean
  date: Date
  createdAt: Date
  updatedAt: Date
}

interface CreateTaskUseCaseResponse {
  task: Task
}

export class CreateTaskUseCase {
  constructor(
    private tasksRepository: TasksRepository,
    private groupTaskRepository: GroupTaskRepository,
  ) {}

  async execute({
    userId,
    groupTaskId,
    name,
    description,
    reminder,
    date,
    createdAt,
    updatedAt,
  }: CreateTaskUseCaseRequest): Promise<CreateTaskUseCaseResponse> {
    const groupTask = await this.groupTaskRepository.findById(groupTaskId)

    if (!groupTask) {
      throw new ResourceNotFoundError()
    }

    const task = await this.tasksRepository.create({
      user_id: userId,
      group_task_id: groupTaskId,
      name,
      description,
      reminder,
      date,
      created_at: createdAt,
      updated_at: updatedAt,
    })

    return {
      task,
    }
  }
}
