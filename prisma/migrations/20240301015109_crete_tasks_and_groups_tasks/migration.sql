/*
  Warnings:

  - You are about to drop the `atividade` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `grupos_atividades` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "atividade";

-- DropTable
DROP TABLE "grupos_atividades";

-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "lembrete" BOOLEAN NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "groups_tasks" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "groups_tasks_pkey" PRIMARY KEY ("id")
);
