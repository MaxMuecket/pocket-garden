import express from 'express';
import { deletePlant, findPlant, insertPlant, findPlants } from './plant';
import { deleteTasks, findTask, findTasks, insertTask } from './task';

const router = express.Router();

// router for plants
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

router.get('/plants', async (_req, res, next) => {
  try {
    const plants = await findPlants();
    if (!plants) {
      res.status(404).send('Plants not found');
      return;
    }
    res.status(200).json(plants);
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

//router for tasks
router.post('/tasks', async (req, res, next) => {
  try {
    const task = req.body;
    const insertedTask = await insertTask(task);
    if (!insertedTask) {
      res.status(409).send('Add new task failed');
      return;
    }
    res.status(201).json(insertedTask);
  } catch (error) {
    next(error);
  }
});

router.get('/Tasks', async (_req, res, next) => {
  try {
    const tasks = await findTasks();
    if (!tasks) {
      res.status(404).send('Tasks not found');
      return;
    }
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
});

router.get('/tasks/:title', async (req, res, next) => {
  try {
    const { title } = req.params;
    const task = await findTask({ title });
    if (!task) {
      res.status(404).send('Task not found');
      return;
    }
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
});

router.delete('/tasks/:title', async (req, res, next) => {
  try {
    const { title } = req.params;
    const task = await deleteTasks({ title });
    if (!task) {
      res.status(404).send('Task not found');
      return;
    }
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
});

export default router;
