import { makeVar } from '@apollo/client'

type Task = { title: string }

export const todoVar = makeVar<Task[]>([])
