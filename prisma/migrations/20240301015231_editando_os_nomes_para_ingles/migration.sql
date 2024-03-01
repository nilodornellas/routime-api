/*
  Warnings:

  - You are about to drop the column `title` on the `groups_tasks` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `lembrete` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `tasks` table. All the data in the column will be lost.
  - Added the required column `name` to the `groups_tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reminder` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "groups_tasks" DROP COLUMN "title",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tasks" DROP COLUMN "data",
DROP COLUMN "descricao",
DROP COLUMN "lembrete",
DROP COLUMN "nome",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "reminder" BOOLEAN NOT NULL;
