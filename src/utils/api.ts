import { CloudinaryImage, Plant, Task } from '../types';

// api for Plants
export async function postPlant(plant: Plant): Promise<Plant> {
  const response = await fetch('/api/plants', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(plant),
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw errorMessage;
  }
  const result: Plant = await response.json();
  return result;
}

export async function uploadPlantImage(
  imageFile: File
): Promise<CloudinaryImage> {
  const formData = new FormData();
  formData.append('file', imageFile);
  formData.append(
    'upload_preset',
    `${import.meta.env.VITE_CLOUDINARY_PRESET_NAME}`
  );

  const cloudinaryResponse = await fetch(
    `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    }/upload`,
    {
      method: 'post',
      body: formData,
    }
  );
  const cloudinaryResult = await cloudinaryResponse.json();
  return cloudinaryResult;
}

// api for Tasks
export async function postTask(task: Task): Promise<Task> {
  const response = await fetch('/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw errorMessage;
  }
  const result: Task = await response.json();
  return result;
}
