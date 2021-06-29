import { Collection } from 'mongodb';
import { Plant } from '../types';
import { getCollection } from '../utils/database';

function getPlantsCollection(): Collection<Plant> {
  return getCollection<Plant>('plants');
}

export async function insertPlant(plant: Plant): Promise<Plant> {
  const result = await getPlantsCollection().insertOne(plant, {});
  const insertedPlant = result.ops[0];
  return insertedPlant;
}

export async function findPlant(plant: Partial<Plant>): Promise<Plant | null> {
  return await getPlantsCollection().findOne(plant);
}

export async function findPlants(): Promise<Plant[]> {
  return await getPlantsCollection().find().toArray();
}

export async function deletePlant(plant: Partial<Plant>): Promise<boolean> {
  const result = await getPlantsCollection().deleteOne(plant);
  return typeof result.deletedCount === 'undefined' || result.deletedCount > 0;
}
