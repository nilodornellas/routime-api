import { GroupTask } from '@prisma/client'

export interface GroupTaskRepository {
  findById(id: string): Promise<GroupTask | null>
}
