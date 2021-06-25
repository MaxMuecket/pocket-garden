import express from 'express';
import { deletePlant, findPlant, insertPlant } from './plant';

const router = express.Router();

router.post('/plants', async (req, res, next) => {
  try {
    const plant = req.body;
    const insertedPlant = await insertPlant(plant);
    if (!insertedPlant) {
      res.status(409).send('Add new plant failed');
      return;
    }
    res.status(201).json(insertedPlant);
  } catch (error) {
    next(error);
  }
});

router.get('/plants/:name', async (req, res, next) => {
  try {
    const { name } = req.params;
    const plant = await findPlant({ name });
    if (!plant) {
      res.status(404).send('Plant not found');
      return;
    }
    res.status(200).json(plant);
  } catch (error) {
    next(error);
  }
});

router.delete('/plants/:name', async (req, res, next) => {
  try {
    const { name } = req.params;
    const plant = await deletePlant({ name });
    if (!plant) {
      res.status(404).send('Plant not found');
      return;
    }
    res.status(200).json(plant);
  } catch (error) {
    next(error);
  }
});

export default router;
