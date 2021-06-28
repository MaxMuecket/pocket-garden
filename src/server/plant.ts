import { Collection } from 'mongodb';
import { NewPlant } from '../types';
import { getCollection } from '../utils/database';

function getPlantsCollection(): Collection<NewPlant> {
  return getCollection<NewPlant>('plants');
}

export async function insertPlant(plant: NewPlant): Promise<NewPlant> {
  const result = await getPlantsCollection().insertOne(plant, {});
  const insertedPlant = result.ops[0];
  return insertedPlant;
}

export async function findPlant(
  plant: Partial<NewPlant>
): Promise<NewPlant | null> {
  return await getPlantsCollection().findOne(plant);
}

export async function findPlants(): Promise<NewPlant[]> {
  return await getPlantsCollection().find().toArray();
}

export async function deletePlant(plant: Partial<NewPlant>): Promise<boolean> {
  const result = await getPlantsCollection().deleteOne(plant);
  return typeof result.deletedCount === 'undefined' || result.deletedCount > 0;
}
