import { Collection } from 'mongodb';
import { Task } from '../types';
import { getCollection } from '../utils/database';

function getTasksCollection(): Collection<Task> {
  return getCollection<Task>('tasks');
}

export async function insertTask(task: Task): Promise<Task> {
  const result = await getTasksCollection().insertOne(task, {});
  const insertedPlant = result.ops[0];
  return insertedPlant;
}

export async function findTask(task: Partial<Task>): Promise<Task | null> {
  return await getTasksCollection().findOne(task);
}

export async function findTasks(): Promise<Task[]> {
  return await getTasksCollection().find().toArray();
}

export async function deleteTasks(task: Partial<Task>): Promise<boolean> {
  const result = await getTasksCollection().deleteOne(task);
  return typeof result.deletedCount === 'undefined' || result.deletedCount > 0;
}
